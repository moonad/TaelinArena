// Format: a Tree can be either Nil, Tip or Oct. Nil holds
// nothing. TIP holds a value. Oct holds 8 Trees. The memory
// is organized in blocks if 8 uint32, plus a root pointer.
// A pointer is represented as an uint32, where the first
// two bits represent the constructor it points to, and the
// last 30 bits represent its data. For a `Tip`, it is the
// value. For an `oct`, it is an index. The tree has an
// exact depth of 10, allowing 1024x1024x1024 values to be
// stored.

const min = Math.min;
const max = Math.max;
const flr = Math.floor;
const p32 = 2 ** 32;
const q32 = 1 / p32;
const eps = 0.00001526;

const CTR = 0xC0000000;
const VAL = 0x3FFFFFFF;

const NIL = 0x00000000;
const TIP = 0x40000000;
const OCT = 0x80000000;

function empty() {
  return [NIL, NIL, NIL, NIL, NIL, NIL, NIL, NIL];
};

function insert(px, py, pz, col, oct) {
  px = (px + 512) >>> 0;
  py = (py + 512) >>> 0;
  pz = (pz + 512) >>> 0;
  var idx = 0;
  for (var bit = 9; bit >= 0; bit = bit - 1) {
    var slt
      = (((px >>> bit) & 1) << 2)
      | (((py >>> bit) & 1) << 1)
      | (((pz >>> bit) & 1) << 0);
    if (bit === 0) {
      oct[idx+slt] = TIP | col;
    } else {
      var nod = oct[idx+slt];
      var ctr = (nod&CTR)>>>0;
      var val = (nod&VAL)>>>0;
      if (ctr === NIL) {
        oct[idx+slt] = OCT | oct.length;
        idx = oct.length;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
        oct[oct.length] = NIL;
      } else {
        idx = val;
      }
    }
  }
};

const NOP = 0x00000000;
const GOT = 0x40000000;

// Lookup returns either GOT(col) or NOP(lvl). GOT contains
// the found color. NOP contains the how many levels above
// the contained color it stopped.
function lookup(px, py, pz, oct) {
  px = (px + 512) >>> 0;
  py = (py + 512) >>> 0;
  pz = (pz + 512) >>> 0;
  var idx = 0;
  for (var bit = 9; bit >= 0; bit = bit - 1) {
    var slt
      = (((px >>> bit) & 1) << 2)
      | (((py >>> bit) & 1) << 1)
      | (((pz >>> bit) & 1) << 0);
    if (bit === 0) {
      // No need to deconstruct because NIL/TIP have the
      // same constructor labels as NOP/GOT.
      return oct[idx+slt];
    } else {
      var nod = oct[idx+slt];
      var ctr = (nod&CTR)>>>0;
      if (ctr !== NIL) {
        idx = (nod&VAL)>>>0;
      } else {
        return NOP | bit;
      }
    }
  };
};

// Converts an octree to a string
function show(oct, ptr = OCT, lvl = 0) {
  var ctr = (ptr & 0xC0000000) >>> 0;
  var val = (ptr & 0x3FFFFFFF) >>> 0;
  var str = "";
  for (var j = 0; j < lvl; ++j) {
    str += j === lvl-1 ? "+" : "-";
  }
  switch (ctr) {
    case NIL:
      return str + "\n";
    case TIP:
      //for (var j = 0; j < lvl; ++j) {
        //str += "-";
      //}
      return str + "0x"+val.toString(16) + "\n";
    case OCT:
      str += "oct\n";
      for (var i = 0; i < 8; ++i) {
        str += show(oct, oct[val+i], lvl+1);
      }
      return str;
  }
};


// This isn't used, but is here for documentation purposes.
// In order for the intersection function below to work in
// cases such as `intersect(-100,5,0, 1,0,0, 0,0,0,
// 10,10,10)`, i.e., when you're firing the ray towards the
// box in the plane of one of its faces, we must have
// caution on how we perform the division to get each `t`.
// If we divide `a` by 0, then we must return `-inf` if
// `a<0`, `+inf` if `a>0`, and `k` if `a==0`. In JavaScript,
// this can be performed as `a / b || k`, so we do that
// instead, since it is faster, but on WebGL, we need to use
// this division algorithm.
function div(a, b, k) {
  if (b === 0) {
    return a > 0.0 ? Infinity : a < 0.0 ? -Infinity : k;
  } else {
    return a / b;
  }
}

