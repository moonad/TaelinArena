const CRONI_IDLE   = 0;
const LYN_IDLE     = 1;
const FANTASY_IDLE = 2;
const ARCHER_IDLE  = 3;

// String -> [{x:Num,y:Num,z:Num},{r:Num,g:Num,b:Num}]
const parse_voxel_data = (voxel_data) => {
  var total_voxels = voxel_data.length / 12;
  var read_byte = (b) => {
    var chr = voxel_data.slice(b*2, b*2+2);
    var byt = parseInt(chr, 16);
    return byt;
  };
  var voxels = [];
  for (var i = 0; i < total_voxels; ++i) {
    var x = read_byte(i*6+0)-128;
    var y = read_byte(i*6+1)-128;
    var z = read_byte(i*6+2)-128;
    var r = read_byte(i*6+3);
    var g = read_byte(i*6+4);
    var b = read_byte(i*6+5);
    voxels.push([{x,y,z},{r,g,b}]);
  };
  return voxels;
};

// ModelName -> [{x:Num,y:Num,z:Num},{r:Num,g:Num,b:Num}]
const load = (name) => {
  var voxel_data = require("./../models/"+name+".json");
  return parse_voxel_data(voxel_data);
};

const models = {
  [CRONI_IDLE]: [
    load("simplao/idle1"),
    load("simplao/idle2"),
    load("simplao/idle3"),
    load("simplao/idle4"),
  ],
  [LYN_IDLE]: [
    load("simplao/atk1"),
    load("simplao/atk2"),
    load("simplao/atk3"),
    load("simplao/atk4"),
  ],
  [FANTASY_IDLE]: [
    load("simplao/move1"),
    load("simplao/move2"),
    load("simplao/move3"),
    load("simplao/move4"),
    load("simplao/move5"),
    load("simplao/move6"),
  ],
  [ARCHER_IDLE]: [
    load("simplao/poder1"),
    load("simplao/poder2"),
    load("simplao/poder3"),
    load("simplao/poder4"),
    load("simplao/poder5"),
    load("simplao/poder6"),
    load("simplao/poder7"),
  ],
};

module.exports = {
  CRONI_IDLE,
  LYN_IDLE,
  FANTASY_IDLE,
  ARCHER_IDLE,
  models,
};
