const file = "TaelinArena";
const fm = require("formality-lang");
const fs = require("fs");
(async () => {
  const with_local_files = require("formality-lang/cjs/fs-local.js");
  const loader = with_local_files(fm.loader.load_file);
  //console.log("->", 
  const {defs} = await fm.parse(fs.readFileSync("./"+file+".fm", "utf8"), {loader, file});
  var js = fm.js.compile(fm.core.Ref(file+"/main"), defs);
  var js = "module.exports = " + js;
  fs.writeFileSync("./"+file+".js", js);
  console.log("Compiled "+file+".fm to "+file+".js\n");
})();