// Moves a ray through a direction and returns the distance
// traveled until it hits the surface of the box. The ray
// can start inside. If it never hits, returns infinite.
function intersect(
  ray_pos_x, ray_pos_y, ray_pos_z,
  ray_dir_x, ray_dir_y, ray_dir_z,
  box_pos_x, box_pos_y, box_pos_z,
  box_siz_x, box_siz_y, box_siz_z) {
  var box_min_x = box_pos_x - box_siz_x * 0.5;
  var box_min_y = box_pos_y - box_siz_y * 0.5;
  var box_min_z = box_pos_z - box_siz_z * 0.5;
  var box_max_x = box_pos_x + box_siz_x * 0.5;
  var box_max_y = box_pos_y + box_siz_y * 0.5;
  var box_max_z = box_pos_z + box_siz_z * 0.5;
  var t1 = (box_min_x - ray_pos_x) / ray_dir_x || -Infinity;
  var t2 = (box_max_x - ray_pos_x) / ray_dir_x || Infinity;
  var t3 = (box_min_y - ray_pos_y) / ray_dir_y || -Infinity;
  var t4 = (box_max_y - ray_pos_y) / ray_dir_y || Infinity;
  var t5 = (box_min_z - ray_pos_z) / ray_dir_z || -Infinity;
  var t6 = (box_max_z - ray_pos_z) / ray_dir_z || Infinity;
  var t7 = max(max(min(t1, t2), min(t3, t4)), min(t5, t6));
  var t8 = min(min(max(t1, t2), max(t3, t4)), max(t5, t6));
  var t9 = (t8<0.0 || t7>t8) ? Infinity : t7<0.0 ? t8 : t7;
  return t9;
};

const HIT = 0;
const PAS = 1;
const MIS = 2;

// Marches through an octree until it hits a value. Returns
// `HIT(pos,val)` if it hits, with `pos` being the value
// position (not the ray position) and `val` being its
// value. If it never hits the octree, returns `MIS`. If it
// hits but passes through, returns `PAS`.
function march(rx,ry,rz,dx,dy,dz,oct) {

  // Enters the octree
  if ( rx >=  512 || ry >=  512 || rz >=  512
    || rx <= -512 || ry <= -512 || rz <= -512) {
    var ht = intersect(rx,ry,rz,dx,dy,dz,0,0,0,1024,1024,1024);
    if (ht !== Infinity) {
      rx = rx + dx*ht + dx*eps;
      ry = ry + dy*ht + dy*eps;
      rz = rz + dz*ht + dz*eps;
      //console.log("enter",rx,ry,rz);
    } else {
      return {ctr: MIS};
    }
  }

  // Marches through it
  while (
    !( rx >=  512 || ry >=  512 || rz >=  512
    || rx <= -512 || ry <= -512 || rz <= -512)) {
    rx += dx*eps;
    ry += dy*eps;
    rz += dz*eps;
    var got = lookup(rx, ry, rz, oct);
    if (((got&CTR)>>>0) === NOP) {
      // If the ray isn't colliding with a value, thus
      // computes the bounds of the box around the ray on
      // the octree, using the "number of levels above the
      // color" returned by the lookup function.
      var lv = 10 - (got&VAL);
      //if (lv !== 10) {
        //console.log("???", lv);
      //}
      var bl = 1024 >>> lv; // box size
      var bq = 1/bl;
      var bx = ((((rx+512)*bq)>>>0)+0.5)*bl-512;
      var by = ((((ry+512)*bq)>>>0)+0.5)*bl-512;
      var bz = ((((rz+512)*bq)>>>0)+0.5)*bl-512;
      var ht = intersect(rx,ry,rz,dx,dy,dz,bx,by,bz,bl,bl,bl);
      if (ht !== Infinity) {
        rx = rx + dx*ht;
        ry = ry + dy*ht;
        rz = rz + dz*ht;
      } else {
        //console.log(bx,by,bz,"|",bl);
        //console.log("aff", rx-dx*eps,ry-dy*eps,rz-dz*eps, got, (got&VAL)>>>0);
        break;
        //return {ctr: MIS};
      }
    } else {
      //console.log("hit",rx,ry,rz,lookup(rx,ry,rz,oct));
      return {
        //pos: {
          //x: rx - dx*eps,
          //y: ry - dy*eps,
          //z: rz - dz*eps
        //},
        ctr: HIT,
        pos: {
          x: Math.floor(rx),
          y: Math.floor(ry),
          z: Math.floor(rz),
        },
        val: (got&VAL)>>>0
      };
    }
  }

  // Passed through
  return {
    ctr: PAS, 
    pos: {
      x: rx - dx*eps,
      y: ry - dy*eps,
      z: rz - dz*eps,
    }
  };
};

