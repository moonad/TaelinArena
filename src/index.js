const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const oct = require("./octree.js");
const canvox = require("./canvox.js");
const TA = require("./TaelinArena.js");
const extra = require("./extra.js");
const ethers = require("ethers");
const request = require("xhr-request-promise");
const SimplePeer = require("simple-peer");
const FPS = 36;
const post = (func, body) => {
  return request("/"+func, {method:"POST",body,json:true});
};

// Peer connection
const peer = new SimplePeer({
  initiator: false,
  trickle: false});
const name = "#"+(Math.random()*(2**32)>>>0).toString(16);
post("offer",{name}).then(data => peer.signal(data));
peer.on('error', err => console.log('error', err))
peer.on('signal', data => post("answer", {name,data}));
peer.on('connect', () => {});
//peer.on('data', data => console.log(""+data));

// Send an chat message
window.say = msg => {
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
    peer.send(msg);
  }
};

// Account registration
const Register = require("./register.js");

// List of games
class GameList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var game_list = this.props.game_list;
    var col = (body, onclick) => {
      return h("td", {
        style: {
          "padding": "4px",
          "cursor": onclick ? "pointer" : null,
          "text-decoration": onclick ? "underline" : null,
        },
        onclick,
      }, body);
    };
    var rows = [];
    rows.push(h("tr", {
      style: {
        "font-weight": "bold",
        "border-bottom": "1px dotted rgba(0,0,0,0.1)",
        "background": "rgba(0,0,0,0.03)",
      }
    }, [col("Jogo"), col("Equipe L"), col("Equipe R")]));
    for (let i = game_list.length - 1; i >= 0; --i) {
      let game = game_list[i];
      let row = [];
      if (game) {
        var id = ("00000000"+game.id.toString(16)).slice(-8);
        var nm = game.name;
        row.push(col(nm, () => this.props.join(game.id)));
        row.push(col(game.teams.lft.join(", ")));
        row.push(col(game.teams.rgt.join(", ")));
      } else {
        row.push(h("td", {colspan:3}, "?"));
      }
      rows.push(h("tr", {}, row));
    }
    var table = h("table", {
      style: {
        "width": "100%",
        "font-size": "12px",
        "border-collapse": "collapse",
      }
    }, rows);

    return h("div", {
      style: {
        "position": "fixed",
        "top": "24px",
        "left": "0px",
        "width": "calc(100% - 160px)",
        "height": "calc(100% - 24px)",
        "display": "flex",
        "flex-flow": "column nowrap",
        "justify-content": "flex-start",
        "align-items": "center",
        "overflow-y": "scroll",
        "background": "rgba(255,255,255,0.2)",
      }
    }, [table]);
  }
};

// Chat
class Chat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.msgs = this.props.msgs;
    var msgs = [];
    for (var i = 0; i < this.msgs.length; ++i) {
      msgs.push(h("div", {}, this.msgs[i]));
    };
    var chat = h("div", {
      id: "chat_msgs",
      style: {
        "font-size": "10px",
        "width": "100%",
        "height": "calc(100% - 24px)",
        "padding": "4px",
        "flex-grow": "1",
        "display": "flex",
        "overflow-x": "hidden",
        "overflow-y": "scroll",
        "flex-flow": "column",
        "justify-content": "flex-start",
        "align-items": "flex-start",
      }
    }, [msgs]);

    var input = h("input", {
      id: "chat_input",
      onkeydown: (e) => {
        var value = e.target.value;
        if (e.key === "Enter") {
          say(value);
          setTimeout(() => {
            var el0 = document.getElementById("chat_input");
            var el1 = document.getElementById("chat_msgs");
            el0.value = "";
            el1.scrollTop = el1.scrollHeight;
          }, 5);
        }
        this.forceUpdate();
      },
      style: {
        "width": "calc(100% - 10px)",
        "outline": "none",
        "padding": "4px",
        "height": "24px",
        "margin": "5px",
        "border-radius": "4px",
        "border": "0px solid gray",
        "background": "#F2F2F2",
      },
    });
    return h("div", {
      style: {
        "position": "fixed",
        "right": "0px",
        "top": "24px",
        "width": "160px",
        "height": "calc(100% - 24px)",
        "border-left": "1px solid rgba(0,0,0,0.1)",
        "display": "flex",
        "flex-flow": "column nowrap",
        "justify-content": "flex-end",
        "background": "rgba(255,255,255,0.2)",
        "align-items": "center",
      }
    }, [
      chat,
      input
    ]);
  };
};

