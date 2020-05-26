(async () => {
  var glob = require("glob");
  var path = require("path");
  var fm = require("formality-lang");
  var fs = require("fs");

  var file_names = [];
  var files = path.join(__dirname,"*.fm");

  const term_info = { name: "", type: ""}

  function load(dir = ".", ext = ".fm", parse = fm.lang.parse) {
    var files = fs.readdirSync(dir).filter(file => file.slice(-ext.length) === ext);
    if (files.length === 0) {
      error("No local " + ext + " file found.");
    } else {
      var result = {files: {}, defs: {}};
      for (var file of files) {
        var file_code = fs.readFileSync(path.join(dir, file), "utf8");
        try {
          var parsed = parse(file_code,0);
          var file_defs = parsed.defs;
        } catch (err) {
          error("\n\x1b[1mInside '\x1b[4m"+file+"\x1b[0m'"
               + "\x1b[1m:\x1b[0m\n" + err);
        }
        for (var name in file_defs) {
          if (result.defs[name]) {
            error("Redefinition of '" + name + "' in '" + file + "'.");
          } else {
            result.defs[name] = file_defs[name];
            result.files[name] = file_code;
          }
        }
      }
    }
    return result;
  };

  const files_info = () => {
    var {defs, files} = load(".", ".fm", fm.lang.parse);
    const show = fm.lang.stringify;
    const check = fm.synt.typesynth;
    const norm = fm.synt.normalize;
    info = [term_info];
    // Normalizes and type-checks all terms
    var errors = [];
    for (var name in defs) {
      try {
        var {term, type} = check(defs[name].term, defs[name].type, defs, show);
        // info.push({"name": show_name, "type": show(defs[name].type)});
        info.push({"name": name, "type": show(defs[name].type)});
      } catch (err) {
        console.log(name + " : " + "\x1b[31merror\x1b[0m");
        errors.push([name, err]);
      }
    };
    console.log("");
    
    if (errors.length > 0) {
      console.log("\033[4m\x1b[1mFound " + errors.length + " type error(s):\x1b[0m");
      for (var i = errors.length - 1; i >= 0; --i) {
        var err_msg = fm.lang.stringify_err(errors[i][1], files[errors[i][0]]);
        console.log("\n\x1b[1mInside \x1b[4m" + errors[i][0]
          + "\x1b[0m\x1b[1m:\x1b[0m\n" + err_msg);
      };
      error("");
    } else {
      console.log("\033[4m\x1b[1mAll terms check.\x1b[0m");
      return (errors.length > 0) ? null : info;
    };
  };

  const error = (msg) => {
    console.log("[Export error] "+msg);
  };

  glob(files, {}, async (er, file_names) => {
    var info = files_info();

    var exports_TA_path = "Arelin.Exports.fm";
    var exports_TA_path = path.join(__dirname, exports_TA_path);
    if (info) {
      const game_files = info.filter(entry => {
        if (entry.name.startsWith("Arelin.")){
          return entry;
        }
      });

      // Basic functions used
      var exports_TA_text = "Arelin.Exports: Exports"
      exports_TA_text += "\n  ( ";
      for(var i = 0; i < game_files.length; ++i) {
        const exports_code = (i === 0) ? "Exports.add" : "  | Exports.add";
        const name = game_files[i].name;
        const type   = game_files[i].type;
        exports_TA_text += exports_code +"<"+type+">("+name+")\n";
      }
      exports_TA_text += "  | Exports.new";
      for (var i = 0; i < (game_files.length); ++i) {
        exports_TA_text += i%75 === 0 ? "\n  ;" : ";";
      }
      exports_TA_text += ")";
      // console.log("Exports: ");
      // console.log(exports_TA_text);
      fs.writeFileSync(exports_TA_path, exports_TA_text);
    }
    
    if (info) {
      console.log("\nAll done. File "+exports_TA_path+" updated.");
    }

  });

})();