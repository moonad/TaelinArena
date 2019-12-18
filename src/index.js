const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const fma = require("./FullModArena.js");

console.log(fma(1000));

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0};
  }
  componentDidMount() {
  }
  render() {
    return h("div",
      {
        onClick: () => {
          this.setState({count: this.state.count + 1});
        }
      },
      [
        h("div", {}, "Full Mod Arena!"),
        h("span", {}, "Clicks: "),
        h("span", {}, String(this.state.count))
      ]);
  }
};

window.onload = () => {
  render(h(Counter), document.getElementById("main"));
};
