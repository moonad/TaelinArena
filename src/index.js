const {useState, h, render, Hooked} = require("./hooked.js");

const Counter = Hooked((self) => {
  var [count, setCount] = useState(self, 0);
  return h("div", { 
    onClick: () => setCount(count + 1)
  }, "[click-count: " + count + "]");
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
