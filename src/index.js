const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const Main = require("./components/Main.js");
//const background_image_url = require("./wooden_bg.png").default;
document.body.background = "#202020";
//document.body.style["background"] = "url('"+background_image_url+"')";
//document.body.style["background-size"] = "200%";
//document.body.style["background-repeat"] = "no-repeat";
//document.body.style["background-size"] = "cover";

window.onload = () => {
  render(h(Main), document.getElementById("main"));
};
