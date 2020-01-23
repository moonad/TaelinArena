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

var isValidAddress = (addr) => {
  try {
    return ethers.utils.getAddress(addr) === addr;
  } catch (e) {
    return false;
  }
};

// Simple fs database
var get = async (key) => {
  try {
    var file_path = path.join("db", key);
    return JSON.parse(await fs.readFile(file_path, "utf8"));
  } catch (e) {
    return null;
  }
};
var set = async (key, val) => {
  try {
    var file_path = path.join("db",key);
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

  if (!/^[a-zA-Z0-9_]{1,64}$/.test(name)) {
    return res.send(JSON.stringify({
      ctor: "err",
      error: "Invalid name.",
    }));
  }
  
  if (!isValidAddress(addr)) {
    return res.send(JSON.stringify({
      ctor: "err",
      error: "Invalid address.",
    }));
  }

  if ((await get("addr_of."+name)) !== null) {
    return res.send(JSON.stringify({
      ctor: "err",
      error: "Name taken.",
    }));
  }

  console.log("Registered '"+name+"' as '"+addr+"'.");

  await set("name_of." + addr, name);
  await set("addr_of." + name, addr);
  
  res.send(JSON.stringify({ctor: "ok"}));
});

// 
app.post("/name_of", async (req, res) => {
  var name = await get(req.addr);
  if (!name) {
    res.send(JSON.stringify({
      ctor: "err",
      error: "Account not found.",
    }));
  }
  res.send(JSON.stringify({
    ctor: "ok",
    name: name
  }));
});

// Sets up a new Peer connection
app.post("/offer", (req, res) => {
  var name = req.body.name;
  console.log("New connection from: '"+name+"'.");
  //var peer = new Peer({ initiator: true, wrtc })
  //peer.on("signal", data => {
    //if (data.type === "offer") {
      //res.send(JSON.stringify(data))
    //}
  //})
  //peer.on("connect", () => {
    //// wait for "connect" event before using the data channel
  //})
  //peer.on("data", (data) => {
    //var msg = "["+name+"] "+data;
    //for (var peer_name in peers) {
      //peers[peer_name].send(msg);
    //}
    //console.log(msg);
  //});
  //peer.on("error", (err) => {});
  //peer.on("close", () => { delete peers[name]; });
  //peers[req.body.name] = peer;
});

// Finishes setting up a new Peer connection
app.post("/answer", (req, res) => {
  //peers[req.body.name].signal(req.body.data);
  res.send('"ok"');
});

app.listen(80);

})();
