var fs = require('fs');
// const path = require("path");
// const data = fs.readFileSync('char-info.json', 'utf8');
// const obj = JSON.parse(data);

// const getCharacters = async () => {
//   return data;
// }

function getImage(char_name) {
  
  if(fs.existsSync("taelinarena-icon.png")){
    return "taelinarena-icon.png"
  } else {
    return null;
  }
};

function getData() {
  var file = fs.readFileSync("char-info.json");
  console.log("Char info");
  console.log(file);
  return JSON.parse(file)
}

module.exports = {getData, getImage}

