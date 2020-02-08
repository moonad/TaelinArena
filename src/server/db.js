// Simple fs database
var fs = require("fs").promises;
var path = require("path");

var get_str = async (key) => {
  try {
    var file_path = path.join("db", key).toLowerCase();
    return await fs.readFile(file_path, "utf8");
  } catch (e) {
    return null;
  }
};

var set_str = async (key, str) => {
  try {
    var file_path = path.join("db",key).toLowerCase();
    await fs.writeFile(file_path, str);
    return true;
  } catch (e) {
    return null;
  }
};

var push_str = async (key, str) => {
  try {
    var file_path = path.join("db",key).toLowerCase();
    await fs.appendFile(file_path, str);
  } catch (e) {
    return null;
  }
};

var get = async (key) => {
  return JSON.parse(await get_str(key));
};

var set = async (key, val) => {
  return set_str(key, JSON.stringify(val));
};

module.exports = {
  get_str,
  set_str,
  push_str,
  get,
  set,
}
