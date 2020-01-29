const PARAM = window.location.search;
const DEBUG_ON = PARAM.indexOf("debug") !== -1;
const DEBUG_ID
  = PARAM.indexOf("zoio") !== -1 ? 3
  : PARAM.indexOf("simplao") !== -1 ? 1
  : 0;

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
const Chat = require("./Chat.js");

// Main HUD
class Main extends Component {
  constructor(props) {
    super(props)
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.modal = null;
    this.name = null;
    this.wlet = null;
    this.game_id = null;
    this.game_turns = null;
    this.game_state = null;
    this.game_list = [];
    this.chat_msgs = [];
    this.keyboard = {};
    this.pointer = {x:0,y:0}; // game position
    this.mouse = {x:w/2,y:h/2}; // window position
    this.cam_pos = {x:0,y:0};
    this.pad = null;
    this.canvox = canvox();
    this.peer = null;
    this.login();
    if (DEBUG_ON) {
      this.game_id = -1;
      this.game_turns = [];
      this.game_state = TA.new_game;
      setInterval(() => {
        var gs = this.game_state;
        this.game_state = TA.exec_game_turn(gs);
      }, 1000 / 24);
    }
  }
  emit_keys() {
    let keyboard = this.keyboard;
    let pointer = this.pointer;
    var action_code = TA.make_action_code(keyboard,pointer);
    if (action_code && DEBUG_ON) {
      var ac = String((DEBUG_ID||0)+1) + action_code;
      var pa = TA.parse_player_action(ac)[1];
      var gs = this.game_state;
      this.game_state = TA.exec_player_action(pa, gs);
    } else if (action_code) {
      var is_same_code = this.last_code === action_code;
      var is_sdir_code = action_code[0] === "0";
      // Prevents repeatedly sending the same SDIR event
      if (!(is_sdir_code && is_same_code)) {
        this.post("$"+action_code);
      }
      this.last_code = action_code;
    }
    // Sets 'changed' flag to false
    for (var key in this.keyboard) {
      this.keyboard[key][0] = 0;
    }
  }
  make_cam(cam) {
    var W = window.innerWidth;
    var H = window.innerHeight;
    var T = Date.now()/1000;
    var ang = Math.PI * 1/4;
    var cos = Math.cos(ang);
    var sin = Math.sin(ang);
    var front = {x:0, y:cos, z:-sin};
    var right = {x:1, y:0, z:0};
    var down = {x:0, y:-sin, z:-cos};
    var pos_x = this.cam_pos.x;
    var pos_y = this.cam_pos.y - 2048*cos;
    var pos_z = 2048*sin;
    var pos = {x:pos_x, y:pos_y, z:pos_z};
    return {
      pos   : pos, // center pos
      ang   : ang,
      right : right, // right direction
      down  : down, // down direction
      front : front, // front direction
      size  : {x:W*0.5, y:H*0.5}, // world size
      port  : {x:W, y:H}, // browser size
      res   : 1.0, // rays_per_pixel = res^2
    };
  }
  set_mouse_pos(client_x, client_y) {
    this.mouse = {x: client_x, y: client_y};
    var c = this.make_cam();
    var u = c.size.x / c.port.x;
    var v = c.size.y / c.port.y / Math.cos(c.ang);
    var i = (+this.mouse.x - Math.floor(c.port.x*0.5));
    var j = (-this.mouse.y + Math.floor(c.port.y*0.5));
    var x = this.cam_pos.x + i * u;
    var y = this.cam_pos.y + j * v;
    this.pointer = {x, y};
  }
  post(msg) {
    if (msg[0] === "/") {
      var args = msg.slice(1).split(" ");
      switch (args[0]) {
        case "new":
        case "new_game":
          //console.log("creating a new game");
          var name = args[1];
          var lft = args[2].split(",");
          var rgt = args[3].split(",");
          var teams = {lft, rgt};
          //console.log(name, teams);
          post("new_game", {name, teams}).then((res) => {
            if (res.ctr === "ok") {
              alert("Game created!");
            } else {
              alert("Error: " + res.err);
            }
          });
        break;
      }
    } else {
      try {
        this.peer.send(msg);
      } catch (e) {
        console.log("peer.send error:", e);
      }
    }
  }
  componentDidMount() {
    // Peer connection
    this.peer = new SimplePeer({
      initiator: false,
      trickle: false});
    const name = "#"+(Math.random()*(2**32)>>>0).toString(16);
    post("offer",{name}).then(data => this.peer.signal(data));
    this.peer.on('error', err => console.log('error', err))
    this.peer.on('signal', data => post("answer", {name,data}));
    this.peer.on('connect', () => {});

    // Appends canvox to body
    document.body.appendChild(this.canvox);
    this.fps_last = Date.now();
    this.fps_tick = 0; 
    window.requestAnimationFrame(function render() {
      if (this.game_id) {

        // Measures FPS
        ++this.fps_tick;
        if (Date.now() > this.fps_last + 1000) {
          console.log("fps:", this.fps_tick);
          this.fps_tick = 0;
          this.fps_last = Date.now();
        }

        // Moves camera with mouse
        var cam_dir = {x:0, y:0};
        if (this.mouse.x <= 16) {
          cam_dir.x = -6;
        } else if (this.mouse.x >= window.innerWidth-16) {
          cam_dir.x = 6;
        } else {
          cam_dir.x = 0;
        }
        if (this.mouse.y <= 16) {
          cam_dir.y = 6;
        } else if (this.mouse.y >= window.innerHeight-16) {
          cam_dir.y = -6;
        } else {
          cam_dir.y = 0;
        }
        this.cam_pos.x += cam_dir.x;
        this.cam_pos.y += cam_dir.y;

        // Renders the game
        TA.render_game({
          game: this.game_state,
          canvox: this.canvox,
          cam: this.make_cam()
        });
      }
      window.requestAnimationFrame(render.bind(this));
    }.bind(this));

    // Game inputs
    const key_name = {
      "w": "w",
      "a": "a",
      "s": "s",
      "d": "d",
      "e": "extra",
      " ": "space",
      "shift": "shift",
    };
    document.body.onkeyup = (e) => {
      var name = key_name[e.key.toLowerCase()];
      if (name) {
        this.keyboard[name] = [1,0];
        this.emit_keys();
      }
    };
    document.body.onkeydown = (e) => {
      var name = key_name[e.key.toLowerCase()];
      if (name) {
        this.keyboard[name] = [1,1];
        this.emit_keys();
      }
    };
    document.body.onmousedown = (e) => {
      switch (e.which) {
        case 1: this.keyboard["left"] = [1,1]; break;
        case 2: this.keyboard["middle"] = [1,1]; break;
        case 3: this.keyboard["right"] = [1,1]; break;
      }
      this.emit_keys();
    };
    document.body.oncontextmenu = (e) => {
      //console.log("?????");
      //this.keyboard["right"] = [1,1];
      //this.emit_keys();
      e.preventDefault();
    };
    const set_mouse_pos = (client_x, client_y) => {
      var c = this.make_cam();
      var u = c.size.x / c.port.x;
      var v = c.size.y / c.port.y / Math.cos(c.ang);
      var x = this.cam_pos.x
            + (+client_x - Math.floor(c.port.x * 0.5)) * u;
      var y = this.cam_pos.y
            + (-client_y + Math.floor(c.port.y * 0.5)) * v;
      this.pointer = {x, y};
    };
    window.onmousemove = (e) => {
      this.set_mouse_pos(e.clientX, e.clientY);
    };
    window.onmouseout = (e) => {
      this.set_mouse_pos(e.clientX, e.clientY);
      this.mouse_out_timeout = setTimeout(() => {
        this.set_mouse_pos({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2});
      }, 250);
    };
    window.onmousein = (e) => {
      this.set_mouse_pos(e.clientX, e.clientY);
      if (this.mouse_out_timeout) {
        clearTimeout(this.mouse_out_timeout);
        this.mouse_out_timeout = null;
      }
    };

    // Pools list of game
    const pool_game_list = () => {
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
    };
    this.game_pooler = setInterval(pool_game_list, 2000);
    pool_game_list();

    // Adjusts the turn to be streamed to me 
    this.turn_asker = setInterval(() => {
      if (this.game_id && !DEBUG_ON) {
        console.log(
          "Ask turn="+this.game_turns.length
          +" game="+this.game_id);
        var turn = this.game_turns.length.toString(16);
        var turn = ("00000000"+turn).slice(-8);
        var game = this.game_id.toString(16);
        var game = ("00000000"+game).slice(-8);
        this.post("?"+turn+game);
      }
    }, 1000);

    // Deals with incoming UDP data
    this.peer.on("data", (data) => {
      var str = ""+data;
      switch (str[0]) {
        case "$":
          var game = parseInt(str.slice(1,9), 16);
          var from = parseInt(str.slice(9,17), 16);
          var last = this.game_turns.length;
          var new_turns = TA.parse_turns(str.slice(17))[1];
          if (from <= last) {
            for (var i = last-from; i<new_turns.length; ++i) {
              this.game_turns[i+from] = new_turns[i];
              for (var j = 0; j < new_turns[i].length; ++j) {
                let a = new_turns[i][j];
                let g = this.game_state;
                this.game_state = TA.exec_player_action(a,g);
              }
              var gs = this.game_state;
              this.game_state = TA.exec_game_turn(gs);
            }
          }
        break;
        default:
          this.chat_msgs.push(str);
        break;
      }
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    clearInterval(this.game_pooler);
    clearInterval(this.render_loop);
    clearInterval(this.turn_asker);
  }
  componentDidUpdate() {
  }
  join(game_id) {
    this.game_id = game_id;
    this.game_turns = [];
    this.game_state = TA.new_game;
    this.forceUpdate();
  }
  login(pvt) {
    if (!pvt) {
      var key = "taelin_arena_private_key";
      pvt = localStorage.getItem(key);
    }
    if (pvt && (pvt.length === 66 || pvt.length === 64)) {
      localStorage.setItem("taelin_arena_private_key", pvt);
      this.wlet = new ethers.Wallet(pvt);
      this.name = "logging...";
      this.forceUpdate();
      post("name_of", {addr: this.wlet.address})
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
  logout() {
    var key = "taelin_arena_private_key";
    localStorage.setItem(key, "");
    this.wlet = null;
    this.name = null;
    this.forceUpdate();
  }
  //try_login() {
    //var key = "taelin_arena_private_key";
    //var pvt = localStorage.setItem(key);
    //if (pvt && pvt.length === 66 || pvt.length === 64) {
      //this.login(pvt);
    //}
  //}
  render() {
    if (this.modal) {
      return this.modal;
    }

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
        this.game_id = null;
        this.forceUpdate();
      }
    }, "Taelin::Arena (alpha-0.0.0)");

    if (this.game_id) {
      var top_rgt = h("div", {
        style: {
          "font-size": "12px"
        }
      }, "turn="+this.game_turns.length);
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
            on_done: ({name,wlet}) => {
              this.modal = null;
              this.login(wlet.privateKey);
              //this.forceUpdate();
            }
          });
          this.forceUpdate();
        }),
      ]);
    };

    var top_menu = h("div", {
      style: {
        "background": this.game_id ? null : "#4070D0",
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
        "color": this.game_id ? "black" : "white",
      },
    }, [
      top_lft,
      top_rgt,
    ])

    return h("div", {
      style: {
        "position": "fixed",
        "width": "100%",
        "height": "100%",
        "font-family": "monaco, monospace",
      },
    }, [
      top_menu,
      this.game_id
        ? null
        : h(Chat, {
          on_say: msg => this.post(msg),
          msgs: this.chat_msgs,
        }),
      this.game_id
        ? null
        : h(GameList, {
          game_list: this.game_list,
          join: (game) => this.join(game)
        }),
    ])
  }
};

module.exports = Main;
