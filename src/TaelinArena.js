const TA = require("./game/TaelinArena.fm");
const oct = require("./canvox/octree.js");
const {models} = require("./models/models.js");

const now = (() => {
  var init_time = Date.now()/1000;
  return () => Date.now()/1000 - init_time;
})();

var stage = oct.empty();
for (var y = -512; y < 512; ++y) {
  for (var x = -512; x < 512; ++x) {
    if (((x+2048) / 32) % 2 < 1) { // || ((y+2048) / 32) % 2 < 1) {
      oct.insert(x,y,0,0xFF85c9a0,stage);
    } else {
      oct.insert(x,y,0,0xFF8fd9ad,stage);
    }
  }
}

// Renders the game state to screen using the canvox library
function render_game({game, canvox, cam}) {
  // Gets the current time
  var T = now();

  // Gets the main hero position
  var hero_pos = TA.get_position_by_pid(0, game);

  // Creates list of voxels
  var voxels = [];

  // Renders each game thing
  TA.map_stage((thing) => {
    TA.draw_thing(thing)(model_id => pos => dir => {
      var [dir_x,dir_y,dir_z] = dir(x=>y=>z=>([x,y,z]));
      var [pos_x,pos_y,pos_z] = pos(x=>y=>z=>([x,y,z]));
      var ang = Math.atan2(dir_y, dir_x);
      var ang = ang + Math.PI*0.5;
      var model = models[model_id];
      for (var i = 0; i < model.length; ++i) {
        var [{x,y,z},{r,g,b}] = model[i];
        var cx = pos_x;
        var cy = pos_y;
        var cz = pos_z;
        var px = cx + x;
        var py = cy + y;
        var pl = Math.sqrt((px-cx)**2+(py-cy)**2);
        var pa = Math.atan2(py-cy,px-cx);
        var px = cx + pl * Math.cos(pa + ang) + 0.5;
        var py = cy + pl * Math.sin(pa + ang) + 0.5;
        var pz = cz + z;
        var xyz = (px+512)<<20|(py+512)<<10|(pz+512);
        var rgb = (r<<24)|(g<<16)|(b<<8)|0xFF;
        voxels[voxels.length] = xyz;
        voxels[voxels.length] = rgb;
      }
    });
  })(game);

  canvox.draw({voxels, stage, cam});
};

// Turns ::=
//   | 0: End
//   | 1: Next(Turn, Turns)
// Turn ::=
//   | 0: End
//   | 1: Player0(Input, Turn)
//   | 2: Player1(Input, Turn)
//   | ... up to 15 ...
// Input ::=
//   | 0: stick(x: 4bit, y: 4bit) 
//   | 1: left(x: 12bit, y: 12bit)
//   | 2: middle(x: 12bit, y:12bit)
//   | 3: right(x: 12bit, y:12bit)
//   | 4: space(x: 12bit, y:12bit)
//   | 5: shift(x: 12bit, y:12bit)
//   | 6: extra(x: 12bit, y:12bit)
//   | 7: cmsg(...TODO...)

// Parses a player input code into an object
function parse_command(code, idx=0) {
  var player = parseInt(code[idx],16) - 1;
  var input = parseInt(code[idx+1],16);
  if (input === 0) {
    var dir_x = (parseInt(code[idx+2],16)/14)*2-1;
    var dir_y = (parseInt(code[idx+3],16)/14)*2-1;
    return [idx+4, {
      player,
      input: "SDIR",
      params: {dir: {x: dir_x, y: dir_y}}
    }];
  } else if (input >= 1 && input <= 6) {
    var pos_x_a = parseInt(code[idx+2],16);
    var pos_x_b = parseInt(code[idx+3],16);
    var pos_x_c = parseInt(code[idx+4],16);
    var pos_y_a = parseInt(code[idx+5],16);
    var pos_y_b = parseInt(code[idx+6],16);
    var pos_y_c = parseInt(code[idx+7],16);
    var pos_x = ((pos_x_a<<8)|(pos_x_b<<4)|pos_x_c)-2048;
    var pos_y = ((pos_y_a<<8)|(pos_y_b<<4)|pos_y_c)-2048;
    return [idx+8, {
      player,
      input: "KEY"+"012345"[input-1],
      params: {pos: {x: pos_x, y: pos_y}}
    }];
  } else {
    return [idx+2, {
      player,
      input: "TEXT",
      string: ""
    }];
  };
}

