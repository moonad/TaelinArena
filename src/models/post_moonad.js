(async () => {
  var glob = require("glob");
  var path = require("path");
  var fs = require("fs");
  // var moonad = require("moonad")({});
  var moonad = "";

  var character = "agent_prodder";
  const models_path = path.join(__dirname, "../../models");
  var files = path.join(__dirname, `../../models/**/*.json`);

  var model_names = [];
  const user_name = "mymai";
  const filtered_heroes = [
    "darth_vader",
    "deku",
    "goron",
    "zora",
    "link",
    "dorime",
    "dr_strange",
    "eric_jacquin",
    "finn",
    "gastly",
    "gengar",
    "haunter",
    "iron_man",
    "tony_stark",
    "jinx",
    "kakashi",
    "king_dedede",
    "lina_inverse",
    "pikachu",
    "pichu",
    "raichu",
    "poste",
    "ray",
    "scorpion",
    "sr_madruga",
    "tophoro",
    "xululu_child",
    "zagatur"
  ]

  const filtered_heroes_post = {
    "darth_vader": "00000000",
    "deku": "00000000",
    "goron": "00000000",
    "zora": "00000000",
    "link": "00000000",
    "dorime": "00000000",
    "dr_strange": "00000000",
    "eric_jacquin": "00000000",
    "finn": "00000000",
    "gastly": "00000000",
    "gengar": "00000000",
    "haunter": "00000000",
    "iron_man": "00000000",
    "tony_stark": "00000000",
    "jinx": "00000000",
    "kakashi": "00000000",
    "king_dedede": "00000000",
    "lina_inverse": "00000000",
    "pikachu": "00000000",
    "pichu": "00000000",
    "raichu": "00000000",
    "poste": "00000000",
    "ray": "00000000",
    "scorpion": "00000000",
    "sr_madruga": "00000000",
    "tophoro": "00000000",
    "xululu_child": "00000000",
    "zagatur": "00000000",
  }

  const get_post_content = (user_name, term_name, content) => {
    return user_name+"."+term_name+": String\n  "+"aaa"; // TODO: change to content
  }

  const generate_post = (user_name, cite, term_name, file_content) => {
    var content = get_post_content(user_name, term_name, file_content);
    console.log("\n\nGenerate post: \n", content);
    // moonad.post({
    //   cite: cite,
    //   head: term_name,
    //   body: content
    // })
  }

  const generate_char_post = (name) => {
    // await moonad.
    // TODO: Add artist info on the content
    moonad.post({

    })
  }

  const get_character_name = (path) => {
    var skill_aux = path.split("/").length;
    var character = path.split("/")[skill_aux - 3];
    return character;
  }

  glob(files, {}, async (er, file_names) => {
    // console.log("glob, file name: ", file_names);
    for (let i = 3000; i < 5000; ++i) { // i < file_names.length
    
      var file_path = file_names[i];
      // console.log("for: ", file_path);

      if (file_path.indexOf("__old__") === -1) {
        var file = fs.readFileSync(file_path);
        // console.log("File name: ", file_names);
      
        var short_path = file_path.slice(file_path.indexOf("models"));

        var cite = filtered_heroes_post[get_character_name(short_path)]
        if (cite){
          var model_name = file_path
            .replace(new RegExp(".json","g"), "")
            .slice(file_path.indexOf("models")+7)
            .toUpperCase()
            .replace("/", "_"); // TODO: not working for numbers
          model_names.push(model_name);

          var post = generate_post(user_name, cite, model_name, file);

        }
      
        
      
      }
    }

  })


})();
