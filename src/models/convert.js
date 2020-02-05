// Converts a MagicaVoxel .vox to a TaelinArena .json

var vox = require("vox.js");
var parser = new vox.Parser();
var fs = require("fs");

// Uint8Array -> Pos -> Promise(JSON)
function vox_to_json(vox, pivot={x:0,y:0,z:0}) {
  //var vox = fs.readFileSync(vox_file);
  var u8 = new Uint8Array(vox);
  var byt = b => ("00"+b.toString(16)).slice(-2);
  return new Promise((resolve,reject) => {
    parser.parseUint8Array(u8, (err,data) => {
      var voxels = "";
      for (var i = 0; i < data.voxels.length; ++i) {
        var vpos = data.voxels[i];
        var k = data.palette[vpos.colorIndex];
        var p = pivot;
        var x = Math.floor(vpos.x-data.size.x*0.5)+128-p.x;
        var y = Math.floor(vpos.y-data.size.y*0.5)+128-p.y;
        var z = Math.floor(vpos.z)+128-p.z;
        var r = k.r;
        var g = k.g;
        var b = k.b;
        voxels += byt(x);
        voxels += byt(y);
        voxels += byt(z);
        voxels += byt(r);
        voxels += byt(g);
        voxels += byt(b);
      };
      resolve(voxels);
      //fs.writeFileSync(json_file,
        //JSON.stringify(voxels,null,2));
    });
  });
};

// TODO: deprecated, update to new format
// Receives a SpriteStack model, returns an array of voxels
// in the format [[{x:x0,y:y0,z:z0},col], ...].
function ss_to_json(model) {
  throw "This function requires update.";

  var voxels = [];

  var col = (model.palette[1]) | 0xFF;
  var r = Math.floor(col / 65536);
  var g = Math.floor(col / 256) % 256;
  var b = col % 256;

  //var K = Infinity;
  // A model has many parts
  for (var m = 0; m < model.parts.length; ++m) {

    // Each part has a data array storing 64x64x64 color ids
    var data = model.parts[m].data;
    var size = model.size;
    for (var i = 0, d = 0; d < data.length; ++d) {
      var val = data[d];

      // When an element of the array is negative, it isn't
      // a color id (cid), but a number of times to repeat
      // the next color id; this is a micro-compression
      if (val < 0) {
        var len = Math.abs(val);
        var cid = data[++d];
      } else {
        var len = 1;
        var cid = val;
      }

      // If the color id isn't zero, then the actual color
      // is stored on `model.pallete[col - 1]`, so we
      // get it, together with its position, and add
      if (cid !== 0) {
        for (var k = 0; k < len; ++k) {
          var n = i + k;
          var x = n % size[0] - size[0]/2;
          var y = ((n/size[0])>>>0) % size[0] - size[1]/2;
          var z = ((n/(size[0]*size[1]))>>>0) - size[2]/2;
          var pos = {x,y,z};
          var col = (model.palette[cid-1]<<8) | 0xFF;
          //K = Math.min(z,K);
          //var r = Math.floor(col / 65536);
          //var g = Math.floor(col / 256) % 256;
          //var b = col % 256;
          //var col = {r,g,b};
          //var col = 0xFF000000;
          //var col = col + r;
          //var col = col + (g << 8);
          //var col = col + (b << 16);
          voxels.push([pos,col]);
          //console.log(x,y,z);
        }
      }

      i += len;
    }
  }
  //console.log("->",K);

  return voxels;
};


module.exports = {
  vox_to_json,
  ss_to_json,
};
