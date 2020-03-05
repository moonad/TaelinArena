function canvox() {
  var canvas = document.createElement("canvas");
  canvas.style["image-rendering"] = "pixelated";
  canvas.render_mode = "CPU";

  var context = canvas.getContext("2d");
  canvas.draw = ({voxels, stage, cam}) => {
    var voxels_data = voxels.data;
    var voxels_size = voxels.size;

    // Canvas setup
    canvas.width = cam.size.x * cam.res;
    canvas.height = cam.size.y * cam.res;
    canvas.style.width = Math.floor(cam.port.x) + "px";
    canvas.style.height = Math.floor(cam.port.y) + "px";
    if (!canvas.image_data) {
      canvas.image_data = context.getImageData(0, 0, canvas.width, canvas.height);
      canvas.image_buf = new ArrayBuffer(canvas.image_data.data.length);
      canvas.image_u8 = new Uint8ClampedArray(canvas.image_buf);
      canvas.image_u32 = new Uint32Array(canvas.image_buf);
      canvas.depth_buf = new ArrayBuffer(canvas.image_u32.length);
      canvas.depth_u8 = new Uint8Array(canvas.depth_buf);
      canvas.clear = {size:0, data:new Uint32Array(256*256*32)};
    }
    var cos = Math.cos(cam.ang);

    // Draws shadows
    for (var v = 0; v < voxels_size / 2; ++v) {
      var pos = voxels_data[v*2+0];
      var vx  = ((pos >>> 20) & 0x3FF) - 512;
      var vy  = ((pos >>> 10) & 0x3FF) - 512;
      var vz  = 0;
      var col = 0xFFD8D8D8;
      var i   = Math.floor(cam.size.x*0.5 + vx);
      var j   = Math.floor(cam.size.y*0.5 - vy*cos - vz*cos);
      var k   = 0;
      var idx = j * Math.floor(cam.size.x*cam.res) + i;
      var dpt = canvas.depth_u8[idx];
      if (k >= dpt) {
        canvas.image_u32[idx] = col;
        canvas.depth_u8[idx] = k;
        canvas.clear.data[canvas.clear.size++] = idx;
      }
    }

    // Draws models
    for (var v = 0; v < voxels_size / 2; ++v) {
      var pos = voxels_data[v*2+0];
      var col = voxels_data[v*2+1];
      var vx  = ((pos >>> 20) & 0x3FF) - 512;
      var vy  = ((pos >>> 10) & 0x3FF) - 512;
      var vz  = ((pos >>>  0) & 0x3FF) - 512;
      var vr  = (col >>> 24) & 0xFF;
      var vg  = (col >>> 16) & 0xFF;
      var vb  = (col >>>  8) & 0xFF;
      var col = vr | (vg<<8) | (vb<<16) | (0xFF<<24);
      var i   = Math.floor(cam.size.x*0.5 + vx);
      var j   = Math.floor(cam.size.y*0.5 - vy*cos - vz*cos);
      var k   = Math.min(Math.max(Math.floor(vz), 0), 256);
      var idx = j * Math.floor(cam.size.x*cam.res) + i;
      var dpt = canvas.depth_u8[idx];
      if (k >= dpt) {
        canvas.image_u32[idx] = col;
        canvas.depth_u8[idx] = k;
        canvas.clear.data[canvas.clear.size++] = idx;
      }
    }

    // Draws buffers to screen
    canvas.image_data.data.set(canvas.image_u8);
    context.putImageData(canvas.image_data, 0, 0);

    // Clears pixels
    for (var i = 0; i < canvas.clear.size; ++i) {
      var idx = canvas.clear.data[i];
      canvas.image_u32[idx] = 0;
      canvas.depth_u8[idx] = 0;
    }
    canvas.clear.size = 0;
  };
  return canvas;
};

module.exports = canvox;
