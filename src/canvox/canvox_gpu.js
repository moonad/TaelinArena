const oct = require("./octree.js"); 

var tree = null;
function build_voxel_octree(voxels) {
  tree = oct.empty(256*256*64, tree);
  var voxels_data = voxels.data;
  var voxels_size = voxels.size;
  for (var i = 0; i < voxels_size / 2; ++i) {
    var pos = voxels_data[i*2+0];
    var col = voxels_data[i*2+1];
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

function canvox() {
  var canvas = document.createElement("canvas");
  canvas.render_mode = "GPU";
  canvas.style["image-rendering"] = "pixelated";

  var gl = canvas.getContext('webgl2');

  var vertices = [-1,1,0,-1,-1,0,1,-1,0,-1,1,0,1,1,0,1,-1,0,];
  var indices = [0,1,2,3,4,5];

  var vertex_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  gl.bufferData(gl.ARRAY_BUFFER,
    new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

  var index_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

  // Vertex shader source code
  var vert_code = `#version 300 es
    in vec3 coordinates;
    out vec3 scr_pos;
    void main(void) {
      scr_pos = coordinates;
      scr_pos.y = - scr_pos.y;
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

    uniform int   light_len;
    uniform vec3  light_pos[32];
    uniform float light_rad[32];
    uniform float light_rng[32];
    uniform vec3  light_sub[32];
    uniform vec3  light_add[32];

    uniform sampler2D voxels;
    uniform sampler2D stage;

    const float inf = 65536.0;
    const float eps = 0.001953125;

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

    float intersect(
      vec3 ray_pos,
      vec3 ray_dir,
      vec3 box_pos,
      vec3 box_siz) {
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

    Hit march(vec3 ray, vec3 dir, sampler2D octree, float max_dist) {
      vec3 ini = ray;
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
        // Hits the floor
        if (ray.z <= 0.0) {
          hit.ctr = HIT;
          hit.pos = ray;
          hit.val = 0xB0B0B0u & VAL;
          return hit;
        }
        // Misses if travelled more than maximum dist
        if ( max_dist != inf
          && dot(ray-ini,ray-ini) > max_dist*max_dist) {
          hit.ctr = PAS;
          hit.pos = ini + dir * max_dist;
          return hit;
        }
        // Hits a voxel
        uint got = lookup(octree, ray);
        if ((got&CTR) != NOP) {
          hit.ctr = HIT;
          hit.pos = ray;
          hit.val = got & VAL;
          return hit;
        }
        // Marches forward
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
      ray_pos = ray_pos + cam_right*scr_siz.x*scr_pos.x*0.5;
      ray_pos = ray_pos + cam_down*scr_siz.y*scr_pos.y*0.5;
      ray_dir = cam_front;

      //ray_pos = vec3(0.0, -1000.0, 0.0);
      //ray_dir = vec3(0.0, 1.0, 0.0);

      // Marches towards octree
      Hit hit = march(ray_pos, ray_dir, voxels, inf);
      //Hit hit2 = march(ray_pos, ray_dir, stage, inf);
      //float dist1 = distance(hit1.pos, ray_pos);
      //float dist2 = distance(hit2.pos, ray_pos);
      //Hit hit;
      //if (hit2.ctr == HIT && dist1 > dist2) {
        //hit = hit2;
      //} else {
        //hit = hit1;
      //}
      
      // If it hit a voxel, draw it
      if (hit.ctr == HIT) {
        vec4 col = uint_to_vec4(hit.val);

        float fr = col.r;
        float fg = col.g;
        float fb = col.b;

        // Ambient 
        col.r *= 0.8;
        col.g *= 0.8;
        col.b *= 0.8;

        // Applies sunlight
        //vec3 sun_dir = vec3(0.0,0.0,1.0);
        //Hit sky = march(hit.pos, sun_dir, voxels, inf);
        //if (sky.ctr == HIT) {
          //col.r *= 0.8;
          //col.g *= 0.8;
          //col.b *= 0.8;
        //}

        // Applies other lights
        for (int i = 0; i < light_len; ++i) {
          vec3 lit_pos = light_pos[i];
          float light_rng = light_rng[i];
          float light_rad = light_rad[i];
          vec3 light_sub = light_sub[i];
          vec3 light_add = light_add[i];
          vec3 lit_dir, ray_pos;
          if (hit.pos.z > 0.0) {
            lit_dir = normalize(lit_pos - hit.pos);
            ray_pos = hit.pos + lit_dir * 1.5;
          } else {
            ray_pos = hit.pos + vec3(0.0,0.0,2.0);
            lit_dir = normalize(lit_pos - ray_pos);
          }
          // light_rng = range the light is at 100% power
          float lit_dst = distance(ray_pos, lit_pos);
          float lit_pow = min((light_rng*light_rng)/(lit_dst*lit_dst),1.0);
          float add_mag = length(light_add);
          // stops casting shadows at 4*rng
          if (add_mag*lit_pow > 0.005 && lit_dst > light_rad) {
            Hit hit = march(ray_pos, lit_dir, voxels, lit_dst - light_rad);
            if (hit.ctr == HIT) {
              lit_pow = 0.0;
            }
          }
          //float pw = 1.0 - min(lit_dst*lit_dst/(light_rng*light_rng),1.0);
          col.r -= light_sub.x*(1.0-lit_pow);
          col.g -= light_sub.y*(1.0-lit_pow);
          col.b -= light_sub.z*(1.0-lit_pow);
          col.r += light_add.x*lit_pow*fr;
          col.g += light_add.y*lit_pow*fg;
          col.b += light_add.z*lit_pow*fb;
        }

        vec3 color  = vec3(col);
        float alpha = 1.0;
        outColor = vec4(color, alpha);
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

  // ======= Voxels texture =======

  var voxels_texture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, voxels_texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
    2048, 2048, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.uniform1i(gl.getUniformLocation(shader, "voxels"), 0);

  // ======= Stage texture =======

  var stage_texture = gl.createTexture();
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, stage_texture);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,
    2048, 2048, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.uniform1i(gl.getUniformLocation(shader, "stage"), 1);

  // ======= data buffer =======
  
  var transfer_buffer_u32 = new Uint32Array(2048*2048);
  var transfer_buffer_u8 = new Uint8Array(transfer_buffer_u32.buffer);

  // ======= Associating shaders to buffer objects =======

  // Bind vertex buffer object
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, index_buffer);

  // Get the attribute location
  var coord = gl.getAttribLocation(shader, "coordinates");
  gl.vertexAttribPointer(coord, 3, gl.FLOAT, false, 0, 0); 
  gl.enableVertexAttribArray(coord);
    
  canvas.draw = function({voxels, stage, cam, lights}) {
    // Canvas setup
    // TODO: why odd widths won't work?
    canvas.width = cam.size.x * cam.res;
    canvas.height = cam.size.y * cam.res;
    canvas.width -= canvas.width % 2;
    canvas.height -= canvas.height % 2;
    canvas.style.width = Math.floor(cam.port.x) + "px";
    canvas.style.height = Math.floor(cam.port.y) + "px";

    // Builds voxels octree and uploads to GPU
    var tree = build_voxel_octree(voxels);
    var tree_size = tree.size;
    var tree_data = tree.data;
    for (var i = 0; i < tree_size; ++i) {
      transfer_buffer_u32[i] = tree_data[i] >>> 0;
    }
    var size = [2048, Math.ceil(tree_size/2048)];
    gl.activeTexture(gl.TEXTURE0);
    gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,...size,
      gl.RGBA, gl.UNSIGNED_BYTE, transfer_buffer_u8);

    // Uploads stage octree to GPU
    if (stage && !canvox.__uploaded_stage__) {
      for (var i = 0; i < stage.length; ++i) {
        transfer_buffer_u32[i] = stage[i] >>> 0;
      }
      gl.activeTexture(gl.TEXTURE1);
      gl.texSubImage2D(gl.TEXTURE_2D,0,0,0,2048,2048,
        gl.RGBA, gl.UNSIGNED_BYTE, transfer_buffer_u8);
      canvox.__uploaded_stage__ = true;
    }

    // Uploads lights to GPU
    var light_pos = [];
    var light_rng = [];
    var light_rad = [];
    var light_sub = [];
    var light_add = [];
    for (var i = 0; i < lights.length; ++i) {
      light_pos.push(lights[i].pos.x, lights[i].pos.y, lights[i].pos.z);
      light_rng.push(lights[i].rng);
      light_rad.push(lights[i].rad);
      light_sub.push(lights[i].sub.x, lights[i].sub.y, lights[i].sub.z);
      light_add.push(lights[i].add.x, lights[i].add.y, lights[i].add.z);
    }
    gl.uniform1i(gl.getUniformLocation(shader, "light_len"), lights.length);
    gl.uniform3fv(gl.getUniformLocation(shader, "light_pos"), light_pos);
    gl.uniform1fv(gl.getUniformLocation(shader, "light_rng"), light_rng);
    gl.uniform1fv(gl.getUniformLocation(shader, "light_rad"), light_rad);
    gl.uniform3fv(gl.getUniformLocation(shader, "light_sub"), light_sub);
    gl.uniform3fv(gl.getUniformLocation(shader, "light_add"), light_add);

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
      [cam.size.x, cam.size.y]);

    // Renders screen
    gl.viewport(0,0,canvas.width,canvas.height);
    gl.clearColor(0.5, 0.5, 0.5, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);
  };

  return canvas;
};

module.exports = canvox;
