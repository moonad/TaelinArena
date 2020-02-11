const TA = require("./../TaelinArena.js");

function game() {
  var self = {};
  self.gid = null;
  self.turns = null;
  self.state = null;

  function init(gid, hero_list) {
    var hero_list = hero_list.map(name => TA.hero_id[name]);
    var hero_list = hero_list.reverse();
    var hero_list = hero_list.reduce((a,b)=>n=>c=>c(b)(a),n=>c=>n);
    self.gid = gid;
    self.state = TA.new_game(hero_list);
    self.turns = [];
  }

  function turn() {
    if (self.state) {
      self.state = TA.exec_turn(self.state);
    }
  }

  function exec(input) {
    self.state = TA.exec_command(input, self.state);
  }

  function stop() {
    self.gid = null;
    self.turns = null;
    self.state = null;
  }

  // Given a string with turn data from the internet, parse
  // it and add new information to turn list and game state
  function absorb_turn_info(str) {
    if (self.state && self.turns) {
      var game = parseInt(str.slice(1,9), 16);
      var from = parseInt(str.slice(9,17), 16);
      var last = self.turns.length;
      var new_turns = TA.parse_turns(str.slice(17))[1];
      if (from <= last) {
        for (var i = last-from; i<new_turns.length; ++i) {
          self.turns[i+from] = new_turns[i];
          for (var j = 0; j < new_turns[i].length; ++j) {
            self.state = TA.exec_command(new_turns[i][j], self.state);
          }
          self.state = TA.exec_turn(self.state);
        }
      }
    }
  }

  self.init = init;
  self.exec = exec;
  self.turn = turn;
  self.stop = stop;
  self.absorb_turn_info = absorb_turn_info;

  return self;
};

module.exports = game;
