const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const TA = require("../TaelinArena.js");


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
    var title = h("div", {style: {"font-size": "20px", "padding": "20px"}}, "Choose your hero:");
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
        // "border-top": "1px solid #787777",
        "border-bottom": "1px solid #383838",
        "font-family": "monaco, monospace",
        "overflow": "scroll"
      }
    }, [title, h(CharCell, {
        on_pick_hero: this.props.on_pick_hero, 
        heroes_name: this.props.heroes_name,
        heroes_image: this.props.heroes_image,
        heroes_info: this.props.heroes_info
        })
      ]
    )
    return view;
  }
};

class CharCell extends Component {

  constructor(props) {
    super(props);
    this.highlighted = null; // String. Name of the character on focus
  }

  char_image(hero_name, image){
    const image_frame =  h("img", {style: {
      "height": "50px",
      "width": "50px",
      "outline": "2px solid rgba(255,255,255,0.2) ",
      "outline-offset": "-1px"
    },
      src: image ? image : "9bc30c93bb44dea5a7a83626263e287b.png", // TaelinArena logo
      alt: hero_name + "_img"
    })
    return h("div", {style: {
      "height": "54px",
      "width": "54px",
      "display": "flex",
      "align-items": "center",
      "justify-content": "center",
      "outline": "1px solid rgba(255,255,255,0.2)",
      // "box-shadow": " 0px 0px 15px 0px rgba(255,255,255,0.2)"
      }}, image_frame
    )
  }

  char_name(hero_name){
    return h("p", { style:{"flex": "1", "text-align": "center", "padding-top": "5px"}}, hero_name)
  }

  char_attack(attack){
    const style = {"flex": "1", "text-align": "center", "padding-top": "2px", "font-size": "10px"}
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
      // "border": '1px solid #D0D0D0',
      "background": "#202020"
    }
    const on_focus = {...normal, "background": "#2b2b2b"}
    const hero_info = this.props.heroes_info.filter(hero => hero.name === hero_name);
    const attack_info = hero_info[0] !== undefined ? (hero_info[0].attack === "1" ? true : false) : false
    const images = this.props.heroes_image;
    const hero_image = images.has(hero_name.toLowerCase()) ? 
      images.get(hero_name.toLowerCase()) : null;

    return h("div", {
        style: this.highlighted === hero_name ? on_focus : normal,
        // style: normal,
        onClick: () => this.props.on_pick_hero(hero_name),
        onMouseEnter: () => {this.highlighted = hero_name;},
        onMouseLeave: () => {this.highlighted = null;}
      },
      h("div", {style: {
        "display": "flex", 
        "flex-direction": "column", 
        "justify-content": "center",
        "align-items": "center"}
        }, [this.char_image(hero_name, hero_image), this.char_name(hero_name), this.char_attack(attack_info)]
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
        "font-family": "monaco, monospace",
        "overflow": "scroll"
      }
    }, this.props.heroes_name.map(char_name => this.render_char_cell(char_name)))
  }
}

module.exports = CharSelection;
