const oct = require("./octree.js");

module.exports = function canvox() {
  var canvas = document.createElement("canvas");

  // ...
  //gl = canvas.getContext('webgl2');

  //var vertices = [-1,1,0,-1,-1,0,1,-1,0,-1,1,0,1,1,0,1,-1,0,];
  //var indices = [0,1,2,3,4,5];

  //var vertex_buffer = gl.createBuffer();
  //gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  //gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  //gl.bindBuffer(gl.ARRAY_BUFFER, null);

  //var index_buffer = gl.createBuffer();
  //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
  //gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

  //// Vertex shader source code
  //var vert_code = `#version 300 es
    //in vec3 coordinates;
    //out vec3 scr_pos;
    //void main(void) {
      //scr_pos = coordinates;
      //gl_Position = vec4(coordinates, 1.0);
    //}
  //`;

  //var vertShader = gl.createShader(gl.VERTEX_SHADER);
  //gl.shaderSource(vertShader, vert_code);
  //gl.compileShader(vertShader);

  //var frag_code = `
    //#version 300 es
    //precision highp float;
    //precision lowp sampler3D;

    //in vec3 scr_pos;
    //out vec4 outColor;

    //void main(void) {
      //outColor = vec4(1.0,0.5,0.5,1.0);
    //}
  //`;

  //var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
  //gl.shaderSource(fragShader, frag_code); 
  //gl.compileShader(fragShader);

  //var compiled = gl.getShaderParameter(vertShader, gl.COMPILE_STATUS);
  //console.log('Shader compiled successfully: ' + compiled);
  //var compilationLog = gl.getShaderInfoLog(vertShader);
  //console.log('Shader compiler log: ' + compilationLog);
  //var compiled = gl.getShaderParameter(fragShader, gl.COMPILE_STATUS);
  //console.log('Shader compiled successfully: ' + compiled);
  //var compilationLog = gl.getShaderInfoLog(fragShader);
  //console.log('Shader compiler log: ' + compilationLog);

  //var shader = gl.createProgram();
  //gl.attachShader(shader, vertShader);
  //gl.attachShader(shader, fragShader);
  //gl.linkProgram(shader);
  //gl.useProgram(shader);

  //// ======= Input texture =======

  ////var texture = gl.createTexture();
  ////gl.activeTexture(gl.TEXTURE0);
  ////gl.bindTexture(gl.TEXTURE_3D, texture);
  ////gl.texImage3D(gl.TEXTURE_3D, 0, gl.RGBA, voxel_size[0], voxel_size[1], voxel_size[2], 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  ////gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  ////gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  ////gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  ////gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  ////gl.texParameteri(gl.TEXTURE_3D, gl.TEXTURE_WRAP_R, gl.CLAMP_TO_EDGE);
  ////gl.uniform1i(gl.getUniformLocation(shader, "voxel_data"), texture);
  ////gl.uniform3fv(gl.getUniformLocation(shader, "voxel_size"), voxel_size);

  //// ======= Associating shaders to buffer objects =======

  //// Bind vertex buffer object
  //gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

  //// Get the attribute location
  //var coord = gl.getAttribLocation(shader, "coordinates");
  //gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0); 
  //gl.enableVertexAttribArray(coord);







  var scale = 2;
  canvas.width = window.innerWidth / scale;
  canvas.height = window.innerHeight / scale;
  canvas.style.width = (canvas.width * scale) + "px";
  canvas.style.height = (canvas.height * scale) + "px";

  //canvas.style.border = "1px solid black";
  canvas.style["image-rendering"] = "pixelated";
  //canvas.style.width = "512px";
  //canvas.style.height = "512px";
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
    //console.log(tree.length);

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
          var hx  = hit.pos.x + 0.5;
          var hy  = hit.pos.y + 0.5;
          var hz  = hit.pos.z + 0.5;
          var sx  = Math.floor(W*0.5);
          var sy  = Math.floor(H*0.5 - (hz+512));
          var si  = sy * W + sx;
          var col = voxels[i*2+1];
          var r   = col & 0xFF;
          var g   = (col >>> 8) & 0xFF;
          var b   = (col >>> 16) & 0xFF;
          var r   = (r * 0.8) >>> 0;
          var g   = (g * 0.8) >>> 0;
          var b   = (b * 0.8) >>> 0;
          var col = r | (g << 8) | (b << 16) | 0xFF000000;
          voxels[i*2+1] = col;
          canvas.image_u32[si] = 0xFFE8E8E8;
          clear.push(si);
          break;
      }
    }

    // Casts some light
    //for (var y = -8; y < 8; y += 1) {
      //for (var z = -512+8; z < -512+24; z += 1) {
        //var hit = oct.march(100,y,z,-1,0,0,tree);
        //switch (hit.ctr) {
          //case oct.HIT:
            //voxels[hit.val*2+1] = 0xFF0000FF;
            //break;
          //case oct.MIS:
            //break;
          //case oct.PAS:
            //break;
        //}
      //}
    //}


    // Draws all voxels to buffers
    for (var i = 0; i < voxels.length / 2; ++i) {
      for (var X = -0; X <= 0; ++X) {
        for (var Y = -0; Y <= 0; ++Y) {
          if (Math.abs(X + Y) <= 1) {
            var pos = voxels[i*2+0];
            var col = voxels[i*2+1];
            var vx  = ((pos >>> 20) & 0x3FF) + X - 512;
            var vy  = ((pos >>> 10) & 0x3FF) + Y - 512;
            var vz  = ((pos >>>  0) & 0x3FF) - 512;
            var sx  = Math.floor(vx + W*0.5);
            var sy  = Math.floor(vy + H*0.5 - (vz+512));
            var sz  = vz;
            var si  = sy * W + sx;
            var sd  = canvas.depth_u32[si] - 512;
            if (sz > sd) {
              canvas.image_u32[si] = col;
              canvas.depth_u32[si] = sz + 512;
              clear.push(si);
            }
          }
        }
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
