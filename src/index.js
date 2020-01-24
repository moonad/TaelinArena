const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const Main = require("./components/Main.js");

window.onload = () => {
  render(h(Main), document.getElementById("main"));
};
