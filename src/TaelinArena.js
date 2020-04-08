if (typeof window !== "undefined") {
  var TA = require("./game/TaelinArena.fm");
  var heroes_info = require('./assets/char-info.json');

  // Loads all models
  var models = require("./models/models.js");
  var model_parse = require("./models/parser.js");
  var model_packs = require("./models/packs.js");
  function get_model(i) {
    // Model wasn't requested
    if (typeof models[i] === "function") {
      // Loads all models from the same pack
      for (var pack_name in model_packs) {
        let pack = model_packs[pack_name];
        if (i >= pack.from && i < pack.til) {
          for (let j = pack.from; j < pack.til; ++j) {
            models[j] = models[j]().then(model => {
              models[j] = model_parse(model.default);
            });
          }
        }
      };
      return null;
    // Model is loading
    } else if (models.then) {
      return null;
    // Model is loaded
    } else {
      return models[i];
    }
  };
  var stage = null;
} else {
  var TA = {};
  var models = null;
  var stage = null;
}

const GAME_FPS = 24;
const GAME_DURATION = GAME_FPS * 30;

function slist_to_array(slist) {
  var array = [];
  (function go(slist) {
    slist(null)(h => t => { array.push(h); go(t); });
  })(slist);
  return array;
};

function array_to_slist(array) {
  var slist = TA.nil;
  for (var i = array.length-1; i >= 0; --i) {
    slist = TA.cons(array[i])(slist);
  };
  return slist;
};

function sstring_to_string(sstr) {
  var chars = slist_to_array(sstr);
  return chars.map(x => String.fromCharCode(x)).join("");
};

function string_to_sstring(str) {
  var array = [];
  for (var i = 0; i < str.length; ++i) {
    array.push(str.charCodeAt(i));
  }
  return array_to_slist(array);
};

const now = (() => {
  var init_time = Date.now()/1000;
  return () => Date.now()/1000 - init_time;
})();

var OFF_GAME = 0xFFFFFFFF;

// The function below use those global objects for
// performance reasons, preventing extra allocs
var voxels = {size: 256*256*32*2, data: new Uint32Array(256*256*32*2)};
var lights = [];
var hud = [];

function render_hitbox(pos, dir, box, col = 0xA0A0F0FF) {
  var [pos_x,pos_y,pos_z] = pos(x=>y=>z=>([x,y,z]));
  let case_nbox = null;
  let case_cbox = (rad) => {
    for (var i = 0; i < 64; ++i) {
      var px = pos_x + rad * Math.cos(i/64*Math.PI*2);
      var py = pos_y + rad * Math.sin(i/64*Math.PI*2);
      var pz = pos_z;
      if ( -512 < px && px < 512
        && -512 < py && py < 512
        && -512 < pz && pz < 512) {
        var xyz = (px+512)<<20|(py+512)<<10|(pz+512);
        var rgb = col;
        voxels.data[voxels.size++] = xyz;
        voxels.data[voxels.size++] = rgb;
      }
    }
  };
  let case_pbox = (pts) => {
    var segs = slist_to_array(TA.polygon_to_segments(pos)(dir)(pts));
    for (var i = 0; i < segs.length; ++i) {
      var [p0,p1] = segs[i](a => b => ([
        a(x => y => z => ({x,y,z})),
        b(x => y => z => ({x,y,z}))
      ]));
      for (var n = 0; n <= 32; ++n) {
        var px = p0.x + (p1.x - p0.x) * n/32;
        var py = p0.y + (p1.y - p0.y) * n/32;
        var pz = p0.z + (p1.z - p0.z) * n/32;
        if ( -512 < px && px < 512
          && -512 < py && py < 512
          && -512 < pz && pz < 512) {
          var xyz = (px+512)<<20|(py+512)<<10|(pz+512);
          var rgb = col;
          voxels.data[voxels.size++] = xyz;
          voxels.data[voxels.size++] = rgb;
        }
      }
    }
  };
  box(case_nbox)(case_cbox)(case_pbox);
};

function render_hits(hits) {
  let case_nil  = null;
  let case_cons = hit => hits => {
    hit(eff => pos => dir => box => {
      render_hitbox(pos, dir, box, 0xFFA0A0FF);
    });
    render_hits(hits);
  };
  hits(case_nil)(case_cons);
};

