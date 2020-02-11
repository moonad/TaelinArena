const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const canvox = require("./../canvox/canvox.js");
const TA = require("./../TaelinArena.js");
const ethers = require("ethers");
const request = require("xhr-request-promise");
const SimplePeer = require("simple-peer");
const post = (func, body) => {
  return request("/"+func, {method:"POST",body,json:true});
};

const Register = require("./register.js");
const GameList = require("./GameList.js");
const Room = require("./Room.js");
const Chat = require("./Chat.js");

// Global debug options
var PARAM = window.location.search;
var DEBUG_MODE = PARAM.indexOf("debug") !== -1;
var DEBUG_HERO = 0;
for (var hero_name in TA.hero_id) {
  if (PARAM.indexOf(hero_name) !== -1) {
    DEBUG_HERO = hero_name;
  }
}

const game = require("./Main.game.js");
const controls = require("./Main.controls.js");

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
    this.game = game();
    this.controls = controls(nc => this.send_inputs(nc));
    this.canvox = canvox();
    this.peer = null;
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

    // Deals with incoming UDP data
    this.connect();
    this.peer.on("data", (data) => {
      this.on_peer_data(data);
    });

    // Appends canvox to body and renders game
    document.body.appendChild(this.canvox);
    this.fps_last = Date.now();
    this.fps_tick = 0; 
    this.fps_numb = 0;
    this.render_game();
  }

  componentWillUnmount() {
    clearInterval(this.game_pooler);
    clearInterval(this.render_loop);
    clearInterval(this.turn_asker);
  }

  componentDidUpdate() {
  }

  // Starts watching game given its gid
  watch(gid) {
    if (this.game.gid !== gid) {
      var hero_list;
      if (DEBUG_MODE) {
        hero_list = [DEBUG_HERO];
      } else {
        hero_list = this.game_list[gid].players.split(",");
        hero_list = hero_list.map(TA.parse_player);
        hero_list = hero_list.map(p => p.hero);
      };
      this.controls.center_mouse();
      this.game.init(gid, hero_list);
      if (DEBUG_MODE) {
        setInterval(()=>this.game.turn(), 1000/TA.GAME_FPS);
      }
    }
    return gid;
  }

  // Stops watching any game
  unwatch() {
    this.game.stop();
    return TA.NIL_GAME;
  }

  // Gets the gid of the game we're currently watching
  get_watched_gid() {
    // If on debug mode, return gid=0
    if (DEBUG_MODE) {
      return this.watch(0);
    // Otherwise...
    } else {
      // Gets the last game
      var gid = this.game_list.length - 1;
      var game = this.game_list[gid];
      if (game) {
        var game_curr_time = (Date.now() - game.init)/1000;
        var game_stop_time = TA.GAME_DURATION/TA.GAME_FPS+3;
        // If it is still running, watch and return it
        if (game_curr_time < game_stop_time) {
          return this.watch(gid);
        // Otherwise, unwatch
        } else {
          return this.unwatch();
        }
      // If there is no active game, unwatch
      } else {
        return this.unwatch();
      }
    }
  }

  // Sends controls to server
  send_inputs(netcode) {
    // If we're not watching any game, return
    if (this.get_watched_gid() === TA.NIL_GAME) {
      return;
    // Otherwise, makes input code and sends to server
    } else if (DEBUG_MODE) {
      this.game.exec(TA.parse_command("1"+netcode)[1]);
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
          if (this.name !== "MaiaVictor") return;
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
      if (TA.hero_id[hero_name] === undefined) {
        alert("Hero '" + hero_name + "' not found.");
        return;
      }
      msg = "!" + TA.hero_name[TA.hero_id[hero_name]];
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
  render_game() {
    if (this.get_watched_gid() !== TA.NIL_GAME) {
      // Measures FPS
      ++this.fps_tick;
      if (Date.now() > this.fps_last + 1000) {
        this.fps_numb = this.fps_tick;
        this.fps_tick = 0;
        this.fps_last = Date.now();
        this.forceUpdate();
      }
      // Renders the game
      TA.render_game({
        game: this.game.state,
        canvox: this.canvox,
        cam: this.controls.make_canvox_cam()
      });
    }
    window.requestAnimationFrame(() => this.render_game());
  }

  // Asks missing turns for watched game
  ask_turns() {
    if (!DEBUG_MODE) {
      var game_id = this.get_watched_gid();
      if (game_id !== TA.NIL_GAME) {
        var turn = this.game.turns.length.toString(16);
      } else {
        var turn = 0;
      }
      var turn = ("00000000"+turn).slice(-8);
      var game = game_id.toString(16);
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
            this.forceUpdate();
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
        break;
      // Receives turn info
      case "$":
        this.game.absorb_turn_info(str);
        break;
      default:
        this.chat_msgs.push(str);
        break;
    }
    this.forceUpdate();
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

    var game_id = this.get_watched_gid();

    const button = (content, onclick) => {
      return h("span", {
        style: {
          cursor: "pointer",
        },
        onclick
      }, content);
    };

    var top_lft = h("div", {
      style: {
        "font-size": "16px",
        "cursor": "pointer",
      },
      onClick: () => {
        this.forceUpdate();
      }
    }, "Taelin::Arena (test-room)");

    if (game_id !== TA.NIL_GAME) {
      var top_rgt = h("div", {
        style: {
          "font-size": "12px"
        }
      },"fps="+(this.fps_numb||0)+", "+
        "turn="+this.game.turns.length);
    } else if (this.name) {
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
      var top_rgt = h("div", {
        style: {
          "font-size": "12px"
        },
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
              this.login(wallet.privateKey);
              //this.forceUpdate();
            }
          });
          this.forceUpdate();
        }),
      ]);
    };

    var top_menu = h("div", {
      style: {
        "background": game_id !== TA.NIL_GAME ? null : "black",
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
        "color": game_id !== TA.NIL_GAME ? "black" : "white",
      },
    }, [
      top_lft,
      top_rgt,
    ])

    return h("div", {
      style: {
        "background": game_id !== TA.NIL_GAME ? null : "#192125",
        "position": "fixed",
        "width": "100%",
        "height": "100%",
        "font-family": "monaco, monospace",
      },
    }, [
      top_menu,
      game_id !== TA.NIL_GAME
        ? null
        : h(Chat, {
          on_say: msg => this.post(msg),
          msgs: this.chat_msgs,
        }),
      game_id !== TA.NIL_GAME
        ? null
        : h(Room, {players: this.room_players})
        //: h(GameList, {
          //game_list: this.game_list,
          //join: (game) => this.join(game)
        //}),
    ])
  }
};

module.exports = Main;
