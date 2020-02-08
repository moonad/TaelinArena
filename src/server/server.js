(async () => {
var express = require("express");
var app = express();
var Peer = require("simple-peer");
var wrtc = require("wrtc");
var cors = require("cors");
var fs = require("fs").promises;
var path = require("path");
var db = require("./db.js");
var ethers = require("ethers");
var TA = require("./../TaelinArena.js");
var GS = require("./game.js");

// API
app.use(cors());
app.use(express.json());
app.use(express.static("docs"));

// Registers a new account, i.e., an Address/Name pair
app.post("/register", async (req, res) => {
  var name = req.body.name;
  var addr = req.body.addr;

  if (!gs.is_valid_name(name)) {
    return res.send(JSON.stringify({
      ctr: "err",
      err: "Invalid name.",
    }));
  }
  
  if (!gs.is_valid_address(addr)) {
    return res.send(JSON.stringify({
      ctr: "err",
      err: "Invalid address.",
    }));
  }

  if ((await db.get("addr_of."+name)) !== null) {
    return res.send(JSON.stringify({
      ctr: "err",
      err: "Name taken.",
    }));
  }

  console.log("Registered '"+name+"' as '"+addr+"'.");

  await db.set("name_of." + addr, name);
  await db.set("addr_of." + name, addr);
  
  res.send(JSON.stringify({ctr: "ok"}));
});

// Gets the name of an address
app.post("/name_of", async (req, res) => {
  var name = await db.get("name_of."+req.body.addr);
  if (!name) {
    res.send(JSON.stringify({
      ctr: "err",
      err: "Account not found.",
    }));
  } else {
    res.send(JSON.stringify({
      ctr: "ok",
      name: name
    }));
  }
});

// Creates a new game
app.post("/new_game", async (req, res) => {
  // Validates game name
  var name = req.body.name;
  if (!gs.is_valid_name(name)) {
    return res.send(JSON.parse({
      ctr: "err",
      err: "Invalid game name.",
    }));
  }

  // Validates team format
  var players = req.body.players; 
  if (!gs.is_valid_players(players)) {
    return res.send(JSON.stringify({
      ctr: "err",
      err: "Invalid players.",
    }));
  }

  // Creates new game and sends success answer
  var init = Date.now() + 2000;
  gs.create_new_game({name,players,init});
  res.send(JSON.stringify({ctr:"ok"}));
});

// Gets the game count
app.post("/get_game_count", async (req, res) => {
  res.send(JSON.stringify({
    ctr: "ok",
    count: gs.games.length,
  }));
});

// Gets a game
app.post("/get_game", async (req, res) => {
  var game = gs.games[req.body.id];
  if (game) {
    return res.send(JSON.stringify({
      ctr: "ok",
      game
    }));
  } else {
    return res.send(JSON.stringify({
      ctr: "err",
      err: "Game not found"
    }));
  }
});

// Sets up a new Peer connection
app.post("/offer", (req, res) => {
  var name = req.body.name;
  var peer = new Peer({initiator: true, wrtc, tricke: true});
  var game = TA.NIL_GAME;
  var turn = 0;

  peer.team = "spec";
  peer.hero = "MikeGator";
  peer.do_send = (msg) => {
    if (peer._pcReady) {
      try { peer.send(msg); }
      catch (e) { console.log("send_err:", e); }
    }
  };
  peers[name] = peer;

  // Continuously sends `game_id,from_turn,[input]` to peer
  var turn_feed = setInterval(() => {
    var msg = gs.make_turn_feed_message(game, turn);
    if (msg !== null) {
      // Updates the turn demanded by peer
      turn = Math.min(turn + 3, gs.turns[game].length);

      // Sends the turn to peer
      try {
        peer.do_send("$" + msg);
      } catch (e) {
        console.log(e);
      };
    }
  }, 1000 / TA.GAME_FPS);

  // Continuously sends room info if not watching game
  var room_feed = setInterval(() => {
    if (game === TA.NIL_GAME) {
      var players = [];
      for (var peer_name in peers) {
        var player = "";
        switch (peers[peer_name].team) {
          case "red" : player += "<"; break;
          case "spec": player += "^"; break;
          case "blue": player += ">"; break;
        }
        player += peer_name;
        player += "!";
        player += peers[peer_name].hero;
        players.push(player);
      }
      peer.do_send(players.join(","));
    }
  }, 500);

  peer.on("signal", data => {
    if (data.type === "offer") {
      res.send(JSON.stringify(data))
    }
  })

  peer.on("connect", () => {
    //console.log(">> "+name+" connect <<");
  })

  // Deals with messages sent by peer
  peer.on("data", (data) => {
    //console.log("recv: "+data);
    var str = "" + data;
    switch (str[0]) {

      // Mod wants to set someone's team to red.
      case "<":
        if (name !== "MaiaVictor") return;
        var pname = str.slice(1);
        if (peers[pname]) {
          peers[pname].team = "red";
        }
        break;

      // Mod wants to set someone's team to blue.
      case ">":
        if (name !== "MaiaVictor") return;
        var pname = str.slice(1);
        if (peers[pname]) {
          peers[pname].team = "blue";
        }
        break;

      // Mod wants to set someone's team to spec.
      case "^":
        if (name !== "MaiaVictor") return;
        var pname = str.slice(1);
        if (peers[pname]) {
          peers[pname].team = "spec";
        }
        break;

      // Player wants to set its name. TODO: signatures.
      case "+":
        delete peers[name];
        name = str.slice(1);
        peers[name] = peer;
        break;

      // Player wants to set its hero.
      case "!":
        peer.hero = str.slice(1);
        break;

      // Player is informing its last downloaded turn.
      case "?":
        turn = parseInt(str.slice(1,9), 16);
        game = parseInt(str.slice(9,17), 16);
        console.log(name+" wants turn="+turn+" game="+game);
        break;

      // Player wants to perform an in-game input.
      case "$":
        if (game !== TA.NIL_GAME) {
          gs.perform_input(game, name, str.slice(1));
        }
        break;

      // Player sent a normal chat message.
      default:
        //console.log("- is default");
        //console.log("-", Object.keys(peers));
        for (var peer_name in peers) {
          peers[peer_name].do_send(name+": "+str);
        }
        break;

    }
  });

  peer.on("error", (err) => {});

  peer.on("close", () => {
    if (peers[name] === peer) {
      delete peers[name];
    }
    clearInterval(turn_feed);
    clearInterval(room_feed);
  });
});

// Finishes setting up a new Peer connection
app.post("/answer", (req, res) => {
  peers[req.body.name].signal(req.body.data);
  res.send('"ok"');
});

// Starts serving files and API on port 80
app.listen(80);

// Initializes game service
var gs = await GS();

// Initializes the global state
var peers = {};

console.log("Server started.");


})();
