// Run this script to convert all .vox to .json and to load
// them in game updating the respective json/fm files.

(async () => {
  var conv = require("./convert");
  var glob = require("glob");
  var path = require("path");
  var fs = require("fs");

  var model_names = [];

  var files = path.join(__dirname,"../../models/**/*.vox");
  glob(files, {}, async (er, file_names) => {

    // Converts all .vox to .json
    await Promise.all(file_names
      .filter((path) => path.indexOf("__old__") === -1)
      .map((path) => {
        return (async () => {
          var file = fs.readFileSync(path);
          var pivot_path
            = path.split("/").slice(0,-1).join("/")
            + "/pivot.json";
          if (fs.existsSync(pivot_path)) {
            var ppath = fs.readFileSync(pivot_path,"utf8");
            var pivot = JSON.parse(ppath);
          } else {
            var pivot = null;
          }
          var new_path = path.replace(".vox",".json");
          console.log("build " + new_path);
          var json = await conv.vox_to_json(file, pivot);
          fs.writeFileSync(new_path, '"'+json+'"');
          var model_name = new_path
            .replace(new RegExp(".json","g"), "")
            .slice(new_path.indexOf("models")+7);
          model_names.push(model_name);
          return 1;
        })();
      }));

    // Updates models.js
    var model_js_path = path.join(
      __dirname,
      "/../models/models.js");
    var model_js_text
      = "module.exports = [\n"
      + model_names.map(name => {
        var model_key = name.replace(new RegExp("/","g"), "_");
        var file_path = "./../../models/"+name+".json";
        var file_load = "()=>import(\""+file_path+"\")";
        return "  "+file_load+",";
      }).join("\n")
      + "\n];";
    console.log("updated " + model_js_path);
    fs.writeFileSync(model_js_path, model_js_text);

    // Updates TaelinArena.Models.fm
    var model_fm_path = path.join(
      __dirname,
      "/../game/TaelinArena.Models.fm");
    var model_fm_text = "enum\n| " + model_names
      .map(name => name
        .replace(new RegExp("/","g"), "_")
        .toUpperCase())
      .join("\n| ");
    console.log("updated " + model_fm_path);
    fs.writeFileSync(model_fm_path, model_fm_text);

    // Done!
    console.log("\nAll done.");
  });

})();
