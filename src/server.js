(async () => {
var express = require("express");
var app = express();
var Peer = require("simple-peer");
var wrtc = require("wrtc");
var cors = require("cors");
var fs = require("fs").promises;
var path = require("path");
var ethers = require("ethers");

// Global state
var peers = {};
var games = {};

//start: time
//teams: {
  //a: [nam0, nam1, nam2, nam3, nam4],
  //b: [nam5, nam6, nam7, nam8, nam9],
//},
//prose: [
  //"
//]

// Turns ::=
//   | 0: End
//   | 1: Next(Turn, Turns)
// Turn ::=
//   | 0: End
//   | 1: Player1(Action, Turn)
//   | 2: Player2(Action, Turn)
//   | ... up to 15 ...
// Action ::=
//   | 0: Direction(x: 4bit, y: 4bit) 
//   | 1: LeftClick(x: 12bit, y: 12bit)
//   | 2: MiddleClick(x: 12bit, y:12bit)
//   | 3: RightClick(x: 12bit, y:12bit)
//   | 4: Key0
//   | 5: Key1
//   | 6: Key2
//   | 7: Key3

function parse_turns(code) {
  var turns = [];
  var idx = 0;
  while (idx < code.length) {
    if (code[idx] === "0") {
      break;
    } else {
      idx += 1;
      var turn = [];
      while (idx < code.length) {
        if (code[idx] === "0") {
          idx += 1;
          break;
        } else {
          var player = parseInt(code[idx],16);
          var action = parseInt(code[idx+1],16);
          if (action === 0) {
            var dir_x = parseInt(code[idx+2],16);
            var dir_y = parseInt(code[idx+3],16);
            turn.push({
              player,
              action: "dpad",
              params: {dir: {x: dir_x, y: dir_y}}
            });
            idx += 4;
          } else if (action >= 1 && action <= 3) {
            var pos_x_a = parseInt(code[idx+2],16);
            var pos_x_b = parseInt(code[idx+3],16);
            var pos_x_c = parseInt(code[idx+4],16);
            var pos_y_a = parseInt(code[idx+5],16);
            var pos_y_b = parseInt(code[idx+6],16);
            var pos_y_c = parseInt(code[idx+7],16);
            var pos_x = (pos_x_a<<8) | (pos_x_b<<4) | pos_x_c;
            var pos_y = (pos_y_a<<8) | (pos_y_b<<4) | pos_y_c;
            turn.push({
              player,
              action: ["mlft","mmid","mrgt"][action-1],
              params: {pos: {x: pos_x, y: pos_y}}
            });
            idx += 8;
          } else {
            turn.push({
              player,
              action: "key" + (action - 4)
            });
            idx += 2;
          };
        }
      };
      turns.push(turn);
    }
  };
  return turns;
};

var str = "";
for (var i = 0; i < 100000; ++i) {
  str += "120784455220110020";
};
str += "0";

function is_valid_action(code) {
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

var is_valid_name = (name) => {
  return typeof name === "string"
    && /^[a-zA-Z0-9_]{1,32}$/.test(name);
};

var is_valid_address = (addr) => {
  try {
    return ethers.utils.getAddress(addr) === addr;
  } catch (e) {
    return false;
  }
};

// Simple fs database
var get = async (key) => {
  try {
    var file_path = path.join("db", key).toLowerCase();
    return JSON.parse(await fs.readFile(file_path, "utf8"));
  } catch (e) {
    return null;
  }
};
var set = async (key, val) => {
  try {
    var file_path = path.join("db",key).toLowerCase();
    fs.writeFile(file_path, JSON.stringify(val));
    return true;
  } catch (e) {
    return null;
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
  if (!/^[a-zA-Z0-9_]{1,64}$/.test(name)) {
    return res.send(JSON.parse({
      ctr: "err",
      err: "Invalid game name.",
    }));
  }

  // Validates teams format
  var teams = req.body.teams; 
  function is_valid_teams(teams) {
    if (typeof teams !== "object") {
      return false;
    }
    if (Object.keys(teams).length !== 2) {
      return false;
    }
    for (var side of ["lft", "rgt"]) {
      if (!(teams[side] instanceof Array)) {
        return false;
      }
      if (teams[side].length > 5) {
        return false;
      }
      for (var i = 0; i < teams[side].length; ++i) {
        if (typeof teams[side][i] !== "string") { 
          return false;
        }
        if (!is_valid_name(terms[side][i])) {
          return false;
        }
      }
    }
  }
  if (!is_valid_teams(teams)) {
    return res.send(JSON.parse({
      ctr: "err",
      err: "Invalid teams.",
    }));
  }

  // Game timestamp
  var init = Date.now();

  // Game id
  var id = (await get("game_count") || 0) + 1;

  // Game actions
  var turns = turns;

  // Game info
  var game = {id,name,teams,init,turns}

  games[id] = game;
  await set("game_"+id, game);

  res.send(JSON.stringify({ctr:"ok"}));
});

// Gets the game count
app.post("/get_game_count", async (req, res) => {
  res.send(JSON.stringify({
    ctr: "ok",
    count: (await get("game_count")) || 0,
  }));
});

// Gets a game
app.post("/get_game", async (req, res) => {
  var game = await get("game_"+req.body.id);
  if (game) {
    res.send(JSON.stringify({
      ctr: "ok",
      game
    }));
  } else {
    res.send(JSON.stringify({
      ctr: "err",
      err: "Game not found"
    }));
  }
});

// Sets up a new Peer connection
app.post("/offer", (req, res) => {
  var name = req.body.name;
  var peer = new Peer({initiator: true, wrtc, tricke: true});
  peers[req.body.name] = peer;
  peer.on("signal", data => {
    if (data.type === "offer") {
      res.send(JSON.stringify(data))
    }
  })
  peer.on("connect", () => {})
  peer.on("data", (data) => {
    var str = "" + data;
    switch (str[0]) {
      // TODO: require signature
      case "+":
        delete peers[name];
        name = str.slice(1);
        peers[name] = peer;
        break;
      default:
        for (var peer_name in peers) {
          peers[peer_name].send(name+": "+str);
        }
        break;
    }
    //}
    //var msg = "["+name+"] "+data;
      //peers[peer_name].send(msg);
    //}
    //console.log(msg);
  });
  peer.on("error", (err) => {});
  peer.on("close", () => { delete peers[name]; });
});

// Finishes setting up a new Peer connection
app.post("/answer", (req, res) => {
  peers[req.body.name].signal(req.body.data);
  res.send('"ok"');
});

app.listen(80);

})();
