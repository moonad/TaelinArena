const oct = require("./octree.js");

function build_voxel_octree(voxels) {
  var tree = oct.empty();
  for (var i = 0; i < voxels.length / 2; ++i) {
    var pos = voxels[i*2+0];
    var col = voxels[i*2+1];
    var vx  = ((pos >>> 20) & 0x3FF) - 512;
    var vy  = ((pos >>> 10) & 0x3FF) - 512;
    var vz  = ((pos >>>  0) & 0x3FF) - 512;
    var vr  = (col >>> 24) & 0xFF;
    var vg  = (col >>> 16) & 0xFF;
    var vb  = (col >>>  8) & 0xFF;
    var c   = vr | (vg<<8) | (vb<<16);
    oct.insert(vx,vy,vz,c,tree);
  }
  return tree;
};

module.exports = function canvox() {
  const MODE = "CPU";

  var cam = {
    pos   : {x:0, y:-1000, z:0},
    right : {x:0.5, y:0, z:0},
    down  : {x:0, y:0, z:0.5},
    front : {x:0, y:1, z:0},
  };

  var scr = {
    siz: {x:256, y:256},
    dim: {x:512, y:512},
  };

  var canvas = document.createElement("canvas");
  canvas.width = scr.siz.x;
  canvas.height = scr.siz.y;
  canvas.style.border = "0px solid gray";
  canvas.style["image-rendering"] = "pixelated";
  canvas.style.width = scr.dim.x + "px";
  canvas.style.height = scr.dim.y + "px";

  // CPU MODE
  if (MODE === "CPU") {
    var context = canvas.getContext("2d");
    canvas.image_data = context.getImageData(0, 0, scr.siz.x, scr.siz.y);
    canvas.image_buf = new ArrayBuffer(canvas.image_data.data.length);
    canvas.image_u8 = new Uint8ClampedArray(canvas.image_buf);
    canvas.image_u32 = new Uint32Array(canvas.image_buf);
    canvas.draw = (voxels) => {
      // Builds voxel octree
      var tree = build_voxel_octree(voxels);

      // For each pixel on the screen
      var dx = 2 / scr.siz.x;
      var dy = 2 / scr.siz.y;
      for (var scr_pos_y = -1; scr_pos_y <= 1; scr_pos_y += dy) {
        for (var scr_pos_x = -1; scr_pos_x < 1; scr_pos_x += dx) {

          // Computes ray position
          var ray_pos_x = cam.pos.x;
          var ray_pos_y = cam.pos.y;
          var ray_pos_z = cam.pos.z;
          ray_pos_x += cam.right.x * scr.siz.x * scr_pos_x;
          ray_pos_y += cam.right.y * scr.siz.x * scr_pos_x;
          ray_pos_z += cam.right.z * scr.siz.x * scr_pos_x;
          ray_pos_x += cam.down.x  * scr.siz.y * scr_pos_y;
          ray_pos_y += cam.down.y  * scr.siz.y * scr_pos_y;
          ray_pos_z += cam.down.z  * scr.siz.y * scr_pos_y;

          // Computes ray direction
          var ray_dir_x = cam.front.x;
          var ray_dir_y = cam.front.y;
          var ray_dir_z = cam.front.z;

          // Performs the march
          var hit = oct.march(
            ray_pos_x, ray_pos_y, ray_pos_z,
            ray_dir_x, ray_dir_y, ray_dir_z,
            tree);

          // Renders to screen
          var j = Math.floor((1-(scr_pos_y+1)/2)*scr.siz.y-1);
          var i = Math.floor((scr_pos_x+1)/2*scr.siz.x);
          var n = j * scr.siz.x + i;
          switch (hit.ctr) {
            case oct.HIT:
              var pos = hit.pos;
              var col = hit.val & oct.VAL;
              canvas.image_u32[n] = col | 0xFF000000;
              break;
            default:
              canvas.image_u32[n] = 0;
              break;
          }
        }
      }

      // Draws buffers to screen
      canvas.image_data.data.set(canvas.image_u8);
      context.putImageData(canvas.image_data, 0, 0);
    };
    return canvas;
  };

  // GPU MODE
  if (MODE === "GPU") {
    var gl = canvas.getContext('webgl2');

    var vertices = [-1,1,0,-1,-1,0,1,-1,0,-1,1,0,1,1,0,1,-1,0,];
    var indices = [0,1,2,3,4,5];

    var vertex_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var index_buffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    // Vertex shader source code
    var vert_code = `#version 300 es
      in vec3 coordinates;
      out vec3 scr_pos;
      void main(void) {
        scr_pos = coordinates;
        gl_Position = vec4(coordinates, 1.0);
      }
    `;

    var vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vert_code);
    gl.compileShader(vertShader);

    var frag_code = `#version 300 es
      precision mediump float;
      precision mediump sampler2D;

      in vec3 scr_pos;
      out vec4 outColor;

      uniform vec3 cam_pos;
      uniform vec3 cam_right;
      uniform vec3 cam_down;
      uniform vec3 cam_front;
      uniform vec2 scr_siz;

      uniform sampler2D octree;

      const float inf = 65536.0;
      const float eps = 0.0009765625;

      const uint CTR = 0xC0000000u;
      const uint VAL = 0x3FFFFFFFu;
      const uint NIL = 0x00000000u;
      const uint TIP = 0x40000000u;
      const uint OCT = 0x80000000u;
      const uint NOP = 0x00000000u;
      const uint GOT = 0x40000000u;
      const uint HIT = 0u;
      const uint PAS = 1u;
      const uint MIS = 2u;

      float div(float a, float b, float k) {
        if (b == 0.0) {
          return a > 0.0 ? inf : a < 0.0 ? -inf : k;
        } else {
          return a / b;
        }
      }

      float intersect(vec3 ray_pos, vec3 ray_dir, vec3 box_pos, vec3 box_siz) {
        vec3 box_min = box_pos - box_siz * 0.5;
        vec3 box_max = box_pos + box_siz * 0.5;
        float t1 = div(box_min.x - ray_pos.x, ray_dir.x, -inf);
        float t2 = div(box_max.x - ray_pos.x, ray_dir.x, inf);
        float t3 = div(box_min.y - ray_pos.y, ray_dir.y, -inf);
        float t4 = div(box_max.y - ray_pos.y, ray_dir.y, inf);
        float t5 = div(box_min.z - ray_pos.z, ray_dir.z, -inf);
        float t6 = div(box_max.z - ray_pos.z, ray_dir.z, inf);
        float t7 = max(max(min(t1, t2), min(t3, t4)), min(t5, t6));
        float t8 = min(min(max(t1, t2), max(t3, t4)), max(t5, t6));
        float t9 = (t8 < 0.0 || t7 > t8) ? inf : t7 < 0.0 ? t8 : t7;
        return t9;
      }

      uint vec4_to_uint(vec4 v) {
        return 
          ( (uint(v.x*255.0) << 0u)
          | (uint(v.y*255.0) << 8u)
          | (uint(v.z*255.0) << 16u)
          | (uint(v.w*255.0) << 24u));
      }

      vec4 uint_to_vec4(uint u) {
        float x = float((u >> 0) & 0xFFu);
        float y = float((u >> 8) & 0xFFu);
        float z = float((u >> 16) & 0xFFu);
        float w = float((u >> 24) & 0xFFu);
        return vec4(x,y,z,w)/255.0;
      }

      uint get(sampler2D arr, uint idx) {
        float x = float(idx & 0x7FFu) / 2048.0;
        float y = float((idx >> 11) & 0x7FFu) / 2048.0;
        vec4 col = texture(arr, vec2(x,y));
        return vec4_to_uint(col);
      }

      uint lookup(sampler2D octree, vec3 pos) {
        uint px = uint(floor(pos.x) + 512.0);
        uint py = uint(floor(pos.y) + 512.0);
        uint pz = uint(floor(pos.z) + 512.0);
        uint idx = 0u;
        for (uint bit = 9u; bit >= 0u; bit = bit - 1u) {
          uint slt
            = (((px >> bit) & 1u) << 2u)
            | (((py >> bit) & 1u) << 1u)
            | (((pz >> bit) & 1u) << 0u);
          uint nod = get(octree, idx + slt);
          if (bit == 0u) {
            return nod;
          } else {
            uint ctr = nod & CTR;
            if (ctr != NIL) {
              idx = nod & VAL;
            } else {
              return NOP | bit;
            }
          }
        }
      }

      struct Hit {
        uint ctr;
        vec3 pos; 
        uint val;
      };

      Hit march(vec3 ray, vec3 dir, sampler2D octree) {
        Hit hit;
        // Enters the octree
        if ( ray.x >=  512.0 || ray.y >=  512.0 || ray.z >=  512.0
          || ray.x <= -512.0 || ray.y <= -512.0 || ray.z <= -512.0) {
          float ht = intersect(ray, dir, vec3(0.0), vec3(1024.0));
          if (ht != inf) {
            ray.x = ray.x + dir.x * ht + dir.x * eps;
            ray.y = ray.y + dir.y * ht + dir.y * eps;
            ray.z = ray.z + dir.z * ht + dir.z * eps;
          } else {
            hit.ctr = MIS;
            return hit;
          }
        }
        // Marches through it
        while (
          !( ray.x >=  512.0 || ray.y >=  512.0 || ray.z >=  512.0
          || ray.x <= -512.0 || ray.y <= -512.0 || ray.z <= -512.0)) {
          ray.x += dir.x * eps;
          ray.y += dir.y * eps;
          ray.z += dir.z * eps;
          uint got = lookup(octree, ray);
          if ((got&CTR) == NOP) {
            uint lv = 10u - (got & VAL);
            float bl = float(1024u >> lv);
            float bq = 1.0 / float(bl);
            float bx = (floor((ray.x+512.0)*bq)+0.5)*bl-512.0;
            float by = (floor((ray.y+512.0)*bq)+0.5)*bl-512.0;
            float bz = (floor((ray.z+512.0)*bq)+0.5)*bl-512.0;
            float ht = intersect(ray,dir,vec3(bx,by,bz),vec3(bl));
            if (ht != inf) {
              ray.x = ray.x + dir.x * ht;
              ray.y = ray.y + dir.y * ht;
              ray.z = ray.z + dir.z * ht;
            } else {
              break;
            }
          } else {
            hit.ctr = HIT;
            hit.pos = ray;
            hit.val = got & VAL;
            return hit;
          }
        }
        // Passed through
        hit.ctr = PAS;
        hit.pos = ray - dir * eps;
        return hit;
      }

      void main(void) {
        // Computes ray pos and dir
        vec3 ray_pos;
        vec3 ray_dir;
        ray_pos = cam_pos;
        ray_pos = ray_pos + cam_right*scr_siz.x*scr_pos.x;
        ray_pos = ray_pos + cam_down*scr_siz.y*scr_pos.y;
        ray_dir = cam_front;

        //ray_pos = vec3(0.0, -1000.0, 0.0);
        //ray_dir = vec3(0.0, 1.0, 0.0);

        // Marches towards octree
        Hit hit = march(ray_pos, ray_dir, octree);

        // If it hit a voxel, draw it
        if (hit.ctr == HIT) {
          vec4 col = uint_to_vec4(hit.val);
          outColor = vec4(vec3(col),1.0);
          //outColor = vec4(1.0,0.5,0.5,1.0);
        //} else if (hit.ctr == MIS) {
          //outColor = vec4(0.9,1.0,0.9,1.0);
        //} else if (hit.ctr == PAS) {
          //outColor = vec4(0.9,0.9,1.0,1.0);
        //}
        } else {
          outColor = vec4(0.0);
        }
      }
    `;

    var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, frag_code); 
    gl.compileShader(fragShader);

    var compiled = gl.getShaderParameter(vertShader, gl.COMPILE_STATUS);
    console.log('Shader compiled successfully: ' + compiled);
    var compilationLog = gl.getShaderInfoLog(vertShader);
    console.log('Shader compiler log: ' + compilationLog);
    var compiled = gl.getShaderParameter(fragShader, gl.COMPILE_STATUS);
    console.log('Shader compiled successfully: ' + compiled);
    var compilationLog = gl.getShaderInfoLog(fragShader);
    console.log('Shader compiler log: ' + compilationLog);

    var shader = gl.createProgram();
    gl.attachShader(shader, vertShader);
    gl.attachShader(shader, fragShader);
    gl.linkProgram(shader);
    gl.useProgram(shader);

    // ======= Input texture =======

    var texture = gl.createTexture();
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 2048, 2048, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.uniform1i(gl.getUniformLocation(shader, "octree"), texture);

    // ======= Octree data buffer =======
    
    var octree_buffer = new Uint32Array(2048*2048);

    // ======= Associating shaders to buffer objects =======

    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

    // Get the attribute location
    var coord = gl.getAttribLocation(shader, "coordinates");
    gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0); 
    gl.enableVertexAttribArray(coord);
      
    canvas.draw = function(voxels) {
      // Builds voxel octree
      var tree = build_voxel_octree(voxels);

      // Copies data to octree buffer
      for (var i = 0; i < tree.length; ++i) {
        octree_buffer[i] = tree[i] >>> 0;
      }

      // Uploads octree to GPU
      var buff = new Uint8Array(octree_buffer.buffer);
      var size = [2048, 2048];
      gl.texSubImage2D(
        gl.TEXTURE_2D, 0, 0,0, ...size,
        gl.RGBA, gl.UNSIGNED_BYTE, buff);

      // Uploads camera to GPU
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_pos"),
        [cam.pos.x, cam.pos.y, cam.pos.z]);
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_right"),
        [cam.right.x, cam.right.y, cam.right.z]);
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_down"),
        [cam.down.x, cam.down.y, cam.down.z]);
      gl.uniform3fv(
        gl.getUniformLocation(shader,"cam_front"),
        [cam.front.x, cam.front.y, cam.front.z]);
      gl.uniform2fv(
        gl.getUniformLocation(shader,"scr_siz"),
        [scr.siz.x, scr.siz.y]);

      // Renders screen
      gl.viewport(0,0,canvas.width,canvas.height);
      gl.clearColor(0.5, 0.5, 0.5, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);
    };

    return canvas;
  };
};
