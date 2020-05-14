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
    var total_removed = 0;
    var total_length = 0;
    for (let i = 0; i < file_names.length; ++i) {
      var file_path = file_names[i];
      if (file_path.indexOf("__old__") === -1) {
        var file = fs.readFileSync(file_path);
        var pivot_path = file_path.split("/").slice(0,-1).join("/") + "/pivot.json";
        if (fs.existsSync(pivot_path)) {
          var ppath = fs.readFileSync(pivot_path,"utf8");
          var pivot = JSON.parse(ppath);
        } else {
          var pivot = null;
        }
        var new_path = file_path.replace(".vox",".json");
        var short_path = new_path.slice(new_path.indexOf("models"));
        var {json,removed,length} = await conv.vox_to_json(file, pivot);
        total_removed += removed;
        total_length += length;
        console.log("built \x1b[2m"+short_path+"\x1b[0m"
          +", removing \x1b[2m"+removed+"\x1b[0m"
          +" of \x1b[2m"+length+"\x1b[0m voxels"
          +" (\x1b[2m"+(removed/length*100).toFixed(2)+"%\x1b[0m)");
        fs.writeFileSync(new_path, '"'+json+'"');
        var model_name = new_path
          .replace(new RegExp(".json","g"), "")
          .slice(new_path.indexOf("models")+7);
        model_names.push(model_name);
      };
    };
    console.log("removed total of "
      + "\x1b[2m"+total_removed+"\x1b[0m from "
      + "\x1b[2m"+total_length+"\x1b[0m voxels!");

    // Updates models.js
    var model_js_path = "/../models/models.js";
    var model_js_path = path.join(__dirname, model_js_path);
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

    // Updates packs.js
    var packs_js_path = "/../models/packs.js";
    var packs_js_path = path.join(__dirname, packs_js_path);
    var packs = {};
    for (var i = 0; i < model_names.length; ++i) {
      var pack = model_names[i].split("/")[0];
      if (!packs[pack]) {
        packs[pack] = {from: i, til: i};
      }
      packs[pack].til = i+1;
    };
    var packs_text = "module.exports = "+JSON.stringify(packs,null,2);
    console.log("updated " + packs_js_path);
    fs.writeFileSync(packs_js_path, packs_text);

    const model_fm_path = (pack_num) => {
      var model_fm_path = "/../game/TA.ModelsId"+pack_num+".fm";
      return path.join(__dirname, model_fm_path);
    }
    
    var pack_num = 0;
    var pack_max = 0;

    // Updates TaelinArena.ModelsIds.fmc
    var model_fm_text = "";
    for (var i = 0; i < model_names.length; ++i){
      let name = model_names[i];
      let model_name = name.replace(new RegExp("/","g"), "_").toUpperCase();
      let fmc_code = ": F64 " + `F64.parse("${i}")\n`;
      model_fm_text += model_name + fmc_code;
      if ((i > 0) &&
         (i % 300) === 0 || (i === (model_names.length - 1))) {
        console.log("Updated " + model_fm_path(pack_num));
        fs.writeFileSync(model_fm_path(pack_num), model_fm_text);
        pack_num++;
        model_fm_text = "";
      }
    }

    // Done!
    console.log("\nAll done.");
  });

})();