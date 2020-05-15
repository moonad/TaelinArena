(async () => {
  var glob = require("glob");
  var path = require("path");
  var fm = require("formality-core");
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
        var file_code = fs.readFileSync(file, "utf8");
        try {
            var file_defs = parse(file_code, 0, file);
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
      var show_name = name;
      try {
        // var type_typ = fmc.core.typecheck(defs[name].type, fmc.core.Typ(), defs, fmc.lang.stringify);
        // var term_typ = fmc.core.typecheck(defs[name].term, defs[name].type, defs, fmc.lang.stringify);
        var {term, type} = check(defs[name].term, defs[name].type, defs, show);
        info.push({"name": show_name, "type": show(defs[name].type)});
      } catch (err) {
        if (typeof err === "function") err = err();
        // error("file_info: try block");
        // console.log(show_name + " : " + "\x1b[31merror\x1b[0m");
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
    
    var exports_TA_path = "Exports.TA.fm";
    var exports_TA_path = path.join(__dirname, exports_TA_path);
    if (info) {
      const characters = info.filter(entry => {
        if (entry.name.startsWith("TA.Thing") && entry.name.endsWith("_fun")){
          return entry;
        }
      });
      // 22 Expors.add entries
      var exports_TA_text = 
      `Exports.TA: Exports
  ( Exports.add<<A: Type> -> List(A)>(List.nil)
  | Exports.add<<A: Type> -> (head: A) -> (tail: List(A)) -> List(A)>(List.cons)
  | Exports.add<(F64.V3 -> F64.V3 -> List(F64.V3) -> List(F64.Segment))>(F64.V3.polygon_to_segments)
  | Exports.add<F64.V3 -> F64.V3 -> F64.V3 -> F64.V3>(F64.V3.look_at)
  | Exports.add<TA.Game.PlayerId -> TA.Game.Game -> F64.V3 >(TA.Game.get_position_by_pid)
  | Exports.add<(TA.Thing -> TA.Thing) -> TA.Game.Game -> TA.Game.Game>(TA.Game.map_stage)
  | Exports.add<TA.Game.PlayerId -> TA.Game.Input -> TA.Game.Command>(TA.Game.Command.new)
  | Exports.add<F64.V3 -> TA.Game.Input>(TA.Game.Input.sdir)
  | Exports.add<F64.V3 -> TA.Game.Input>(TA.Game.Input.key0)
  | Exports.add<F64.V3 -> TA.Game.Input>(TA.Game.Input.key1)
  | Exports.add<F64.V3 -> TA.Game.Input>(TA.Game.Input.key2)
  | Exports.add<F64.V3 -> TA.Game.Input>(TA.Game.Input.key3)
  | Exports.add<F64.V3 -> TA.Game.Input>(TA.Game.Input.key4)
  | Exports.add<F64.V3 -> TA.Game.Input>(TA.Game.Input.key5)
  | Exports.add<TA.Game.Command -> TA.Game.Game -> TA.Game.Game>(TA.exec_command)
  | Exports.add<TA.Game.TxFunction -> TA.Game.PlayerId -> TA.Game.ModelId -> TA.Game.ActionId -> TA.Game.SideId -> Map(F64) -> String -> List(TA.Game.Light) -> F64 -> F64.V3 -> F64 -> F64 -> F64.V3 -> F64.V3 -> F64.V3 -> F64.V3 -> TA.Game.Hitbox -> F64 -> F64 -> F64 -> F64.V3 -> List(TA.Game.Buff) -> List(TA.Thing) -> List(TA.Game.Hit) -> Bool -> Bool -> TA.Thing>(TA.Thing.new)
  | Exports.add<(thi: TA.Thing) -> (new_fun: TA.Game.TxFunction) -> TA.Thing>(TA.Thing.set_fun)
  | Exports.add<(thi: TA.Thing) -> (new_sid: TA.Game.SideId) -> TA.Thing>(TA.Thing.set_sid )
  | Exports.add<(thi: TA.Thing) -> (new_pid: TA.Game.PlayerId) -> TA.Thing>(TA.Thing.set_pid)
  | Exports.add<(thi: TA.Thing) -> (new_pos: F64.V3) -> TA.Thing>(TA.Thing.set_pos)
  | Exports.add<(thi: TA.Thing) -> (new_nam: String) -> TA.Thing>(TA.Thing.set_nam)
  | Exports.add<List(TA.Thing) -> TA.Game.Game>(TA.Game.Game.new)
  | Exports.add<TA.Game.Game -> TA.Game.Game>(TA.exec_turn)
  | Exports.add<TA.Game.PlayerId -> TA.Game.Game -> F64.V3>(TA.Game.get_position_by_pid)
      `
      for(var i = 0; i < characters.length; ++i) {
        const exports_code = (i === 0) ? "\n  | Exports.add" : "  | Exports.add";
        const name = characters[i].name;
        const type   = characters[i].type;
        exports_TA_text += exports_code +"<"+type+">("+name+")\n";
      }
      exports_TA_text += "  | Exports.new";
      for (var i = 0; i < (characters.length + 24); ++i) {
        exports_TA_text += i%80 === 0 ? "\n  ;" : ";";
      }
      exports_TA_text += ")";
      // console.log("Exports: ");
      // console.log(exports_TA_text);
      fs.writeFileSync(exports_TA_path, exports_TA_text);
    }
    
    console.log("\nAll done. File "+exports_TA_path+" created.");
  });

  function _fm_(main = "main", dir, ext, parse = fm.lang.parse, show = fm.lang.stringify, check = fm.synt.typesynth, norm = fm.synt.normalize) {
    var exit_code = main === "--github" ? 1 : 0;
    var {defs, files} = load(dir, ext, parse, exit_code);
    var synt = {};
    //var hols = {};
  
    // Normalizes and type-checks all terms
    console.log("\033[4m\x1b[1mType-checking:\x1b[0m");
    var errors = [];
    var max_len = 0;
    for (var name in defs) {
      max_len = Math.max(name.length, max_len);
    };
    for (var name in defs) {
      var show_name = name;
      while (show_name.length < max_len) {
        show_name = show_name + " ";
      }
      try {
        var {term,type} = check(defs[name].term, defs[name].type, defs, show);
        console.log(show_name + " : " + show(defs[name].type));
        synt[name] = {term, type};
      } catch (err) {
        if (typeof err === "function") err = err();
        console.log(show_name + " : " + "\x1b[31merror\x1b[0m");
        errors.push([name, err]);
      }
    };
    console.log("");
  
    // If there are errors, prints them
    if (errors.length > 0) {
      console.log("\033[4m\x1b[1mFound " + errors.length + " type error(s):\x1b[0m");
      for (var i = errors.length - 1; i >= 0; --i) {
        var err_msg = fm.lang.stringify_err(errors[i][1], files[errors[i][0]]);
        console.log("\n\x1b[1mInside \x1b[4m"+errors[i][0]+"\x1b[0m\x1b[1m:\x1b[0m");
        console.log(err_msg);
      };
    } else {
      console.log("\033[4m\x1b[1mAll terms check.\x1b[0m");
    };
  
  };

})();