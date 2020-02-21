// Converts a MagicaVoxel .vox to a TaelinArena .json

var vox = require("vox.js");
var parser = new vox.Parser();
var fs = require("fs");

// Used to flag non-empty positions on vox_to_json
var voxbox = new Uint8Array(256*256*256);

// Uint8Array -> Pos -> Promise(JSON)
async function vox_to_json(vox, pivot) {
  //var vox = fs.readFileSync(vox_file);
  var u8 = new Uint8Array(vox);
  var byt = b => ("00"+b.toString(16)).slice(-2);
  var data = await new Promise((resolve, reject) => {
    parser.parseUint8Array(u8, (err, data) => {
      resolve(data);
    });
  });

  // Builds array with pos, idx and val of each voxel
  var voxels = [];
  for (var i = 0; i < data.voxels.length; ++i) {
    var vpos = data.voxels[i];
    var k = data.palette[vpos.colorIndex];
    var r = k.r;
    var g = k.g;
    var b = k.b;
    if (!pivot) {
      var x = Math.floor(vpos.x-data.size.x*0.5)+128;
      var y = Math.floor(vpos.y-data.size.y*0.5)+128;
      var z = Math.floor(vpos.z)+128;
    } else {
      var x = Math.floor(vpos.x-pivot.x)+128;
      var y = Math.floor(vpos.y-pivot.y)+128;
      var z = Math.floor(vpos.z-pivot.z)+128;
    }
    var pos = {x,y,z};
    var idx = x | (y<<8) | (z<<16);
    var val = byt(x)+byt(y)+byt(z)+byt(r)+byt(g)+byt(b);
    voxels.push([pos,idx,val]);
    voxbox[idx] = 1;
  };

  // Flags each voxel that is internal for removal
  var is_internal = {};
  var removed = 0;
  finder: for (var i = 0; i < voxels.length; ++i) {
    var [pos,idx,val] = voxels[i];
    var x0 = Math.max(pos.x - 1, 0);
    var x1 = Math.min(pos.x + 1, 255);
    var y0 = Math.max(pos.y - 1, 0);
    var y1 = Math.min(pos.y + 1, 255);
    var z0 = Math.max(pos.z - 1, 0);
    var z1 = Math.min(pos.z + 1, 255);
    for (var z = z0; z <= z1; ++z) {
      for (var y = y0; y <= y1; ++y) {
        for (var x = x0; x <= x1; ++x) {
          var idx2 = x | (y<<8) | (z<<16);
          if (voxbox[idx2] === 0) {
            continue finder;
          }
        }
      }
    }
    is_internal[idx] = true;
    ++removed;
  };

  // Builds string with voxel data
  var str = "";
  for (var i = 0; i < voxels.length; ++i) {
    var [pos,idx,val] = voxels[i];
    if (!is_internal[idx]) {
      str += val;
    }
    voxbox[idx] = 0;
  }

  return {json: str, removed, length: voxels.length};
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