// Main HUD
class Main extends Component {
  constructor(props) {
    super(props)
    this.modal = null;
    this.name = null;
    this.wlet = null;
    this.game_id = null;
    this.game_turns = null;
    this.game_state = null;
    this.game_list = [];
    this.chat_msgs = [];
    this.key = {};
    this.pad = null;
    this.canvox = canvox();
  }
  emit_keys() {
    var key_d = this.key.d||0;
    var key_a = this.key.a||0;
    var key_w = this.key.w||0;
    var key_s = this.key.s||0;
    var pad_x = (key_d||0) - (key_a||0);
    var pad_y = (key_w||0) - (key_s||0);
    var pad = {x:pad_x, y:pad_y};
    if (this.game_id
      && (!this.pad
      || pad.x !== this.pad.x
      || pad.y !== this.pad.y)) {
      this.pad = pad;
      var px = Math.floor((pad.x+1)/2*14).toString(16);
      var py = Math.floor((pad.y+1)/2*14).toString(16);
      var act = "0" + px + py;
      //console.log("emit act ", act);
      peer.send("$" + act);
    }
  };
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
    var pos = {x:0,y:-2048*cos,z:2048*sin};
    return {
      pos   : pos, // center pos
      right : right, // right direction
      down  : down, // down direction
      front : front, // front direction
      size  : {x:W*0.5, y:H*0.5}, // world size
      port  : {x:W, y:H}, // browser size
      res   : 1.0, // rays_per_pixel = res^2
    };
  }
  componentDidMount() {
    // Appends canvox to body
    document.body.appendChild(this.canvox);
    this.render_loop = setInterval(() => {
      if (this.game_id) {
        //console.log(this.game_state);
        TA.render_game(this.game_state, this.canvox);
      }
    }, 1000/FPS);

    // Game inputs
    document.body.onkeyup = (e) => {
      this.key[e.key] = 0;
      this.emit_keys();
    };
    document.body.onkeypress = (e) => {
      this.key[e.key] = 1;
      this.emit_keys();
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
      if (this.game_id) {
        console.log(
          "Ask turn="+this.game_turns.length
          +" game="+this.game_id);
        var turn = this.game_turns.length.toString(16);
        var turn = ("00000000"+turn).slice(-8);
        var game = this.game_id.toString(16);
        var game = ("00000000"+game).slice(-8);
        peer.send("?"+turn+game);
      }
    }, 1000);

    // Deals with incoming UDP data
    peer.on("data", (data) => {
      var str = ""+data;
      switch (str[0]) {
        case "$":
          var game = parseInt(str.slice(1,9), 16);
          var from = parseInt(str.slice(9,17), 16);
          var last = this.game_turns.length;
          var new_turns = TA.parse_turns(str.slice(17));
          if (from <= last) {
            for (var i = last-from; i<new_turns.length; ++i) {
              this.game_turns[i+from] = new_turns[i];
              for (var j = 0; j < new_turns[i].length; ++j) {
                let a = new_turns[i][j];
                switch (a.action) {
                  case "dpad":
                    let x = a.params.dir.x;
                    let y = a.params.dir.y;
                    let d = v3 => v3(x)(y)(0);
                    var e = TA.game_dpad(a.player)(d);
                  break;
                }
                var g = this.game_state;
                var g = TA.exec_game_action(e)(g);
                this.game_state = g;
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
            this.wlet = null;
            this.name = null;
            this.forceUpdate();
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
          if (pvt && pvt.length===66 || pvt.length===64) {
            this.wlet = new ethers.Wallet(pvt);
            this.name = "anonymous";
            this.forceUpdate();
            post("name_of", {addr: this.wlet.address})
              .then((res) => {
                if (res.ctr === "ok") {
                  this.name = res.name;
                  say("+"+this.name); // TODO: sign
                  this.forceUpdate();
                }
              });
          } else {
            alert("Tá errado isso ae. Você não guardou né?");
          }
        }),
        h("span", {}, " | "),
        button("Registrar", () => {
          this.modal = h(Register, {
            ondone: ({name,wlet}) => {
              this.wlet = wlet;
              this.name = name;
              this.modal = null;
              this.forceUpdate();
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
        : h(Chat, {msgs: this.chat_msgs}),
      this.game_id
        ? null
        : h(GameList, {
          game_list: this.game_list,
          join: (game) => this.join(game)
        }),
    ])
  }
};

window.onload = () => {
  // Renders site using Inferno
  render(h(Main), document.getElementById("main"));
};

setTimeout(() => {
  peer.send("+SrPx");
}, 2000);
