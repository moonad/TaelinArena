const file = "FullModArena#ba7P";

const fm = require("formality-lang");
const fs = require("fs");

(async () => {
  const {defs} = await fm.parse("import " + file, {});
  var js = fm.js.compile(fm.core.Ref(file+"/main"), defs);
  var js = "module.exports = " + js;
  fs.writeFileSync("./FullModArena.js", js);
  console.log("Generated FullModArena.js\n");
})();



