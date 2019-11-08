const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

var stateOf = {};
const useState = (self, state) => {
  console.log(self);
  const setState = newState => {
    stateOf[self._id] = newState;
    self.forceUpdate();
  };
  if (!self._id) {
    self._id = "x" + Math.floor(Math.random() * (2 ** 32));
    stateOf[self._id] = state;
  }
  return [stateOf[self._id], setState];
};

function Hooked(render) {
  class Self extends Component {
    constructor(props) {
      super(props)
    }
    componentDidMount() {
    }
    render() {
      return render(this);
    }
  };
  return Self;
};

module.exports = {useState, Component, Hooked, h, render};
