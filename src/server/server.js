(async () => {
var express = require("express");
var app = express();
var Peer = require("simple-peer");
var wrtc = require("wrtc");
var cors = require("cors");
var fs = require("fs").promises;
var path = require("path");
var ethers = require("ethers");
var TA = require("./../TaelinArena.js");

// Simple fs database
var get_str = async (key) => {
  try {
    var file_path = path.join("db", key).toLowerCase();
    return await fs.readFile(file_path, "utf8");
  } catch (e) {
    return null;
  }
};
var set_str = async (key, str) => {
  try {
    var file_path = path.join("db",key).toLowerCase();
    await fs.writeFile(file_path, str);
    return true;
  } catch (e) {
    return null;
  }
};
var push_str = async (key, str) => {
  try {
    var file_path = path.join("db",key).toLowerCase();
    await fs.appendFile(file_path, str);
  } catch (e) {
    return null;
  }
};
var get = async (key) => {
  return JSON.parse(await get_str(key));
};
var set = async (key, val) => {
  return set_str(key, JSON.stringify(val));
};

// Creates a new game
function create_new_game(game) {
  var id = games.length;
  games[id] = {...game, id};
  turns[id] = [];

  // TODO: persist efficiently
  set("games", games);
  set_str("games.turns."+id, "");
};

// Completes a turn on given game_id
function add_new_turn(gid) {
  var turn_count = turns[gid].length;
  var game_time = (Date.now() - games[gid].init) / 1000;
  if ( turn_count <= TA.GAME_DURATION
    && Date.now() >= games[gid].init) {
    // If there are no turns, add the first turn
    if (turn_count === 0) {
      turns[gid].push("");
    // Else, end the last turn and add a new one
    } else {
      turns[gid][turn_count-1] += "0"; // 'nil'
      turns[gid].push(""); // new one
      push_str("games.turns."+gid,turns[gid][turn_count-1]+"\n");
    }
  }
};

// Adds a input to given game_id
function perform_input(gid, player_name, input) {
  console.log(player_name+" acting on "+gid);
  var player_id = get_player_id(player_name, games[gid]);
  var turn_count = turns[gid].length;
  if ( turn_count > 0
    && turn_count <= TA.GAME_DURATION
    && player_id !== null
    && is_valid_input(input)) {
    console.log(
      ("- game="+gid
      +", turn="+turn_count
      +", acti="+input));
    // Creates the turn constructor: (PLAYER_ID+1)|INPUT
    var turn_ctor = (player_id+1).toString(16);
    var turn_ctor = turn_ctor + input;
    turns[gid][turn_count-1] += turn_ctor;
  }
};

// Gets the player id on given game
function get_player_id(name, game) {
  var players = game.players.split(",");
  for (var i = 0; i < players.length; ++i) {
    if (TA.parse_player(players[i]).name === name) {
      console.log("(" + name + " is " + i + ")");
      return i;
    }
  }
  return null;
};

// Validates a players object
function is_valid_players(players) {
  // TODO
  return true;
}

// Validates an input code string
function is_valid_input(code) {
  var ctr = Number(code[0]);
  if (ctr === 0 && code.length === 3) {
    return true;
  }
  if (ctr >= 1 && ctr <= 3 && code.length === 7) {
    return true;
  }
  if (ctr >= 4 && ctr <= 7) {
    return true;
  }
  return false;
};

// Validates a name string
var is_valid_name = (name) => {
  return typeof name === "string"
    && /^[a-zA-Z0-9_]{1,32}$/.test(name);
};

// Validates an Ethereum address string
var is_valid_address = (addr) => {
  try {
    return ethers.utils.getAddress(addr) === addr;
  } catch (e) {
    return false;
  }
};

// API
app.use(cors());
app.use(express.json());
app.use(express.static("docs"));

// Registers a new account, i.e., an Address/Name pair
app.post("/register", async (req, res) => {
  var name = req.body.name;
  var addr = req.body.addr;

  if (!is_valid_name(name)) {
    return res.send(JSON.stringify({
      ctr: "err",
      err: "Invalid name.",
    }));
  }
  
  if (!is_valid_address(addr)) {
    return res.send(JSON.stringify({
      ctr: "err",
      err: "Invalid address.",
    }));
  }

  if ((await get("addr_of."+name)) !== null) {
    return res.send(JSON.stringify({
      ctr: "err",
      err: "Name taken.",
    }));
  }

  console.log("Registered '"+name+"' as '"+addr+"'.");

  await set("name_of." + addr, name);
  await set("addr_of." + name, addr);
  
  res.send(JSON.stringify({ctr: "ok"}));
});

// Gets the name of an address
app.post("/name_of", async (req, res) => {
  var name = await get("name_of."+req.body.addr);
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
  if (!is_valid_name(name)) {
    return res.send(JSON.parse({
      ctr: "err",
      err: "Invalid game name.",
    }));
  }

  // Validates team format
  var players = req.body.players; 
  if (!is_valid_players(players)) {
    return res.send(JSON.stringify({
      ctr: "err",
      err: "Invalid players.",
    }));
  }

  // Creates new game and sends success answer
  var init = Date.now() + 2000;
  create_new_game({name,players,init});
  res.send(JSON.stringify({ctr:"ok"}));
});

// Gets the game count
app.post("/get_game_count", async (req, res) => {
  res.send(JSON.stringify({
    ctr: "ok",
    count: games.length,
  }));
});

// Gets a game
app.post("/get_game", async (req, res) => {
  var game = games[req.body.id];
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
    if (game !== TA.NIL_GAME) {
      var count = turns[game].length;

      // Gather 5 turns around the one demanded by peer
      var from = Math.min(Math.max((turn||0)-5, 0),count-1); 
      var to = Math.min((turn||0)+5, count-1);

      // Creates message with game_id, from_turn and inputs
      var msg = "";
      msg += ("00000000"+game.toString(16)).slice(-8); 
      msg += ("00000000"+from.toString(16)).slice(-8);
      for (var i = from; i < to; ++i) {
        msg += "1"+turns[game][i];
      }
      msg += "0";

      // Updates the turn demanded by peer
      turn = Math.min(turn + 3, turns[game].length);

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
          perform_input(game, name, str.slice(1));
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
    //console.log(">> "+name+" close <<");
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

// Initializes the global state
var peers = {};
var games = await get("games") || [];
var turns = [];
for (var gid = 0; gid < games.length; ++gid) {
  var turn_file = (await get_str("games.turns."+gid)) || "";
  turns[gid] = turn_file.split("\n");
  turns[gid].pop();
}

console.log("Server started.");

// Main loop: passes time on all active games
setInterval(() => {
  for (var gid = 0; gid < games.length; ++gid) {
    add_new_turn(gid);
  }
}, 1000 / TA.GAME_FPS);

})();