function render_model(pos, dir, mid) {
  var [dir_x,dir_y,dir_z] = dir(x=>y=>z=>([x,y,z]));
  var [pos_x,pos_y,pos_z] = pos(x=>y=>z=>([x,y,z]));
  var ang = Math.atan2(dir_y, dir_x);
  var ang = ang + Math.PI*0.5;
  var hei = 0;
  var model = get_model(mid);
  if (model) {
    for (var i = 0; i < model.length; ++i) {
      var [{x,y,z},{r,g,b}] = model[i];
      var max_z = Math.max(max_z, z);
      var cx = pos_x;
      var cy = pos_y;
      var cz = pos_z;
      var px = cx + x;
      var py = cy + y;
      var pl = Math.sqrt((px-cx)**2+(py-cy)**2);
      var pa = Math.atan2(py-cy,px-cx);
      var px = cx + pl * Math.cos(pa + ang) + 0.5;
      var py = cy + pl * Math.sin(pa + ang) + 0.5;
      var pz = cz + z;
      if ( -512 < px && px < 512
        && -512 < py && py < 512
        && -512 < pz && pz < 512) {
        var xyz = (px+512)<<20|(py+512)<<10|(pz+512);
        var rgb = (r<<24)|(g<<16)|(b<<8)|0xFF;
        voxels.data[voxels.size++] = xyz;
        voxels.data[voxels.size++] = rgb;
      }
      hei = Math.max(hei, z);
    }
  }
  return hei;
};

function render_lights(lit) {
  (function go(lit) {
    var case_nil  = null;
    var case_cons = head => tail => {
      head(pos => rad => rng => sub => add => {
        pos = pos(x=>y=>z=>({x,y,z}));
        sub = sub(x=>y=>z=>({x,y,z}));
        add = add(x=>y=>z=>({x,y,z}));
        lights.push({pos, rad, rng, sub, add});
      });
      go(tail);
    };
    lit(case_nil)(case_cons);
  })(lit);
};

function render_thing(thing) {
  thing(
    fun => pid => mid => act =>
    sid => stt => nam => lit =>
    tik => pos => mov => bst =>
    wlk => dir => trg => vel =>
    box => wei => mhp => dmg =>
    knk => buf => chi => hit =>
    res => die => {
    // Renders model voxels
    var max_z = 0;
    if (mid !== 0xFFFFFFFF) {
      let look_dir = act === 0 ? dir : TA.lookat_v3(pos)(trg)(dir);
      max_z = render_model(pos, look_dir, mid);
    }

    // Renders hits
    render_hits(hit);

    // Renders hitbox
    render_hitbox(pos, dir, box, 
      sid === 1 ? 0xA0F0A0FF :
      sid === 2 ? 0xA0A0F0FF :
      sid === 3 ? 0xA0F0F0FF :
      0xA0A0A0FF);

    // Renders lights
    render_lights(lit);

    // Renders HUD
    hud.push({
      pos: pos(x=>y=>z=>({x,y,z})),
      sid: sid,
      dmg: dmg,
      mhp: mhp,
      nam: sstring_to_string(nam),
      hei: max_z,
    });
  });
};

function render_game({game, canvox, canhud, cam}) {
  voxels.size = 0;
  hud.length = 0;
  lights.length = 0;

  // Gets the current time
  var T = now();

  // Gets the main hero position
  var hero_pos = TA.get_position_by_pid(0, game);

  // Renders each game thing
  TA.map_stage(thing=>render_thing(thing,hud,lights))(game);

  canvox.draw({voxels, lights, stage, cam});
  if (canhud) {
    canhud.draw({hud, cam});
  };
  
  return hud;
};

// Turns ::=
//   | 0: End
//   | 1: Next(Turn, Turns)
// Turn ::=
//   | 0: End
//   | 1: Player0(Input, Turn)
//   | 2: Player1(Input, Turn)
//   | ... up to 15 ...
// Input ::=
//   | 0: stick(x: 4bit, y: 4bit) 
//   | 1: left(x: 12bit, y: 12bit)
//   | 2: middle(x: 12bit, y:12bit)
//   | 3: right(x: 12bit, y:12bit)
//   | 4: space(x: 12bit, y:12bit)
//   | 5: shift(x: 12bit, y:12bit)
//   | 6: extra(x: 12bit, y:12bit)
//   | 7: cmsg(...TODO...)

