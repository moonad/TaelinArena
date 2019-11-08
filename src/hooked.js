const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

var usingId = null;
var usingEl = null;
var idCount = 0;
var stateOf = {};
const useState = (state) => {
  var localId = usingId;
  var localEl = usingEl;

  const setState = newState => {
    stateOf[localId] = newState;
    if (localEl) {
      localEl.forceUpdate();
      console.log("updated");
    }
  };

  if (stateOf[localId] === undefined) {
    stateOf[localId] = state;
  }

  usingId++;
  return [stateOf[localId], setState];
};

function Hooked(render) {
  class Self extends Component {
    constructor(props) {
      super(props)
      this.usingId = idCount;
      usingEl = null;
      usingId = idCount;
      console.log("new el", usingId);
      render();
      idCount = usingId;
      usingId = null;
    }
    componentDidMount() {
    }
    render() {
      usingEl = this;
      usingId = this.usingId;
      var rendered = render(this);
      usingEl = null;
      usingId = null;
      return rendered;
    }
  };
  return Self;
};

module.exports = {useState, Component, Hooked, h, render};
