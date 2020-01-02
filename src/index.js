const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

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

// (nil, cons) => cons((ball) => ball((pair) => pair(100, 100), 30), (nil, cons) => cons((ball) => ball((pair) => pair(200, 100), 10), (nil, cons) => cons((ball) => ball((pair) => pair(100, 200), 20), (nil, cons) => nil)))
function get_renderables_from_fm(renderable) {
  let case_nil  = [];
  let case_cons = (head) => (tail) => {
    let case_voxel = pos => vox => ({
      ctr: "voxel",
      pos: pos(x => y => z => ({x,y,z})),
      vox: vox,
    });
    var renderable = head(case_voxel);
    return [renderable].concat(get_renderables_from_fm(tail));
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
      h("div", {style: {"font-weight": "bold"}}, "TaelinArena"),
      h("div", {}, "Esse site se tornará um MOBA <3"),
      h("div", {}, String(this.state.count)),
      //h("div", {}, String("Pos is: " + JSON.stringify(pos)))
    ]);
  }
};

// ----------

window.onload = () => {
  // Renders site using Inferno
  render(h(Counter), document.getElementById("main"));

  // Creates canvas and inserts on page
  var canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;
  canvas.style.border = "1px solid black";
  canvas.style["image-rendering"] = "pixelated";
  var context = canvas.getContext("2d");
  canvas.image_data = context.getImageData(0, 0, canvas.width, canvas.height);
  canvas.image_buf  = new ArrayBuffer(canvas.image_data.data.length);
  canvas.image_u8   = new Uint8ClampedArray(canvas.image_buf);
  canvas.image_u32  = new Uint32Array(canvas.image_buf);
  canvas.depth_u32  = new Uint32Array(canvas.image_u32.length);
  canvas.draw = () => {
    canvas.image_data.data.set(canvas.image_u8);
    context.putImageData(canvas.image_data, 0, 0);
  }
  document.body.appendChild(canvas);

  // Renders a pink screen
  //for (var j = 0; j < canvas.height; ++j) {
    //for (var i = 0; i < canvas.width; ++i) {
      //canvas.image_u32[j * 256 + i] = 0xFFAAAAFF;
    //}
  //};
  //canvas.draw();

  // Keys that are pressed
  var key = {};
  document.body.onkeyup = (e) => key[e.key] = 0;
  document.body.onkeypress = (e) => {
    game_state = apply_input_to_game_state(t=>t(e.keyCode))(game_state);
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
    game_state = tick_game_state(game_state);

    // Converts game state to renderables
    var renderables = get_renderables_from_fm(render_game_state(game_state)(now()));

    // Position of the player's object
    var hero_pos = get_object_position(0)(game_state)(x => y => z => ({x,y,z}));

    // Clears screen
    for (var i = 0; i < canvas.width * canvas.height; ++i) {
      canvas.image_u32[i] = 0x00000000;
      canvas.depth_u32[i] = 0;
    };
    //context.clearRect(0, 0, canvas.width, canvas.height);

    // Draws renderables on screen
    for (var i = 0; i < renderables.length; ++i) {
      var renderable = renderables[i];
      switch (renderable.ctr) {
        case "voxel":
          var pos_x = renderable.pos.x;
          var pos_y = renderable.pos.y;
          var pos_z = renderable.pos.z;
          var vox   = renderable.vox;
          (function go(vox) {
            let case_nil  = null;
            let case_cons = head => tail => {
              head(pos => col => pos(x => y => z => {
                var vlen = Math.sqrt(x*x + y*y);
                var vang = Math.atan2(y, x);
                x = vlen * Math.cos(vang + now());
                y = vlen * Math.sin(vang + now());

                var sx = Math.floor(pos_x + x - z / Math.sqrt(3) + canvas.width*0.5 - hero_pos.x);
                var sy = Math.floor(pos_y + y - z / Math.sqrt(3) + canvas.height*0.5 - hero_pos.y);
                var d  = canvas.depth_u32[sy * canvas.width + sx] - 65536;
                if (z > d) {
                  canvas.depth_u32[sy * canvas.width + sx] = Math.floor(z + 65536);
                  canvas.image_u32[sy * canvas.width + sx] = col;
                }
              }));
              go(tail);
            };
            return vox(case_nil)(case_cons);
          })(vox);
          break;
      };
    };

    canvas.draw();

  }, 1000 / 24);

};
