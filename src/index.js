const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

const taelin = require("./fm/TaelinArena.fm");
const [
  demo_game_state, // GameState
  tick_game_state, // (gs : GameState) -> GameState
  render_game_state, // (gs : GameState) -> Renderables
  apply_input_to_game_state, // (ui : UserInput, gs : GameState) -> GameState)
] = taelin(x => p => p(y => p => p(z => w => ([x,y,z,w]))));

// (nil, cons) => cons((ball) => ball((pair) => pair(100, 100), 30), (nil, cons) => cons((ball) => ball((pair) => pair(200, 100), 10), (nil, cons) => cons((ball) => ball((pair) => pair(100, 200), 20), (nil, cons) => nil)))
function get_renderables_from_fm(renderable) {
  let case_nil  = [];
  let case_cons = (head) => (tail) => {
    let case_ball = pos => rad => ({
      ctr: "ball",
      pos: pos(x => y => ({x,y})),
      rad: rad
    });
    var renderable = head(case_ball);
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

  // Renders the canvas
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  canvas.width = 256;
  canvas.height = 256;
  canvas.style.border = "1px solid black";
  document.body.appendChild(canvas);

  // Keys that are pressed
  var key = {};
  document.body.onkeyup = (e) => key[e.key] = 0;
  document.body.onkeypress = (e) => {
    game_state = apply_input_to_game_state(t=>t(e.keyCode))(game_state);
    key[e.key] = 1;
    //console.log(e.keyCode);
  };

  // Initial state of the game
  var dir = {x: 0, y: 0}; // player dir
  var pos = {x: 128, y: 128}; // player pos
  var game_state = demo_game_state;

  // Main loop of the game
  setInterval(function main_loop() {
    // Updates player position
    dir.x = Number(key.d||0) - Number(key.a||0);
    dir.y = Number(key.s||0) - Number(key.w||0);
    pos.x = pos.x + dir.x;
    pos.y = pos.y + dir.y;

    // Renders player
    context.clearRect(0, 0, 256, 256);
    context.beginPath();
    context.arc(pos.x, pos.y, 4, 0, 2 * Math.PI);
    context.stroke();

    // Updates game state
    game_state = tick_game_state(game_state);

    // Converts game state to renderables
    var renderables = get_renderables_from_fm(render_game_state(game_state));

    // Draws renderables on screen
    for (var i = 0; i < renderables.length; ++i) {
      var renderable = renderables[i];
      switch (renderable.ctr) {
        case "ball":
          var ball_x = renderable.pos.x;
          var ball_y = renderable.pos.y;
          var rad    = renderable.rad;
          context.beginPath();
          context.arc(ball_x, ball_y, rad, 0, 2 * Math.PI);
          context.stroke();
        break;
      };
    }

  }, 1000 / 24);

};