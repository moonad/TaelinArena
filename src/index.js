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
const model0 = load_model("ferumbras");
const model1 = load_model("wizard");
const model2 = load_model("wizard_of_legends");
const model3 = load_model("fantasy");
const model4 = load_model("cylinder");
//const model3 = load_model("xtest");

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
      onClick: () => {
        this.setState({count: this.state.count + 1});
      }
    }, [
      h("div", {
          style: {"font-weight": "bold"}
        },
        "TaelinArena #" + String(this.state.count)),
      h("div", {}, "Esse site se tornará um MOBA <3"),
    ]);
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
    //console.log(e.keyCode);
  };

  // FPS metering
  var last_fps_print = now();
  var fps_count = 0;

  // Camera
  var cam_pos = {x: 0, y: 0, z: 0};

  // Initial state of the game
  var game_state = demo_game_state;

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

    var W   = canvas.width;
    var H   = canvas.height;
    var S3  = Math.sqrt(3);
    var Q3  = 1/S3;
    var T   = Date.now()/1000;
    var eps = 1/65536;

    // Creates list of voxels
    var voxels = [];
    //for (var x = -16; x < 16; ++x) {
      //for (var y = -16; y < -14; ++y) {
        //for (var z = -512; z < -512+32; ++z) {
          //var pl = Math.sqrt(x*x+y*y);
          //var pa = Math.atan2(y,x);
          //var px = pl * Math.cos(pa + T);
          //var py = pl * Math.sin(pa + T);
          //var pz = z;
          //var pos = (px+512)<<20 | (py+512)<<10 | (pz+512);
          //var col = 0xFFAAAAFF;
          //voxels[voxels.length] = pos;
          //voxels[voxels.length] = col;
        //}
      //}
    //}

    //var T = Math.PI * 0.25;
    [model0,model1,model2,model3,model4].forEach((model,X) => {
      for (var i = 0; i < model.length; ++i) {
        var T = Math.PI*0.25;
        var [{x,y,z},col] = model[i];
        var sc = 1;
        var cx = (X - 2.0) * 48;
        var cy = 0;
        var px = cx + x * sc;
        var py = cy + y * sc;
        var pz = (z + 66) * sc;

        var pl = Math.sqrt((px-cx)**2+(py-cy)**2);
        var pa = Math.atan2(py-cy,px-cx);
        var px = cx + pl * Math.cos(pa+T) + 0.5;
        var py = cy + pl * Math.sin(pa+T) + 0.5;

        var pz = -512 + pz;
        var pos = (px+512)<<20 | (py+512)<<10 | (pz+512);
        //console.log(px,py,pz,pos);
        var col = col + 0xFF000000;
        voxels[voxels.length] = pos;
        voxels[voxels.length] = col;
      }
    });
    
    //console.log(voxels.length);

    canvas.draw(voxels);

  }, 1000 / 24);
};
