const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

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
        h("span", {}, "Clicks: "),
        h("span", {}, String(this.state.count))
      ]);
  }
};

window.onload = () => {
  render(h(Counter), document.getElementById("main"));
};
