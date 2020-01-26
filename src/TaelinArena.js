const TA = require("./game/TaelinArena.fm");
const {models} = require("./models/models.js");

const now = (() => {
  var init_time = Date.now()/1000;
  return () => Date.now()/1000 - init_time;
})();

function render_game(game, canvox) {
  // Gets the current time
  var T = now();

  // Gets the main hero position
  var hero_pos = TA.get_position_by_id(0, game);

  // Creates list of voxels
  var voxels = [];

  // Renders each game object
  TA.map_game_objects(function(object) {
    // Gets the object fields
    var id = TA.get_object_id(object);
    var hp = TA.get_object_hp(object);
    var pos = TA.get_object_pos(object);
    var dir = TA.get_object_dir(object);
    var vel = TA.get_object_vel(object);
    var box = TA.get_object_box(object);
    var ani = TA.get_object_ani(object);
    var [dir_x,dir_y,dir_z] = dir(x=>y=>z=>([x,y,z]));
    var [pos_x,pos_y,pos_z] = pos(x=>y=>z=>([x,y,z]));

    // Computes the object facing angle
    var ang = Math.atan2(dir_y, dir_x);
    var ang = ang + Math.PI*0.5;

    // Renders hitbox (for debugging)
    let case_circbox = (rad) => {
      for (var j = -rad; j <= rad; ++j) {
        for (var i = -rad; i <= rad; ++i) {
          if (i*i+j*j < rad*rad) {
            var px = pos_x + i;
            var py = pos_y + j;
            var pz = 0;
            var pos
              = (px+512)<<20
              | (py+512)<<10
              | (pz+512);
            var col = 0xE0E0FFFF;
            voxels[voxels.length] = pos;
            voxels[voxels.length] = col;
          }
        }
      }
    };
    let case_polybox = (pts) => {
    };
    box(case_circbox)(case_polybox);

    // Renders each voxel of the model
    var model_id = TA.get_object_model_id(object);
    var model = models[model_id];
    for (var i = 0; i < model.length; ++i) {
      var [pos,col] = model[i];
      var {x,y,z} = pos;
      var {r,g,b} = col;
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
      var pos = (px+512)<<20|(py+512)<<10|(pz+512);
      var col = (r<<24)|(g<<16)|(b<<8)|0xFF;
      voxels[voxels.length] = pos;
      voxels[voxels.length] = col;
    }
  })(game);

  canvox.draw({voxels});
};

// Turns ::=
//   | 0: End
//   | 1: Next(Turn, Turns)
// Turn ::=
//   | 0: End
//   | 1: Player0(Action, Turn)
//   | 2: Player1(Action, Turn)
//   | ... up to 15 ...
// Action ::=
//   | 0: dpad(x: 4bit, y: 4bit) 
//   | 1: mlft(x: 12bit, y: 12bit)
//   | 2: mmid(x: 12bit, y:12bit)
//   | 3: mrgt(x: 12bit, y:12bit)
//   | 4: key0
//   | 5: key1
//   | 6: key2
//   | 7: key3

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
          var player = parseInt(code[idx],16) - 1;
          var action = parseInt(code[idx+1],16);
          if (action === 0) {
            var dir_x = (parseInt(code[idx+2],16)/14)*2-1;
            var dir_y = (parseInt(code[idx+3],16)/14)*2-1;
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

module.exports = {
  ...TA,
  render_game,
  parse_turns,
};
