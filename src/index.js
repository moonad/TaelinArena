const {useState, h, render, Hooked} = require("./hooked.js");

const useDoubleCounter = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const increment = () => {
    const setCount = isFirst ? setCount1 : setCount2
    const count = isFirst ? count1 : count2
    setCount(count + 1)
    setIsFirst(!isFirst)
  }
  return [count1, count2, increment]
}

const Counter = Hooked((self) => {
  const [count1, count2, increment] = useDoubleCounter()
  return h("div", {onClick: increment}, `[click-count: ${count1}, ${count2}]`);
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
