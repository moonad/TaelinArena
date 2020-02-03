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
      .filter((file_name) => file_name.indexOf("__old__") === -1)
      .map((file_name) => {
        return (async () => {
          var file = fs.readFileSync(file_name);
          var json = await conv.vox_to_json(file);
          var new_file_name = file_name.replace(".vox",".json");
          fs.writeFileSync(new_file_name, '"'+json+'"');
          console.log("built " + new_file_name);
          var model_name = new_file_name
            .replace(new RegExp(".json","g"), "")
            .slice(new_file_name.indexOf("models")+7);
          model_names.push(model_name);
          return 1;
        })();
      }));

    // Updates models.js
    var model_js_path = path.join(
      __dirname,
      "/../models/models.js");
    var model_js_text
      = "var parse = require(\"./parser.js\");\n"
      + "module.exports = [\n"
      + model_names.map(name => {
        var model_key = name.replace(new RegExp("/","g"), "_");
        var file_path = "./../../models/"+name+".json";
        var file_load = "parse(require(\""+file_path+"\"))";
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
