const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const TA = require("../TaelinArena.js");

// List of characters
class CharSelection extends Component {
  constructor(props) {
    super(props);
  }

  render_char_cell(hero_name){
    return h("div", {
      style: {
        "height": "50px",
        "max-width": "50px",
        "font-size": "14px",
        "color": "white",
        "cursor": "pointer"
      },
      onClick: () => this.props.on_pick_hero(hero_name)
    }, hero_name)
  }

  render_char(){
    return this.props.characters.map(char_name => this.render_char_cell(char_name))
  }

  render() {

    var title = h("div", {style: {"font-size": "20px"}}, "Choose your hero:");

    var view =
    h("div", {
      style: {
        "desc": "[CharSelection]",
        "width": "100%",
        "height": "100%",
        "flex-grow": "1",
        "flex-direction": "row",
        "flex-wrap": "wrap",
        "max-width": "500px",
        "margin": "20px",
        "font-size": "14px",
        "background": "#202020",
        "color": "#D0D0D0",
      }
    }, this.render_char()
    )
    return view;
  }
};

module.exports = CharSelection;
