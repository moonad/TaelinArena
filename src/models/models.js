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
  "min/idle_0",
  "min/idle_1",
  "min/idle_2",
  "min/run_0",
  "min/run_1",
  "min/run_2",
  "min/run_3",
  "min/run_4",
  "min/attackA_0",
  "min/attackA_1",
  "min/attackA_2",
  "min/attackA_3",
  "min/attackA_4",
  "min/attackA_5",
  "zoin/idle_0",
  "zoin/idle_1",
  "zoin/idle_2",
  "zoin/idle_3",
  "zoin/idle_4",
  "zoin/attackA_0",
  "zoin/attackA_1",
  "zoin/attackA_2",
  "zoin/attackA_3",
  "zoin/attackA_4",
  "zoin/attackA_5",
  "zoin/attackA_6",
  "zoin/walk_0",
  "zoin/walk_1",
  "zoin/walk_2",
  "zoin/walk_3",
  "zoin/walk_4",
  "zoin/walk_5",
  "zoin/walk_6",
  "mikegator/walk1",
  "mikegator/walk2",
  "mikegator/walk3",
  "mikegator/walk4",
  "mikegator/walk5",
  "mikegator/walk6",
  "mikegator/walk7",
  "mikegator/walk8",
  "mikegator/spintail1",
  "mikegator/spintail2",
  "mikegator/spintail3",
  "mikegator/spintail4",
  "mikegator/spintail5",
  "mikegator/spintail6",
  "mikegator/spintail7",
  "mikegator/spintail8",
  "kenko/UltK_0",
  "kenko/UltK_1",
  "kenko/UltK_2",
  "kenko/UltK_3",
  "kenko/UltK_4",
  "kenko/UltK_5",
  "kenko/UltK_6",
  "kenko/UltK_7",
  "kenko/UltK_8",
  "kenko/UltK_9",
  "kenko/UltK_10",
  "kenko/UltK_11",
  "kenko/UltK_12",
  "kenko/UltK_13",
  "kenko/UltK_14",
  "kenko/UltK_15",
  "kenko/UltK_16",
  "kenko/UltK_17",
  "kenko/UltK_18",
  "kenko/UltK_19",
  "kenko/UltK_20",
  "kenko/UltK_21",
  "kenko/UltK_22",
  "kenko/UltK_23",
  "kenko/UltK_24",
  "kenko/UltK_25",
].map(load);

module.exports = {
  CRONI_IDLE,
  LYN_IDLE,
  FANTASY_IDLE,
  ARCHER_IDLE,
  models,
};