module.exports = {
  CTR,
  VAL,
  NIL,
  TIP,
  OCT,
  empty,
  insert,
  NOP,
  GOT,
  lookup,
  march,
  HIT,
  MIS,
  PAS,
  show,
};


//var oct = module.exports;
//var tree = oct.empty();
//for (var k = -8; k < 8; ++k) {
  //for (var j = -8; j < 8; ++j) {
    //for (var i = -8; i < 8; ++i) {
      //oct.insert(i,j,k,0xFF,tree);
    //}
  //}
//}

//console.log(oct.march(-1000,0,0,1,0,0,tree));
//console.log(oct.march(1000,0,0,-1,0,0,tree));

//var t = empty();
//var hit = march(100,-512,0, -1,0,0, t);
//console.log(hit);
//for (var z = -16; z < 16; ++z) {
  //for (var y = -16; y < 16; ++y) {
    //for (var x = -16; x < 16; ++x) {
      //insert(x,y,z,1,t);
    //}
  //}
//}
//var s = 0;
//for (var i = 0; i < 5000000; ++i) {
  //s += march(60,0,0, -1,0,0, t).val;
//};
//console.log(s);
//console.log(march(-60,0,0, -1,0,0, t));

//console.log(
  //intersect(
    //511.99998474121094,0,0,
    //-1,0,0,
    //384,128,128,
    //256,256,256));
    
//console.log(
  //intersect(
    //9.9999,0,0,
    //-1,0,0,
    //0,0,0,
    //20,20,20));

//console.log(intersect(
  //0,0,0,
  //1,0,0,
  //0,0,0,
  //30,64,64));


//var t = empty();
//var L = 10000000;
//var T = Date.now();
//for (var i = 0; i < L; ++i) {
  //var x = i % 1024 - 512;
  //var y = Math.floor(i / 1024) % 1024 - 512;
  //var z = Math.floor(i / 1024 / 1024) - 512;
  //insert(x,y,z,1,t);
//}
//console.log((Date.now() - T)+"ms"); T = Date.now();
//var s = 0;
//for (var i = 0; i < L; ++i) {
  //var x = i % 1024 - 512;
  //var y = Math.floor(i / 1024) % 1024 - 512;
  //var z = Math.floor(i / 1024 / 1024) - 512;
  //s += lookup(x,y,z,t)&VAL;
//}
//console.log(s);
//console.log((Date.now() - T)+"ms"); T = Date.now();

//insert(0, 0, 0, 0x1, t);
//insert(1, 0, 0, 0x2, t);
//insert(0, 1, 0, 0x3, t);
//insert(1, 1, 0, 0x4, t);
//insert(0, 0, 1, 0x5, t);
//insert(1, 0, 1, 0x6, t);
//insert(0, 1, 1, 0x7, t);
//insert(1, 1, 1, 0x8, t);
//insert(1023, 1023, 1023, 0x9, t);
//console.log(show(t));
//console.log(lookup(2,0,0,t));
