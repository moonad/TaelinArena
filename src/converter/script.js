(async () => {
var conv = require("./converter");
var glob = require("glob");
var fs = require("fs");

glob("./../**/*.vox", {}, (er, file_names) => {
  file_names.forEach(async (file_name) => {
    var file = fs.readFileSync(file_name);
    var json = await conv.vox_to_json(file);
    var new_file_name = file_name.replace(".vox",".json");
    fs.writeFileSync(new_file_name, '"'+json+'"');
    console.log("Converted .vox to .json:\n"
      + "- " + file_name + "\n"
      + "- " + new_file_name + "\n");
  });
});

})();
