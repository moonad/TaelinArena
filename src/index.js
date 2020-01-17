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
  demo_game_state,
  tick_game_state,
  render_game_state,
  apply_input_to_game_state,
  get_object_position,
} = require("./TaelinArena.fm");

var now = (() => {
  var init_time = Date.now()/1000;
  return () => Date.now()/1000 - init_time;
})();

function get_renderables_from_fm(renderable) {
  let case_nil  = [];
  let case_cons = (head) => (tail) => {
    let case_voxel = pos => vox => ({
      ctr: "voxel",
      pos: pos(x => y => z => ({x,y,z})),
      vox: vox,
    });
    var renderable = head(case_voxel);
    return [renderable]
      .concat(get_renderables_from_fm(tail));
  };
  return renderable(case_nil)(case_cons);
};

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
  document.body.onkeyup = (e) => key[e.key] = 0;
  document.body.onkeypress = (e) => {
    game_state = apply_input_to_game_state
      (t=>t(e.keyCode))
      (game_state);
    key[e.key] = 1;
  };

  // FPS metering
  var last_fps_print = now();
  var fps_count = 0;

  // Initial state of the game
  var game_state = demo_game_state;
  var debug = {pos: {x:0,y:0,z:0}, vel: {x:0,y:0,z:0}, ang: 0};

  //Main loop of the game
  setInterval(function main_loop() {
    // Updates the FPS counter
    ++fps_count;
    if (now() > last_fps_print + 1) {
      document.title = "FPS " + fps_count;
      fps_count = 0;
      last_fps_print = now();
    };

    // Updates game state
    game_state = tick_game_state(game_state);

    // Converts game state to renderables
    var renderables =
      get_renderables_from_fm(
        render_game_state(game_state)(now()));

    // Position of the player's object
    var hero_pos =
      get_object_position
        (0)
        (game_state)(x => y => z => ({x,y,z}));

    // Debug
    if (key[" "] && debug.vel.z === 0) {
      debug.vel.z = 8;
    }
    debug.vel.x = ((key.d||0) - (key.a||0))*8;
    debug.vel.y = ((key.w||0) - (key.s||0))*8;
    debug.vel.z = debug.vel.z - 2;
    debug.pos.x += debug.vel.x;
    debug.pos.y += debug.vel.y;
    debug.pos.z += debug.vel.z;
    if (debug.vel.x !== 0 || debug.vel.y !== 0) {
      debug.ang = Math.atan2(debug.vel.y,debug.vel.x) + Math.PI*0.5;
    }
    if (debug.pos.z <= 0) {
      debug.pos.z = 0;
      debug.vel.z = 0;
    }

    // Creates list of voxels
    var voxels = [];
    var T = Date.now()/1000;

    var models = [
      hero,
      lyn,
    ];
    models.forEach((model,X) => {
      var feet = model.feet;
      var frame = model.anim[Math.floor((T*10) % model.anim.length)];
      for (var i = 0; i < frame.length; ++i) {
        var [{x,y,z},col] = frame[i];
        var sc = 1;
        if (X === 0) {
          var cx = debug.pos.x;
          var cy = debug.pos.y;
          var cz = debug.pos.z - feet;
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

    canvas.draw({voxels});

  }, 1000 / 10);
};
