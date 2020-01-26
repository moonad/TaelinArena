const TA = require("./../game/TaelinArena.fm");
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

const models = [
  "simplao/idle1",
  "simplao/idle2",
  "simplao/idle3",
  "simplao/idle4",
  "simplao/atk1",
  "simplao/atk2",
  "simplao/atk3",
  "simplao/atk4",
  "simplao/move1",
  "simplao/move2",
  "simplao/move3",
  "simplao/move4",
  "simplao/poder1",
  "simplao/poder2",
  "simplao/poder3",
  "simplao/poder4",
  "simplao/poder5",
  "simplao/poder6",
  "simplao/poder7",
].map(load);

module.exports = {
  CRONI_IDLE,
  LYN_IDLE,
  FANTASY_IDLE,
  ARCHER_IDLE,
  models,
};
