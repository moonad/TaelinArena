const {useState, h, render, Hooked} = require("./hooked.js");

const Counter = Hooked((self) => {
  var [count0, setCount0] = useState(0);
  var [count1, setCount1] = useState("I");
  return h("div", { 
    onClick: () => {
      setCount0(count0 + 1);
      setCount1(count1 + "I");
    },
  }, "[click-counts: " + count0 + ", " + count1 + "]");
});

window.onload = () => {
  render(
    h("div", {}, [
      h(Counter),
      h(Counter),
      h(Counter)
    ]),
    document.getElementById("main"));
};
