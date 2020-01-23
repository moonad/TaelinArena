var express = require("express");
var app = express();
var Peer = require("simple-peer");
var wrtc = require("wrtc");
var cors = require("cors");

var peers = {};
app.use(cors());
app.use(express.json());
app.use(express.static("docs"));
app.post("/offer", (req, res) => {
  var name = req.body.name;
  console.log("New connection from: '"+name+"'.");
  var peer = new Peer({ initiator: true, wrtc })
  peer.on("signal", data => {
    if (data.type === "offer") {
      res.send(JSON.stringify(data))
    }
  })
  peer.on("connect", () => {
    // wait for "connect" event before using the data channel
  })
  peer.on("data", (data) => {
    var msg = "["+name+"] "+data;
    for (var peer_name in peers) {
      peers[peer_name].send(msg);
    }
    console.log(msg);
  });
  peer.on("error", (err) => {});
  peer.on("close", () => { delete peers[name]; });
  peers[req.body.name] = peer;
});
app.post("/answer", (req, res) => {
  peers[req.body.name].signal(req.body.data);
  res.send('"ok"');
});
app.listen(80);