// Parses a player input code into an object
function parse_command(code, idx=0) {
  var player = parseInt(code[idx],16) - 1;
  var input = parseInt(code[idx+1],16);
  if (input === 0) {
    var dir_x = (parseInt(code[idx+2],16)/14)*2-1;
    var dir_y = (parseInt(code[idx+3],16)/14)*2-1;
    return [idx+4, {
      player,
      input: "SDIR",
      params: {dir: {x: dir_x, y: dir_y}}
    }];
  } else if (input >= 1 && input <= 6) {
    var pos_x_a = parseInt(code[idx+2],16);
    var pos_x_b = parseInt(code[idx+3],16);
    var pos_x_c = parseInt(code[idx+4],16);
    var pos_y_a = parseInt(code[idx+5],16);
    var pos_y_b = parseInt(code[idx+6],16);
    var pos_y_c = parseInt(code[idx+7],16);
    var pos_x = ((pos_x_a<<8)|(pos_x_b<<4)|pos_x_c)-2048;
    var pos_y = ((pos_y_a<<8)|(pos_y_b<<4)|pos_y_c)-2048;
    return [idx+8, {
      player,
      input: "KEY"+"012345"[input-1],
      params: {pos: {x: pos_x, y: pos_y}}
    }];
  } else {
    return [idx+2, {
      player,
      input: "TEXT",
      string: ""
    }];
  };
}

function parse_player(player) {
  var side;
  switch(player[0]) {
    case "<": side = "<"; break;
    case "^": side = "^"; break;
    case ">": side = ">"; break;
  }
  var [name,hero] = player.slice(1).split("!");
  return {side,name,hero};
}

// Parses a player turn code into an array of player inputs
function parse_turn(code, idx=0) {
  var turn = [];
  while (idx < code.length) {
    if (code[idx] === "0") {
      idx += 1;
      break;
    } else {
      var [idx,plr_inp] = parse_command(code,idx);
      turn.push(plr_inp);
    }
  };
  return [idx, turn];
};

// Parses a list of player turns
function parse_turns(code, idx=0) {
  var turns = [];
  while (idx < code.length) {
    if (code[idx] === "0") {
      break;
    } else {
      idx += 1;
      var [idx, turn] = parse_turn(code, idx);
      turns.push(turn);
    }
  };
  return [idx, turns];
};

// Makes a player input code from keyboard/mouse states
function make_input_netcode(keyboard, mouse) {
  function changed(name) {
    return keyboard[name] ? keyboard[name][0] : 0;
  };
  function state(name) {
    return keyboard[name] ? keyboard[name][1] : 0;
  };
  function pressed(name) {
    return changed(name) && state(name) ? 1 : 0;
  };

  // WASD events take precedence
  let keyW = changed("w");
  let keyA = changed("a");
  let keyS = changed("s");
  let keyD = changed("d");
  if (keyW || keyA || keyS || keyD) {
    var pad_x = state("d") - state("a");
    var pad_y = state("w") - state("s");
    var pad = {x: pad_x, y: pad_y};
    var pl = Math.sqrt(pad.x**2 + pad.y**2) || 1;
    var px = pad.x / pl;
    var py = pad.y / pl;
    var px = Math.floor((px+1)/2*14).toString(16);
    var py = Math.floor((py+1)/2*14).toString(16);
    return "0" + px + py;
  }

  // Otherwise, check for input keys
  var key0 = pressed("left");
  var key1 = pressed("middle");
  var key2 = pressed("right");
  var key3 = pressed("shift");
  var key4 = pressed("space");
  var key5 = pressed("extra");
  if (key0 || key1 || key2 || key3 || key4 || key5) {
    var mx = mouse.x;
    var my = mouse.y;
    var mx = Math.max(Math.min(mx+2048, 4096), 0);
    var my = Math.max(Math.min(my+2048, 4096), 0);
    var mx = ("000"+Math.floor(mx).toString(16)).slice(-3);
    var my = ("000"+Math.floor(my).toString(16)).slice(-3);
    var ct = key0 ? "1"
          : key1 ? "2"
          : key2 ? "3"
          : key3 ? "4"
          : key4 ? "5"
          : key5 ? "6"
          : null;
    return ct + mx + my;
  }

  return null;
}