// Parses a player turn code into an array of player inputs
function parse_turn(code, idx=0) {
  var turn = [];
  while (idx < code.length) {
    if (code[idx] === "0") {
      idx += 1;
      break;
    } else {
      var [idx,plr_inp] = parse_command(code,idx);
      turn.push(plr_inp);
    }
  };
  return [idx, turn];
};

// Parses a list of player turns
function parse_turns(code, idx=0) {
  var turns = [];
  while (idx < code.length) {
    if (code[idx] === "0") {
      break;
    } else {
      idx += 1;
      var [idx, turn] = parse_turn(code, idx);
      turns.push(turn);
    }
  };
  return [idx, turns];
};

// Makes a player input code from keyboard/mouse states
function make_input_code(keyboard, mouse) {
  function changed(name) {
    return keyboard[name] ? keyboard[name][0] : 0;
  };
  function state(name) {
    return keyboard[name] ? keyboard[name][1] : 0;
  };
  function pressed(name) {
    return changed(name) && state(name) ? 1 : 0;
  };

  // WASD events take precedence
  let keyW = changed("w");
  let keyA = changed("a");
  let keyS = changed("s");
  let keyD = changed("d");
  if (keyW || keyA || keyS || keyD) {
    var pad_x = state("d") - state("a");
    var pad_y = state("w") - state("s");
    var pad = {x: pad_x, y: pad_y};
    var pl = Math.sqrt(pad.x**2 + pad.y**2) || 1;
    var px = pad.x / pl;
    var py = pad.y / pl;
    var px = Math.floor((px+1)/2*14).toString(16);
    var py = Math.floor((py+1)/2*14).toString(16);
    return "0" + px + py;
  }

  // Otherwise, check for input keys
  var key0 = pressed("left");
  var key1 = pressed("middle");
  var key2 = pressed("right");
  var key3 = pressed("space");
  var key4 = pressed("shift");
  var key5 = pressed("extra");
  if (key0 || key1 || key2 || key3 || key4 || key5) {
    var mx = mouse.x;
    var my = mouse.y;
    var mx = Math.max(Math.min(mx+2048, 4096), 0);
    var my = Math.max(Math.min(my+2048, 4096), 0);
    var mx = ("000"+Math.floor(mx).toString(16)).slice(-3);
    var my = ("000"+Math.floor(my).toString(16)).slice(-3);
    var ct = key0 ? "1"
           : key1 ? "2"
           : key2 ? "3"
           : key3 ? "4"
           : key4 ? "5"
           : key5 ? "6"
           : null;
    return ct + mx + my;
  }

  return null;
}

// Executes a command inside Formality
function exec_command(inp, game) {
  let cmd = null;
  if (inp.input === "SDIR") {
    let x = inp.params.dir.x;
    let y = inp.params.dir.y;
    let d = v3 => v3(x)(y)(0);
    cmd = TA.command(inp.player)(TA.sdir(d));
  } else if (inp.input === "TEXT") {
    throw "TODO";
  } else {
    var x = inp.params.pos.x;
    var y = inp.params.pos.y;
    let p = v3 => v3(x)(y)(0);
    var f = null;
    switch (inp.input) {
      case "KEY0": keyx = TA.key0; break;
      case "KEY1": keyx = TA.key1; break;
      case "KEY2": keyx = TA.key2; break;
      case "KEY3": keyx = TA.key3; break;
      case "KEY4": keyx = TA.key4; break;
      case "KEY5": keyx = TA.key5; break;
    }
    cmd = TA.command(inp.player)(keyx(p));
  }
  return TA.exec_command(cmd)(game);
}

module.exports = {
  ...TA,
  render_game,
  parse_turn,
  parse_turns,
  parse_command,
  exec_command,
  make_input_code,
};

// Renders hitbox (for debugging)
//let case_circbox = (rad) => {
//for (var j = -rad; j <= rad; ++j) {
  //for (var i = -rad; i <= rad; ++i) {
    //if (i*i+j*j < rad*rad) {
      //var px = pos_x + i;
      //var py = pos_y + j;
      //var pz = 0;
      //var pos
        //= (px+512)<<20
        //| (py+512)<<10
        //| (pz+512);
      //var col = 0xE0E0FFFF;
      //voxels[voxels.length] = pos;
      //voxels[voxels.length] = col;
    //}
  //}
//}
//};
//let case_polybox = (pts) => {
//};
//box(case_circbox)(case_polybox);

