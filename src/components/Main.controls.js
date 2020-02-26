const TA = require("./../TaelinArena.js");

module.exports = function Controls(on_input) {
  var self = {};
  self.keyboard = {};
  self.pointer = {x:0,y:0};
  self.mouse = {x:window.innerWidth/2,y:window.innerHeight/2};
  self.cam_pos = {x:0,y:0};
  const key_name = {
    "w"          : "w",
    "a"          : "a",
    "s"          : "s",
    "d"          : "d",
    "z"          : "left",
    "x"          : "middle",
    "c"          : "right",
    "e"          : "extra",
    " "          : "space",
    "q"          : "shift",
    "shift"      : "shift",
    "arrowleft"  : "arrowleft",
    "arrowright" : "arrowright",
    "arrowup"    : "arrowup",
    "arrowdown"  : "arrowdown",
  };
  for (var key in key_name) {
    self.keyboard[key_name[key]] = [0,0];
  }

  //function center_mouse() {
    //self.cam_pos = {x:0, y:0};
    //self.pointer = {x:0, y:0};
  //};

  function make_netcode() {
    var code = TA.make_input_netcode(self.keyboard, self.pointer);
    // Sets 'changed' flag on keys to false
    for (var key in self.keyboard) {
      self.keyboard[key][0] = 0;
    }
    return code;
  };

  // Makes the camera to be used on canvox
  function make_canvox_cam(cam) {
    var W = window.innerWidth;
    var H = window.innerHeight;
    var T = Date.now()/1000;
    var ang = Math.PI * 1/4;
    var cos = Math.cos(ang);
    var sin = Math.sin(ang);
    var front = {x:0, y:cos, z:-sin};
    var right = {x:1, y:0, z:0};
    var down = {x:0, y:-sin, z:-cos};
    // TODO: camera follow
    //if (DEBUG_MODE) {
      //self.cam_pos = TA.get_position_by_pid(0)
        //(self.game_state)(x=>y=>z=>({x,y,z}));
    //}
    var pos_x = self.cam_pos.x;
    var pos_y = self.cam_pos.y - 2048*cos;
    var pos_z = 2048*sin;
    var pos = {x:pos_x, y:pos_y, z:pos_z};
    // Maximum screen size covers 1024x512 in-game pixels
    var swid = 896;
    var shei = 384;
    let fact = W / swid;
    var hmul = Math.cos(Math.PI*0.5-ang);
    var size = {x:swid, y:shei*hmul};
    var port = {x:swid*fact, y:shei*fact*hmul};
    return {
      pos   : pos, // center pos
      ang   : ang, // camera angle
      right : right, // right direction
      down  : down, // down direction
      front : front, // front direction
      size  : size, // world size
      port  : port, // browser size
      res   : 1.0, // rays_per_pixel = res^2
    };
  };

  function set_mouse_pos(client_x, client_y) {
    self.mouse = {x: client_x, y: client_y};
    var c = make_canvox_cam();
    var u = c.size.x / c.port.x;
    var v = c.size.y / c.port.y / Math.cos(c.ang);
    var i = (+self.mouse.x - Math.floor(c.port.x*0.5));
    var j = (-self.mouse.y + Math.floor(c.port.y*0.5));
    var x = self.cam_pos.x + i * u;
    var y = self.cam_pos.y + j * v;
    self.pointer = {x, y};
  };

  function emit_inputs() {
    var netcode = make_netcode();
    if (netcode) {
      on_input(netcode);
    }
  };

  document.body.onkeyup = (e) => {
    var name = key_name[e.key.toLowerCase()];
    if (name) {
      self.keyboard[name] = [1,0];
      emit_inputs();
    }
  };

  document.body.onkeydown = (e) => {
    var name = key_name[e.key.toLowerCase()];
    if (name && !self.keyboard[name][1]) {
      self.keyboard[name] = [1,1];
      emit_inputs();
    }
  };

  document.body.onmousedown = (e) => {
    switch (e.which) {
      case 1: self.keyboard["left"] = [1,1]; break;
      case 2: self.keyboard["middle"] = [1,1]; break;
      case 3: self.keyboard["right"] = [1,1]; break;
    }
    emit_inputs();
  };

  document.body.oncontextmenu = (e) => {
    e.preventDefault();
  };

  window.onmousemove = (e) => {
    var rect = e.target.getBoundingClientRect();
    self.set_mouse_pos(e.clientX - rect.left, e.clientY - rect.top);
  };

  window.onmouseout = (e) => {
    //self.set_mouse_pos({
      //x: window.innerWidth / 2,
      //y: window.innerHeight / 2,
    //});
  };

  window.onmousein = (e) => {
    //self.set_mouse_pos(e.clientX, e.clientY);
    //if (self.mouse_out_timeout) {
      //clearTimeout(self.mouse_out_timeout);
      //self.mouse_out_timeout = null;
    //}
  };

  // Moves camera with mouse
  setInterval(() => {
    var cam_dir = {x:0, y:0};
    if (self.mouse.x <= 16) {
      cam_dir.x = -4;
    } else if (self.mouse.x >= window.innerWidth-16) {
      cam_dir.x = 4;
    } else {
      cam_dir.x = 0;
    }
    if (self.mouse.y <= 16) {
      cam_dir.y = 4;
    } else if (self.mouse.y >= window.innerHeight-16) {
      cam_dir.y = -4;
    } else {
      cam_dir.y = 0;
    }
    //if (self.keyboard.arrowleft[1]) cam_dir.x -= 4;
    //if (self.keyboard.arrowright[1]) cam_dir.x += 4;
    //if (self.keyboard.arrowdown[1]) cam_dir.y -= 4;
    //if (self.keyboard.arrowup[1]) cam_dir.y += 4;
    //self.cam_pos.x += cam_dir.x;
    //self.cam_pos.y += cam_dir.y;
  }, 1000 / 60);

  //self.center_mouse = center_mouse;
  self.make_netcode = make_netcode;
  self.make_canvox_cam = make_canvox_cam;
  self.set_mouse_pos = set_mouse_pos;

  return self;
};
