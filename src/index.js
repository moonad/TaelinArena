const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const fma = require("./FullModArena.js");

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
        h("div", {}, "FullModArena"),
        h("div", {}, "~~ this will become a MOBA ~~"),
        h("div", {}, String(this.state.count)),
        h("div", {}, "<3"),
      ]);
  }
};

window.onload = () => {
  render(h(Counter), document.getElementById("main"));
};