// Executes a command inside Formality
function execute_command(inp, game) {
  let cmd = null;
  if (inp.input === "SDIR") {
    let x = inp.params.dir.x;
    let y = inp.params.dir.y;
    let d = v3 => v3(x)(y)(0);
    cmd = TA.command(inp.player)(TA.sdir(d));
  } else if (inp.input === "TEXT") {
    console.log(new Error("Not implemented."));
    throw "TODO";
  } else {
    var x = inp.params.pos.x;
    var y = inp.params.pos.y;
    let p = v3 => v3(x)(y)(0);
    var f = null;
    switch (inp.input) {
      case "KEY0": keyx = TA.key0; break;
      case "KEY1": keyx = TA.key1; break;
      case "KEY2": keyx = TA.key2; break;
      case "KEY3": keyx = TA.key3; break;
      case "KEY4": keyx = TA.key4; break;
      case "KEY5": keyx = TA.key5; break;
    }
    cmd = TA.command(inp.player)(keyx(p));
  }
  return TA.exec_command(cmd)(game);
}

function make_thing([name, {pid,sid,pos,nam}]) {
  var thing;
  name = name.toLowerCase();
  thing = TA.new_thing;
  if (TA[name+"_fun"]) {
    thing = TA.set_thing_fun(thing)(TA[name+"_fun"]);
  }
  if (sid !== undefined) {
    thing = TA.set_thing_sid(thing)(sid);
  }
  if (pid !== undefined) {
    thing = TA.set_thing_pid(thing)(pid);
  }
  if (pos !== undefined) {
    thing = TA.set_thing_pos(thing)(v3 => v3(pos.x)(pos.y)(pos.z));
  }
  if (nam !== undefined) {
    thing = TA.set_thing_nam(thing)(string_to_sstring(nam)); 
  }
  return thing;
};

function GameRunner(gid, things) {
  var self = {};
  self.gid = gid;
  self.state = TA.game(array_to_slist(things.map(make_thing)));
  self.turns = [];

  function turn() {
    if (self.state) {
      self.state = TA.exec_turn(self.state);
    }
  }

  function exec(input) {
    self.state = execute_command(input, self.state);
  }

  // Given a string with turn data from the internet, parse
  // it and add new information to turn list and game state
  function absorb_turn_info(str) {
    if (self.state && self.turns) {
      var game = parseInt(str.slice(1,9), 16);
      var from = parseInt(str.slice(9,17), 16);
      var last = self.turns.length;
      var new_turns = parse_turns(str.slice(17))[1];
      if (from <= last) {
        for (var i = last-from; i<new_turns.length; ++i) {
          self.turns[i+from] = new_turns[i];
          for (var j = 0; j < new_turns[i].length; ++j) {
            self.state = execute_command(new_turns[i][j], self.state);
          }
          self.state = TA.exec_turn(self.state);
        }
      }
    }
  }

  self.exec = exec;
  self.turn = turn;
  self.absorb_turn_info = absorb_turn_info;

  return self;
};

var heroes = [
  "Benfix",
  "Bleskape",
  "DarthVader",
  "Dilma",
  "Dorime",
  "DrStrange",
  "Finn",
  "Gastly",
  "Gon",
  "Greninja",
  "Grimer",
  "Jacquin",
  "Jinx",
  "Kakashi",
  "Kenko",
  "KingDedede",
  "Konan",
  "LinaInverse",
  "Link",
  "Luffy",
  "Magnamite",
  "Mando",
  "Mechwarrior",
  "Mikegator",
  "Min",
  "Monica",
  "PPG",
  "Pichu",
  "Ray",
  "Ryu",
  "Shao",
  "Squirtle",
  "SrMadruga",
  "Steve",
  "Teichi",
  "Tophoro",
  "Tupitree",
  "Weedle",
  "XululuChild",
  "Zagatur",
  "Zed",
  "Zoio",
];

