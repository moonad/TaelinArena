// HTML Rendering
const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const oct = require("./octree.js");
const canvox = require("./canvox.js");
const TA = require("./TaelinArena.js");
const extra = require("./extra.js");

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0};
  }
  componentDidMount() {
  }
  render() {
    return h("div", {
      style: {
        "position": "absolute",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
        "width": "100%",
        "margin": "2px",
        "font-size": "16px",
        "font-family": "monospace",
        "font-weight": "bold",
      },
      onClick: () => {
        this.setState({count: this.state.count + 1});
      }
    }, [
      h("span", {}, "Taelin Arena"),
    ])
  }
};

window.onload = () => {
  // Renders site using Inferno
  render(h(Main), document.getElementById("main"));

  // Creates canvas and inserts on page
  var canvas = canvox();
  document.body.appendChild(canvas);

  // Keys that are pressed
  var key = {};
  var refresh_game_pad = () => {
    var key_d = key.d||0;
    var key_a = key.a||0;
    var key_w = key.w||0;
    var key_s = key.s||0;
    var event = t => {
      var id = 0;
      var dir = t => {
        var x = (key_d||0) - (key_a||0);
        var y = (key_w||0) - (key_s||0);
        var z = 0;
        return t(x)(y)(0);
      }
      return t(id)(dir);
    };
    game = TA.input_game(event)(game);
  };
  document.body.onkeyup = (e) => {
    key[e.key] = 0;
    refresh_game_pad();
  };
  document.body.onkeypress = (e) => {
    key[e.key] = 1;
    refresh_game_pad();
  };

  // FPS metering
  var last_fps_print = extra.now();
  var fps_count = 0;

  // Initial state of the game
  var game = TA.demo_game;

  // Main loop of the game
  setInterval(function main_loop() {
    // Updates the FPS counter
    ++fps_count;
    if (extra.now() > last_fps_print + 1) {
      document.title = "FPS " + fps_count;
      fps_count = 0;
      last_fps_print = extra.now();
    };

    // Renders game to canvas
    TA.render_game(game, canvas);

    // Updates game state
    game = TA.tick_game(game);

  }, 1000 / 24);
};

const Peer = require("peerjs").peerjs.Peer;

console.log("- J: init peerjs");
console.log("- K: connect to peer");
console.log("- L: send a message");

var peer = null;
var name = null;
var conns = [];
const on_data = (name) => (data) => {
  console.log("[" + name + "] " + data);
};
const on_open = (name) => () => {
  console.log("- Connected to '" + name + "'.");
};
const register = (conn_name, conn) => {
  console.log("- New connection from '" + conn_name + "'.");
  conn.on("data", on_data(conn_name));
  conn.on("open", on_open(conn_name));
  conns.push(conn);
};
window.onkeypress = (e) => {
  switch (e.key) {
    case "j":
      name = prompt("name?");
      console.log("PeerJS started as '" + name + "'.");
      peer = new Peer(name); 
      peer.on('connection', (conn) => {
        register(conn.peer, conn);
      });
      break;
    case "k":
      var conn_name = prompt("Connect to:");
      var conn = peer.connect(conn_name);
      register(conn_name, conn);
      break;
    case "l":
      var msg = prompt("Message:");
      conns.forEach(conn => conn.send(msg));
      on_data(name)(msg);
      break;
  }
};
