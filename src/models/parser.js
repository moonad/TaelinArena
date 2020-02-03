// String -> [{x:Num,y:Num,z:Num},{r:Num,g:Num,b:Num}]
module.exports = (voxel_data) => {
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
