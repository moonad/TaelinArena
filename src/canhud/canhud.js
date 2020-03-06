module.exports = function canhud() {
  var cw = 64;
  var ch = 16;
  var canhud = document.createElement("div");
  canhud.style.position = "absolute";
  var canvas_array = [];
  for (var i = 0; i < 32; ++i) {
    var canvas = document.createElement("canvas");
    canvas.last = {sid: null, dmg: null, mhp: null, nam: null};
    canvas.context = canvas.getContext("2d");
    canvas.width = cw;
    canvas.height = ch;
    //canvas.style.width = cw + "px";
    //canvas.style.height = ch + "px";
    //canvas.context.scale(2,2);
    canvas.style.position = "absolute";
    canvas_array.push(canvas);
    canhud.appendChild(canvas);
    //canvas.style.border = "1px solid black";
  };

  canhud.draw = ({hud, cam}) => {
    canhud.style.width = Math.floor(cam.port.x) + "px";
    canhud.style.height = Math.floor(cam.port.y) + "px";
    var canvas_idx = 0;
    for (var i = 0; i < 32; ++i) {
      var canvas = canvas_array[canvas_idx];
      if (i >= hud.length) {
        canvas.style.visibility = "hidden";
      } else {
        var {pos:{x,y,z},nam,sid,dmg,mhp,hei} = hud[i];
        if (sid !== 0 && nam.length !== 0) {
          canvas_idx++;
          var ym = Math.cos(Math.PI*0.5-cam.ang);
          var sx = cam.port.x/cam.size.x;
          var sy = cam.port.y/cam.size.y;
          var bx = Math.floor((cam.size.x*0.5+x)*sx-cw/2);
          var by = Math.floor((cam.size.y*0.5-y*ym)*sy-(hei+8)*ym*sy-20);
          canvas.style.visibility = null;
          canvas.style.left = bx + "px";
          canvas.style.top = by + "px";
          if (canvas.last.dmg !== dmg || canvas.last.mhp !== mhp) {
            var pad = 12;
            canvas.context.clearRect(0,ch-5,cw,5);
            canvas.context.fillStyle = "#383030";
            canvas.context.fillRect(pad,ch-5,cw-pad*2,5);
            canvas.context.fillStyle = "#30A038";
            var perc = Math.max(0, Math.min(1, 1-dmg/mhp));
            canvas.context.fillRect(pad+1,ch-5+1,Math.floor((cw-pad*2-2)*perc),3);
            canvas.last.dmg = dmg;
            canvas.last.mhp = mhp;
          }
          if (canvas.last.nam !== nam) {
            canvas.context.fillStyle = "#383030";
            canvas.context.clearRect(0,0,cw,ch-5);
            canvas.context.font = "10px Arial";
            canvas.context.textBaseline = "bottom";
            canvas.context.textAlign = "center";
            canvas.context.fillText(nam, cw/2, ch-5);
            canvas.last.nam = nam;
          }
        }
      }
    }

    //if (!canhud.image_data) {
      //canhud.image_data = canhud.context.getImageData(0, 0, canhud.width, canhud.height);
      //canhud.image_buf = new ArrayBuffer(canhud.image_data.data.length);
      //canhud.image_u8 = new Uint8ClampedArray(canhud.image_buf);
      //canhud.image_u32 = new Uint32Array(canhud.image_buf);
      //canhud.depth_buf = new ArrayBuffer(canhud.image_u32.length);
      //canhud.depth_u8 = new Uint8Array(canhud.depth_buf);
      //canhud.clear = {size:0, data:new Uint32Array(256*256*32)};
    //};

    //// Draws shapes on buffer
    //for (var e = 0; e < hud.length; ++e) {
      //var {ctor,x,y,w,h,col} = hud[e];
      //switch (ctor) {
        //case "rect":
          //for (var j = y; j < y+h; ++j) {
            //for (var i = x; i < x+w; ++i) {
              //var n = j*cam.size.x+i;
              //canhud.image_u32[n] = col;
              //canhud.clear.data[canhud.clear.size++] = n;
            //}
          //}
          //break;
      //}
    //};

    //// Draws buffer to screen
    //canhud.image_data.data.set(canhud.image_u8);
    //canhud.context.putImageData(canhud.image_data, 0, 0);

    //// Empties buffer
    //for (var i = 0; i < canhud.clear.size; ++i) {
      //canhud.image_u32[canhud.clear.data[i]] = 0;
    //};
    //canhud.clear.size = 0;
  };

  return canhud;
};