var hero_name = {};
for (var i = 0; i < heroes.length; ++i) {
  hero_name[heroes[i].toLowerCase()] = heroes[i];
}

// hero_image : Map{[HeroName]: Maybe(URL)}
// where HeroName and URL are Strings
var heroes_image = new Map(Object.entries({}));
(async function fetch_image() {
  heroes_image.set("benfix", (await import("./assets/benfix.png")).default);
  heroes_image.set("bleskape", (await import("./assets/bleskape.png")).default);
  heroes_image.set("darthvader", (await import("./assets/darthvader.png")).default);
  heroes_image.set("dilma", (await import("./assets/dilma.png")).default);
  heroes_image.set("dorime", (await import("./assets/dorime.png")).default);
  heroes_image.set("drstrange", (await import("./assets/DrStrange.png")).default);
  heroes_image.set("finn", (await import("./assets/finn.png")).default);
  heroes_image.set("gastly", (await import("./assets/gastly.png")).default);
  heroes_image.set("gon", (await import("./assets/gon.png")).default);
  heroes_image.set("greninja", (await import("./assets/greninja.png")).default);
  heroes_image.set("grimer", (await import("./assets/grimer.png")).default);
  heroes_image.set("jacquin", (await import("./assets/Jacquin.png")).default);
  heroes_image.set("jinx", (await import("./assets/Jinx.png")).default);
  heroes_image.set("kakashi", (await import("./assets/Kakashi.png")).default);
  heroes_image.set("kenko", (await import("./assets/kenko.png")).default);
  heroes_image.set("kingdedede", (await import("./assets/kingdedede.png")).default);
  heroes_image.set("konan", (await import("./assets/konan.png")).default);
  heroes_image.set("linainverse", (await import("./assets/LinaInverse.png")).default);
  heroes_image.set("link", (await import("./assets/link.png")).default);
  heroes_image.set("luffy", (await import("./assets/luffy.png")).default);
  heroes_image.set("magnamite", (await import("./assets/magnamite.png")).default);
  heroes_image.set("mando", (await import("./assets/mando.png")).default);
  heroes_image.set("mechwarrior", (await import("./assets/mechwarrior.png")).default);
  heroes_image.set("mikegator", (await import("./assets/mikegator.png")).default);
  heroes_image.set("min", (await import("./assets/min.png")).default);
  heroes_image.set("monica", (await import("./assets/monica.png")).default);
  heroes_image.set("ppg", (await import("./assets/ppg.png")).default);
  heroes_image.set("pichu", (await import("./assets/pichu.png")).default);
  heroes_image.set("ray", (await import("./assets/ray.png")).default);
  heroes_image.set("ryu", (await import("./assets/ryu.png")).default);
  heroes_image.set("shao", (await import("./assets/shao.png")).default);
  heroes_image.set("squirtle", (await import("./assets/squirtle.png")).default);
  heroes_image.set("srmadruga", (await import("./assets/SrMadruga.png")).default);
  heroes_image.set("steve", (await import("./assets/Steve.png")).default);
  heroes_image.set("teichi", (await import("./assets/Teichi.png")).default);
  heroes_image.set("tophoro", (await import("./assets/Tophoro.png")).default);
  heroes_image.set("tupitree", (await import("./assets/tupitree.png")).default);
  heroes_image.set("weedle", (await import("./assets/Weedle.png")).default);
  heroes_image.set("xululuchild", (await import("./assets/XululuChild.png")).default);
  heroes_image.set("zagatur", (await import("./assets/Zagatur.png")).default);
  heroes_image.set("zed", (await import("./assets/zed.png")).default);
  heroes_image.set("zoio", (await import("./assets/zoio.png")).default);
})();


var heroes_info = require("./assets/char-info.json");


module.exports = {
  ...TA,
  slist_to_array,
  array_to_slist,
  sstring_to_string,
  string_to_sstring,
  GAME_FPS,
  GAME_DURATION,
  OFF_GAME,
  render_game,
  parse_turn,
  parse_turns,
  parse_player,
  parse_command,
  execute_command,
  make_input_netcode,
  make_thing,
  GameRunner,
  heroes,
  hero_name,
  heroes_image,
  heroes_info
};
