const oct = require("./octree.js");

module.exports = function canvox() {
  var canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  canvas.style.border = "1px solid black";
  canvas.style["image-rendering"] = "pixelated";
  var context = canvas.getContext("2d");
  canvas.image_data =
    context.getImageData(0, 0, canvas.width, canvas.height);
  canvas.image_buf =
    new ArrayBuffer(canvas.image_data.data.length);
  canvas.image_u8 =
    new Uint8ClampedArray(canvas.image_buf);
  canvas.image_u32 =
    new Uint32Array(canvas.image_buf);
  canvas.depth_u32 =
    new Uint32Array(canvas.image_u32.length);
  canvas.draw = (voxels) => {
    var W  = canvas.width;
    var H  = canvas.height;
    var S3 = Math.sqrt(3);
    var Q3 = 1/S3;

    // Puts all voxels on voxtree
    var tree = oct.empty();
    for (var i = 0; i < voxels.length / 2; ++i) {
      var pos = voxels[i*2+0];
      var col = voxels[i*2+1];
      var vx  = ((pos >>> 20) & 0x3FF) - 512;
      var vy  = ((pos >>> 10) & 0x3FF) - 512;
      var vz  = ((pos >>>  0) & 0x3FF) - 512;
      oct.insert(vx,vy,vz,i,tree);
    }

    // Casts shadows
    var clear = [];
    for (var i = 0; i < voxels.length / 2; ++i) {
      var pos = voxels[i*2+0];
      var col = voxels[i*2+1];
      var vx  = ((pos >>> 20) & 0x3FF) - 512;
      var vy  = ((pos >>> 10) & 0x3FF) - 512;
      var vz  = ((pos >>>  0) & 0x3FF) - 512;
      var dx  = -Q3;
      var dy  = Q3;
      var dz  = -Q3;
      var rx  = vx + 0.5 + dx;
      var ry  = vy + 0.5 + dy;
      var rz  = vz + 0.5 + dz;
      var hit = oct.march(rx,ry,rz,dx,dy,dz,tree);
      switch (hit.ctr) {
        case oct.PAS:
          var hx  = hit.pos.x;
          var hy  = hit.pos.y;
          var hz  = hit.pos.z;
          var sx  = Math.floor(hx + W*0.5 - (hz+512)/S3);
          var sy  = Math.floor(hy + H*0.5 - (hz+512)/S3);
          var si  = sy * W + sx;
          voxels[i*2+1] = 0xFF8888FF;
          canvas.image_u32[si] = 0xFFE8E8E8;
          clear.push(si);
          break;
      }
    }

    // Casts some light
    for (var y = -8; y < 8; y += 1) {
      for (var z = -512+8; z < -512+24; z += 1) {
        var hit = oct.march(100,y,z,-1,0,0,tree);
        switch (hit.ctr) {
          case oct.HIT:
            voxels[hit.val*2+1] = 0xFF0000FF;
            break;
          case oct.MIS:
            break;
          case oct.PAS:
            break;
        }
      }
    }


    // Draws all voxels to buffers
    for (var i = 0; i < voxels.length / 2; ++i) {
      var pos = voxels[i*2+0];
      var col = voxels[i*2+1];
      var vx  = ((pos >>> 20) & 0x3FF) - 512;
      var vy  = ((pos >>> 10) & 0x3FF) - 512;
      var vz  = ((pos >>>  0) & 0x3FF) - 512;
      var sx  = Math.floor(vx + W*0.5 - (vz+512)/S3);
      var sy  = Math.floor(vy + H*0.5 - (vz+512)/S3);
      var sz  = vz;
      var si  = sy * W + sx;
      var sd  = canvas.depth_u32[si] - 512;
      if (sz > sd) {
        canvas.image_u32[si] = col;
        canvas.depth_u32[si] = sz + 512;
        clear.push(si);
      }
    }

    // Draws buffers to screen
    canvas.image_data.data.set(canvas.image_u8);
    context.putImageData(canvas.image_data, 0, 0);

    // Clears buffers
    for (var i = 0; i < clear.length; ++i) {
      canvas.image_u32[clear[i]] = 0;
      canvas.depth_u32[clear[i]] = 0;
    }
  };
  
  return canvas;
};
