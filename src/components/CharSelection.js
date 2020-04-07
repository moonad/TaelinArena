const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const TA = require("../TaelinArena.js");

var data = require('../assets/char-info');
// const logo = require('../assets/taelinarena-icon.png');

// List of characters
// props:
// - characters: list of the names of characters available
// - on_pick_hero: function to select a hero (parent)
// - on_dismiss: function to dismiss CharSelection view (parent)
class CharSelection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var title = h("div", {style: {"font-size": "20px", "padding": "10px 0px 20px 0px"}}, "Choose your hero:");

    var view =
    h("div", {
      style: {
        "id": "char_selection",
        "width": "100%",
        "height": "100%",
        "display": "flex",
        "flex-direction": "column",
        "padding": "20px",
        "font-size": "14px",
        "background": "#202020",
        "color": "#D0D0D0",
        "font-family": "monaco, monospace"
      }
    }, [title, h(CharCell, {on_pick_hero: this.props.on_pick_hero, characters: this.props.characters})]
    )
    return view;
  }
};



class CharCell extends Component {

  constructor(props) {
    super(props);
    this.highlighted = null; // String. Name of the character on focus
  }

  char_image(hero_name){
    // console.log(logo);
    return h("img", {style: {"height": "50px","width": "50px" },
      src: '9bc30c93bb44dea5a7a83626263e287b.png', //image name on docs
      alt: hero_name + "_img"
    })
  }

  char_name(hero_name){
    return h("p", { style:{"flex": "1", "text-align": "center", "padding-top": "5px"}}, hero_name)
  }

  char_attack(attack){
    const style = {"flex": "1", "text-align": "center", "padding-top": "5px", "font-size": "10px"}
    return attack ? 
    h("p", { style:{...style, "color": "#36e33f"}}, "attack") :
    h("p", { style:{...style, "color": "#bfbe62"}}, "animation")
  }

  render_char_cell(hero_name){
    const normal = {
      "id": "char_cell",
      "height": "100px",
      "width": "100px",
      "min-width": "50px",
      "font-size": "12px",
      "color": "white",
      "cursor": "pointer",
      "justify-content": "center",
      "align-items": "center",
      "display": "flex",
      "border": '1px solid #D0D0D0',
      "background": "#202020"
    }
    const on_focus = {...normal, "background": "#b8b0a5"}
    const char_info = data.filter(char => char.name === hero_name)
    const attack_info = char_info[0] !== undefined ? (char_info[0].attack === "1" ? true : false) : false

    return h("div", {
        // style: this.highlighted === hero_name ? on_focus : normal,
        style: normal,
        onClick: () => this.props.on_pick_hero(hero_name),
        onMouseEnter: () => {this.highlighted = hero_name;},
        onMouseLeave: () => {this.highlighted = null;}
      },
      h("div", {style: {
        "display": "flex", 
        "flex-direction": "column", 
        "justify-content": "center",
        "align-items": "center"}
        }, [this.char_name(hero_name), this.char_attack(attack_info)]
      )
    )
  }

  render(){
    return h("div", {
      style: {
        "id": "char_cell_container",
        "display": "flex",
        "flex-grow": "1",
        "flex-direction": "row",
        "flex-wrap": "wrap",
        "font-family": "monaco, monospace"
      }
    }, this.props.characters.map(char_name => this.render_char_cell(char_name)))
  }
}


module.exports = CharSelection;
