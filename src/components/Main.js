const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const Canvox = require("./../canvox/canvox.js");
const Canhud = require("./../canhud/canhud.js");
const TA = require("./../TaelinArena.js");
const ethers = require("ethers");
const request = require("xhr-request-promise");
const SimplePeer = require("simple-peer");
const utils = require("./../utils.js");
const post = (func, body) => {
  return request("/"+func, {method:"POST",body,json:true});
};

const Register = require("./Register.js");
const GameList = require("./GameList.js");
const Chat = require("./Chat.js");

const Controls = require("./Main.controls.js");

// Main HUD
class Main extends Component {
  constructor(props) {
    super(props)
    this.modal = null;
    this.name = null;
    this.wallet = null;
    this.game_list = [];
    this.room_players = null;
    this.chat_msgs = [];
    this.game = null;
    this.auto_join = true;
    this.controls = Controls(nc => this.send_inputs(nc));
    this.render_mode = "GPU";
    this.picked_hero = null;
    this.canvox = null;
    this.canhud = null;
    this.peer = null;
    //this.setup_canvox();
    this.pick_hero("Dorime");
    this.login();
  }

  componentDidMount() {
    // Pools list of game
    this.game_pooler = setInterval(()=> {
      this.pool_game_list();
    }, 1000);
    this.pool_game_list();

    // Adjusts the turn to be streamed to me 
    this.turn_asker = setInterval(() => {
      this.ask_turns();
    }, 1000);

    // Executes turns on offline mode
    this.offline_mode_turner = utils.set_precise_interval(() => {
      if (this.game && this.game.gid === TA.OFF_GAME) {
        this.game.turn();
      }
    }, 1000 / TA.GAME_FPS);

    // Automatic game joiner
    this.game_joiner = setInterval(() => {
      if (this.auto_join) {
        // Gets the last game
        var gid = this.game_list.length - 1;
        var game = this.game_list[gid];
        if (game) {
          var game_curr_time = (Date.now() - game.init)/1000;
          var game_stop_time = TA.GAME_DURATION/TA.GAME_FPS+3;
          // If it is still running, join and return it
          if (game_curr_time < game_stop_time) {
            return this.join(gid);
          // Otherwise, go offline
          } else {
            return this.join(TA.OFF_GAME);
          }
        // If there is no active game, go offline
        } else {
          return this.join(TA.OFF_GAME);
        }
      };
    }, 500); 
    
    // Deals with incoming UDP data
    this.connect();
    this.peer.on("data", (data) => {
      this.on_peer_data(data);
    });

    // Appends canvox to body and renders game
    this.fps_last = Date.now();
    this.fps_tick = 0; 
    this.fps_numb = 0;
    this.render_game(true);

    // Benchmarks
    function benchmark_function(name, fn) {
      console.log("benchmarking " + name);
      var T = Date.now();
      var C = 0;
      while (Date.now() - T < 1000) {
        fn();
        C++;
      };
      console.log("done:", C, "calls");
    };
    window.addEventListener("keydown", (e) => {
      if (e.key === "k") {
        benchmark_function("render", () => {
          this.render_game(false)
        });
      };
      if (e.key === "l") {
        benchmark_function("turn", () => {
          this.game.turn()
        });
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.game_pooler);
    clearInterval(this.render_loop);
    clearInterval(this.turn_asker);
    clearInterval(this.offline_mode_turner);
    clearInterval(this.game_joiner);
  }

  componentDidUpdate() {
    //if (this.canvox) {
      //var game_screen = document.getElementById("game_screen");
      //game_screen.appendChild(this.canvox);
    //}
  }

  // Inits the canvox renderer
  //render_canvox() {
    //// If the mode changed, create it
    //var changed_mode = this.render_mode !== this.canvox.render_mode;
    //if (!this.canvox || changed_mode) {
      //this.canvox = Canvox(this.render_mode);
    //}
    //// Adds it to 
  //}

  // Joins a game given its gid
  join(gid) {
    if (!this.game || this.game.gid !== gid) {
      var things;
      if (gid === TA.OFF_GAME) {
        things = [
          [this.picked_hero, {pid:0, dmg:0, pos:{x:-64,y:0,z:0}, nam:this.picked_hero}],
          ["Poste", {pos:{x:0,y:0,z:0}, nam:"Poste"}],
          ["PPG", {pos:{x:64,y:0,z:0}, dmg:0, nam:"PPG"}],
          ["Wall", {pos:{x:-64,y:-64,z:0}, nam:"Wall"}],
        ];
      } else {
        things = this.game_list[gid].players.split(",");
        things = things.map(TA.parse_player);
        things = things.map(p => p.hero);
        things = things.map((name, idx) => {
          return [name, {
            pid: idx,
            pos: {x: -64 + idx*64, y: 0, z: 0},
            nam: name,
          }];
        });
      };
      this.game = TA.GameRunner(gid, things);
    }
  }

  // Sends controls to server
  send_inputs(netcode) {
    // If we're not on any game, return
    if (!this.game) {
      return;
    // If we're on offline mode, exec the command locally
    } else if (this.game.gid === TA.OFF_GAME) {
      this.game.exec(TA.parse_command("1"+netcode)[1]);
    // If we're online, send the command to server
    } else {
      this.post("$"+netcode);
    }
  }

  // Computes the in-game pointer from the window mouse pos
  set_mouse_pos(client_x, client_y) {
    this.controls.set_mouse_pos(client_x, client_y);
  }

  // Sends an UDP message to the server
  post(msg) {
    console.log("post:", msg);
    // If starts with '/', this is an offline command
    if (msg[0] === "/") {
      var args = msg.slice(1).split(" ");
      switch (args[0]) {
        case "new":
        case "new_game":
          if (args.length === 1) {
            var name = "game_"+((Math.random()*(2**32))>>>0);
            var players = this.room_players;
          } else {
            var name = args[1];
            var players = args[2];
          }
          console.log("posting new_game", name, players)
          post("new_game", {name, players}).then((res) => {
            if (res.ctr !== "ok") {
              alert("Error: " + res.err);
            }
          });
        break;
      }
      return;
    }
    // If starts with '!', user wants to set its hero, so we
    // make sure the hero exists
    if (msg[0] === "!") {
      var hero_name = msg.slice(1).toLowerCase();
      if (TA.thing_id[hero_name] === undefined) {
        alert("Hero '" + hero_name + "' not found.");
        return;
      }
      msg = "!" + TA.thing_name[TA.thing_id[hero_name]];
    }
    try {
      this.peer.send(msg);
    } catch (e) {
      console.log("peer.send error:", e);
    }
  }

  // Connects to the server
  connect() {
    // Peer connection
    console.log("-- peer set");
    this.peer = new SimplePeer({initiator:false,trickle:false});
    const name = "#"+(Math.random()*(2**32)>>>0).toString(16);
    console.log("-- sending p2p offer");
    post("offer",{name}).then(data => {
      console.log("-- got p2p offer answer, signaling");
      this.peer.signal(data)
    });
    this.peer.on('error', err => console.log('error', err))
    this.peer.on('signal', data => post("answer", {name,data}));
    this.peer.on('connect', () => {});
  }

  // Renders TaelinArena's screen with canvox
  render_game(loop) {
    // Gets the game screen element
    var game_screen = document.getElementById("game_screen");

    // If first render or mode changed, restart canvox
    if (!this.canvox || this.render_mode !== this.canvox.render_mode) {
      // Init canvox object
      this.canvox = Canvox[this.render_mode]();
      this.canhud = Canhud();
    }
    
    // Inject its canvas on the app
    if (game_screen) {
      if (game_screen.firstChild) {
        game_screen.removeChild(game_screen.firstChild);
        game_screen.removeChild(game_screen.firstChild);
      }
      if (!game_screen.firstChild) {
        game_screen.appendChild(this.canhud);
        game_screen.appendChild(this.canvox);
      }
    }

    // Adjusts the game screen height
    //if (game_screen) {
      //var canvox_height = this.canvox.style.height.slice(0,-2);
      //game_screen.style.height = (Number(canvox_height)+2)+"px";
      //console.log("canvox height: ", canvox_height);
    //}

    // If we're watching a game, render it on canvox
    if (this.game) {
      // Measures FPS
      ++this.fps_tick;
      if (Date.now() > this.fps_last + 1000) {
        this.fps_numb = this.fps_tick;
        this.fps_tick = 0;
        this.fps_last = Date.now();
        this.forceUpdate();
      }
      // Renders the game
      var cam = this.controls.make_canvox_cam();
      this.hud = TA.render_game({
        game: this.game.state,
        canvox: this.canvox,
        canhud: this.canhud,
        cam: cam,
      });
    }

    // Repeat on every screen render
    if (loop) {
      window.requestAnimationFrame(() => {
        this.render_game(loop)
      });
    };
  }

  // Asks missing turns for watched game
  ask_turns() {
    if (this.game && this.game.gid !== TA.OFF_GAME) {
      var turn = this.game.turns.length.toString(16);
      var turn = ("00000000"+turn).slice(-8);
      var game = this.game.gid.toString(16);
      var game = ("00000000"+game).slice(-8);
      this.post("?"+turn+game);
    }
  }

  // Pools list of games
  pool_game_list() {
    post("get_game_count", {}).then((res) => {
      var count = this.game_list.length;
      for (let id = count; id < res.count; ++id) {
        post("get_game", {id}).then((res) => {
          if (res.ctr === "ok") {
            this.game_list[id] = res.game;
            //this.forceUpdate();
          }
        });
      }
    });
  }

  // Callback for when we get UDP data
  on_peer_data(data) {
    console.log("recv: " + data);
    var str = ""+data;
    switch (str[0]) {
      // Receives room info
      case "<":
      case ">":
      case "^":
        this.room_players = str;
        this.forceUpdate();
        break;
      // Receives turn info
      case "$":
        if (this.game) {
          this.game.absorb_turn_info(str);
          this.forceUpdate();
        }
        break;
      default:
        this.chat_msgs.push(str);
        this.forceUpdate();
        break;
    }
  }

  // Selects a hero
  pick_hero(hero) {
    var picked_hid = TA.thing_id[hero.toLowerCase()];
    if (picked_hid !== undefined) {
      this.picked_hero = TA.thing_name[picked_hid];
      if (this.game && this.game.gid === TA.OFF_GAME) {
        this.game = null;
        this.join(TA.OFF_GAME);
      }
      this.post("!" + this.picked_hero);
    }
  }

  // Login procedure
  login(pvt) {
    if (!pvt) {
      var key = "taelin_arena_private_key";
      pvt = localStorage.getItem(key);
    }
    if (pvt && (pvt.length === 66 || pvt.length === 64)) {
      localStorage.setItem("taelin_arena_private_key", pvt);
      this.wallet = new ethers.Wallet(pvt);
      this.name = "logging...";
      this.forceUpdate();
      post("name_of", {addr: this.wallet.address})
        .then((res) => {
          if (res.ctr === "ok") {
            this.name = res.name;
            // TODO: proper signatures
            for (let t = 125; t <= 4000; t *= 2) {
              setTimeout(() => this.post("+"+this.name), t);
            }
            this.forceUpdate();
          }
        });
    }
  }

  // Logout procedure
  logout() {
    var key = "taelin_arena_private_key";
    localStorage.setItem(key, "");
    this.wallet = null;
    this.name = null;
    this.forceUpdate();
  }

  // Renders the complete app
  render() {
    if (this.modal) {
      return this.modal;
    }

    // Top menu: title
    var top_lft = h("div", {
      style: {
        "font-size": "16px",
        "cursor": "pointer",
      },
    }, "Taelin::Arena ");

    // Top menu: login
    if (this.name) {
      var top_rgt = h("div", {
        onClick: () => {
          if (confirm("Clique OK para deslogar.")) {
            this.logout();
          }
        },
        style: {
          "cursor": "pointer",
          "font-size": "12px"
        },
      }, [this.name]);
    } else {
      const button = (content, onclick) => {
        return h("span", {
          style: {cursor: "pointer"},
          onclick
        }, content);
      };
      var top_rgt = h("div", {
        style: {"font-size": "12px"},
      }, [
        button("Logar", () => {
          var pvt = prompt("Digite sua chave privada:");
          if (pvt && (pvt.length===66 || pvt.length===64)) {
            this.login(pvt);
          } else {
            alert("Tá errado isso ae. Você não guardou né?");
          }
        }),
        h("span", {}, " | "),
        button("Registrar", () => {
          this.modal = h(Register, {
            on_done: ({name,wallet}) => {
              this.modal = null;
              if (wallet) {
                this.login(wallet.privateKey);
              }
              this.forceUpdate();
            }
          });
          this.forceUpdate();
        }),
      ]);
    };

    // Top menu
    var top_menu = h("div", {
      style: {
        "background": "#F0F0F0",
        "height": "24px",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "space-between",
        "align-items": "center",
        "width": "100%",
        "font-size": "18px",
        "font-family": "monaco, monospace",
        "padding": "0px 4px",
        "font-weight": "bold",
      },
    }, [
      top_lft,
      top_rgt,
    ]);

    // Game hud
    //var hud = [];
    //console.log("....", this.hud);
    //for (var i = 0; i < this.hud.length; ++i) {
      //var hud_el = this.hud[i];
      //switch (hud_el.ctor) {
        //case "rect":
          //hud.push(h("div", {"style": {
            //"position": "absolute",
            //"left": hud_el.x+"px",
            //"top": hud_el.y+"px",
            //"width": hud_el.w+"px",
            //"height": hud_el.h+"px",
            //"background": hud_el.col,
          //}}, ["x"]));
          //break;
      //}
    //}

    // Game screen
    if (this.canvox) {
      var ch = Number(this.canvox.style.height.slice(0,-2));
    } else {
      var ch = 386;
    }
    var game_screen = h("div", {
      "id": "game_screen",
      "style": {
        "height": (ch + 2) + "px",
        "border-top": "1px solid #A0A0A0",
        "border-bottom": "1px solid #A0A0A0",
        "background": "#FCFCFC",
      }});

    // Bottom panel: chat box
    var chat_box = h("div", {
      "style": {
        "width": "50%",
        "height": "100%",
      }
    }, [
      h(Chat, {
        on_say: msg => this.post(msg),
        msgs: this.chat_msgs,
      })
    ]);

    // Bottom panel: info box
    var render_mode = h("span", {
      "onclick": () => {
        var next_mode = {"GPU":"CPU", "CPU":"GPU"};
        this.render_mode = next_mode[this.render_mode];
      },
      "style": {
        "text-decoration": "underline",
        "cursor": "pointer",
      }
    }, [
      this.render_mode
    ]);
    var picked_hero = h("span", {
      "onclick": () => {
        var heroes = Object.keys(TA.thing_id);
        var heroes = heroes.map(name => TA.thing_name[TA.thing_id[name]]);
        var message = "Pick a hero. Options: " + heroes.join(", ");
        var picked_hero = prompt(message); 
        if (picked_hero) {
          this.pick_hero(picked_hero);
        } else {
          alert("Invalid hero.");
        }
      },
      "style": {
        "text-decoration": "underline",
        "cursor": "pointer",
      }
    }, [
      this.picked_hero
    ]);
    var current_game = h("span", {
      "onclick": () => {
        var gid = prompt("Enter game (or empty for offline):");
        this.join(gid || TA.OFF_GAME);
      },
      "style": {
        "text-decoration": this.auto_join ? null : "underline",
        "cursor": this.auto_join ? null : "pointer",
      }
    }, [
      !this.game || this.game.gid === TA.OFF_GAME
        ? "offline"
        : "#" + this.game.gid
    ]);
    var join_mode = h("span", {
      "onclick": () => this.auto_join = !this.auto_join,
      "style": {
        "text-decoration": "underline",
        "cursor": "pointer",
      }
    }, [
      this.auto_join ? "auto-join" : "manual-join"
    ]);
    var info_box = h("pre", {
      "style": {
        "width": "50%",
        "height": "100%",
        "padding": "4px",
        "font-family": "monospace",
      }
    }, [
      h("div", {}, "FPS  : " + (this.fps_numb||0)),
      h("div", {}, ["Game : ", current_game, " (", join_mode, ")"]),
      h("div", {}, ["Mode : ", render_mode]),
      h("div", {}, ["Hero : ", picked_hero]),
      h("div", {}, ["Turn : ", (this.game?this.game.turns.length:0)]),
      h("div", {}, ["Room : ", this.room_players]),
    ]);

    // Bottom panel
    var bottom_panel = h("div", {
      "style": {
        "width": "100%",
        "flex-grow": "1",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
        "align-items": "center",
      },
    }, [chat_box, info_box]);

    // Main App
    return h("div", {
      style: {
        "position": "fixed",
        "display": "flex",
        "flex-flow": "column nowrap",
        "justify-content": "flex-start",
        "align-items": "center",
        "width": "100%",
        "height": "100%",
        "font-family": "monaco, monospace",
      },
    }, [
      top_menu,
      game_screen,
      bottom_panel,
    ])
  }
};

module.exports = Main;
