// HTML Rendering
const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

// Voxel Rendering
const oct = require("./octree.js");
const canvox = require("./canvox.js");

// Voxel Models
const spritestack = require("./spritestack.js");
const load_model = name => {
  var model_json = require("./models/"+name+".json");
  return spritestack.model_to_voxels(model_json);
};
var croni = {
  feet:-64,
  anim:[
    load_model("croni_idle0"),
    load_model("croni_idle1"),
    load_model("croni_idle2"),
    load_model("croni_idle3"),
    load_model("croni_idle4"),
    load_model("croni_idle5"),
    load_model("croni_idle6"),
    load_model("croni_idle7"),
    load_model("croni_idle8"),
    load_model("croni_idle9"),
    load_model("croni_idle10"),
    load_model("croni_idle11"),
  ]
};

var lyn = {
  feet:-56,
  anim:[load_model("lyn")]
};

var hero = {...croni};

// Taelin Arena
var {
  demo_game,
  tick_game,
  input_game,
  map_game_objects,

  // Object accessors
  get_object_id,
  get_object_hp,
  get_object_pos,
  get_object_dir,
  get_object_vel,
  get_object_size,

  // Vector accessors
  get_x,
  get_y,
  get_z,
} = require("./TaelinArena.fm");

var now = (() => {
  var init_time = Date.now()/1000;
  return () => Date.now()/1000 - init_time;
})();

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0};
  }
  componentDidMount() {
  }
  render() {
    return h("div", {
      style: {
        "position": "absolute",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
        "width": "100%",
        "margin": "2px",
        "font-size": "16px",
        "font-family": "monospace",
        "font-weight": "bold",
      },
      onClick: () => {
        this.setState({count: this.state.count + 1});
      }
    }, [
      h("span", {}, "Taelin Arena"),
      h("input", {
        type: "file",
        multiple: true,
        style: {
          position: "fixed",
          bottom: "0px",
          left: "0px",
        },
        onchange: (e) => {
          hero = {feet:-64, anim:[]};
          var input = e.target;
          for (let i = 0; i < input.files.length; ++i) {
            let reader = new FileReader();
            reader.onload = () => {
              hero.anim[i]
                = spritestack.model_to_voxels(
                  JSON.parse(reader.result));
            };
            reader.readAsText(input.files[i]);
          };
        }
      }),
    ])
  }
};

// ----------

window.onload = () => {
  // Renders site using Inferno
  render(h(Counter), document.getElementById("main"));

  // Creates canvas and inserts on page
  var canvas = canvox();
  document.body.appendChild(canvas);

  // Keys that are pressed
  var key = {};
  document.body.onkeyup = (e) => {
    var event = t => {
      var id = 0;
      var dir;
      switch (e.key) {
        case "a": dir = t => t(0)(0)(0); break;
        case "s": dir = t => t(0)(0)(0); break;
        case "d": dir = t => t(0)(0)(0); break;
        case "w": dir = t => t(0)(0)(0); break;
      };
      return t(id)(dir);
    };
    game = input_game(event)(game);
    key[e.key] = 0;
  };
  document.body.onkeypress = (e) => {
    var event = t => {
      var id = 0;
      var dir;
      switch (e.key) {
        case "a": dir = t => t(-4)(0)(0); break;
        case "s": dir = t => t(0)(4)(0); break;
        case "d": dir = t => t(4)(0)(0); break;
        case "w": dir = t => t(0)(-4)(0); break;
      };
      return t(id)(dir);
    };
    game = input_game(event)(game);
    key[e.key] = 1;
  };

  // FPS metering
  var last_fps_print = now();
  var fps_count = 0;

  // Initial state of the game
  var game = demo_game;

  // Main loop of the game
  setInterval(function main_loop() {
    // Updates the FPS counter
    ++fps_count;
    if (now() > last_fps_print + 1) {
      document.title = "FPS " + fps_count;
      fps_count = 0;
      last_fps_print = now();
    };

    // Updates game state
    game = tick_game(game);

    // Creates list of voxels
    var voxels = [];
    var T = Date.now()/1000;

    // Renders the game
    map_game_objects(function(object) {
      var id = get_object_id(object);
      var hp = get_object_hp(object);
      var pos = get_object_pos(object);
      var dir = get_object_dir(object);
      var vel = get_object_vel(object);
      var size = get_object_size(object);
      var pos_x = get_x(pos);
      var pos_y = get_y(pos);
      var pos_z = get_z(pos);
      var model = croni;
      var feet = model.feet;
      var anims = model.anim.length;
      var frame = model.anim[Math.floor((T*10) % anims)];
      for (var i = 0; i < frame.length; ++i) {
        var [{x,y,z},col] = frame[i];
        var cx = pos_x;
        var cy = pos_y;
        var cz = pos_z;
        var px = cx + x;
        var py = cy + y;
        var pz = cz + z;
        //var pl = Math.sqrt((px-cx)**2+(py-cy)**2);
        //var pa = Math.atan2(py-cy,px-cx);
        //var da = X === 0 ? debug.ang : 0;
        //var px = cx + pl * Math.cos(pa+(X===0?0:T)+da) + 0.5;
        //var py = cy + pl * Math.sin(pa+(X===0?0:T)+da) + 0.5;
        var pos = (px+512)<<20 | (py+512)<<10 | (pz+512);
        var col = col | 0x000000FF;
        voxels[voxels.length] = pos;
        voxels[voxels.length] = col;
      }
    })(game);


    
    


    /*
    var models = [
      hero,
      lyn,
    ];
    models.forEach((model,X) => {
      var feet = model.feet;
      var frame = model.anim[
        Math.floor((T*10)
        % model.anim.length)];
      for (var i = 0; i < frame.length; ++i) {
        var [{x,y,z},col] = frame[i];
        var sc = 1;
        if (X === 0) {
          var cx = hero_pos.x;
          var cy = hero_pos.y;
          var cz = hero_pos.z - feet;
        } else {
          var cx = 0;
          var cy = 0;
          var cz = -feet;
        }
        var px = cx + x * sc;
        var py = cy + y * sc;
        var pz = cz + z * sc;
        var pl = Math.sqrt((px-cx)**2+(py-cy)**2);
        var pa = Math.atan2(py-cy,px-cx);
        var da = X === 0 ? debug.ang : 0;
        var px = cx + pl * Math.cos(pa+(X===0?0:T)+da) + 0.5;
        var py = cy + pl * Math.sin(pa+(X===0?0:T)+da) + 0.5;
        var pos = (px+512)<<20 | (py+512)<<10 | (pz+512);
        var col = col | 0x000000FF;
        voxels[voxels.length] = pos;
        voxels[voxels.length] = col;
      }
    });
    */

    canvas.draw({voxels});

  }, 1000 / 10);
};
