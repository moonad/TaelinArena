function set_precise_interval(fn, delay) {
  var init = Date.now();
  var calls = 0;
  return setInterval(() => {
    var delta = Date.now() - init;
    while (calls <= delta / delay) { 
      fn();
      ++calls;
    };
  }, delay/2);
};

module.exports = {set_precise_interval};
