module.exports = function canhud() {
  var canhud = document.createElement("canvas");
  canhud.context = canhud.getContext("2d");
  canhud.style["image-rendering"] = "pixelated";

  canhud.draw = ({hud, cam}) => {
    // Adjusts canvas size
    canhud.width = cam.size.x * cam.res;
    canhud.height = cam.size.y * cam.res;
    canhud.style.width = Math.floor(cam.port.x) + "px";
    canhud.style.height = Math.floor(cam.port.y) + "px";
    canhud.style.position = "absolute";
    if (!canhud.image_data) {
      canhud.image_data = canhud.context.getImageData(0, 0, canhud.width, canhud.height);
      canhud.image_buf = new ArrayBuffer(canhud.image_data.data.length);
      canhud.image_u8 = new Uint8ClampedArray(canhud.image_buf);
      canhud.image_u32 = new Uint32Array(canhud.image_buf);
      canhud.depth_buf = new ArrayBuffer(canhud.image_u32.length);
      canhud.depth_u8 = new Uint8Array(canhud.depth_buf);
      canhud.clear = {size:0, data:new Uint32Array(256*256*32)};
    };

    // Draws shapes on buffer
    for (var e = 0; e < hud.length; ++e) {
      var {ctor,x,y,w,h,col} = hud[e];
      switch (ctor) {
        case "rect":
          for (var j = y; j < y+h; ++j) {
            for (var i = x; i < x+w; ++i) {
              var n = j*cam.size.x+i;
              canhud.image_u32[n] = col;
              canhud.clear.data[canhud.clear.size++] = n;
            }
          }
          break;
      }
    };

    // Draws buffer to screen
    canhud.image_data.data.set(canhud.image_u8);
    canhud.context.putImageData(canhud.image_data, 0, 0);

    // Empties buffer
    for (var i = 0; i < canhud.clear.size; ++i) {
      canhud.image_u32[canhud.clear.data[i]] = 0;
    };
    canhud.clear.size = 0;
  };

  return canhud;
};
