const db = require("./db.js");
const TA = require("./../TaelinArena.js");

async function game_server() {
  // Loads existing games from disk to memory
  var games = await db.get("games") || [];
  var turns = [];
  for (var gid = 0; gid < games.length; ++gid) {
    var turn_file = (await db.get_str("games.turns."+gid)) || "";
    turns[gid] = turn_file.split("\n");
    turns[gid].pop();
  }

  // Main loop: passes time on all active games
  setInterval(() => {
    for (var gid = 0; gid < games.length; ++gid) {
      add_new_turn(gid);
    }
  }, 1000 / TA.GAME_FPS);

  // Creates a new game
  function create_new_game(game) {
    var id = games.length;
    games[id] = {...game, id};
    turns[id] = [];

    // TODO: persist efficiently
    db.set("games", games);
    db.set_str("games.turns."+id, "");
  };

  // Completes a turn on given game_id
  function add_new_turn(gid) {
    var turn_count = turns[gid].length;
    var game_time = (Date.now() - games[gid].init) / 1000;
    if ( turn_count <= TA.GAME_DURATION
      && Date.now() >= games[gid].init) {
      // If there are no turns, add the first turn
      if (turn_count === 0) {
        turns[gid].push("");
      // Else, end the last turn and add a new one
      } else {
        turns[gid][turn_count-1] += "0"; // 'nil'
        turns[gid].push(""); // new one
        db.push_str("games.turns."+gid,turns[gid][turn_count-1]+"\n");
      }
    }
  };

  // Adds a input to given game_id
  function perform_input(gid, player_name, input) {
    console.log(player_name+" acting on "+gid);
    var player_id = get_player_id(player_name, games[gid]);
    var turn_count = turns[gid].length;
    if ( turn_count > 0
      && turn_count <= TA.GAME_DURATION
      && player_id !== null
      && is_valid_input(input)) {
      console.log(
        ("- game="+gid
        +", turn="+turn_count
        +", acti="+input));
      // Creates the turn constructor: (PLAYER_ID+1)|INPUT
      var turn_ctor = (player_id+1).toString(16);
      var turn_ctor = turn_ctor + input;
      turns[gid][turn_count-1] += turn_ctor;
    }
  };

  // Gets the player id on given game
  function get_player_id(name, game) {
    var players = game.players.split(",");
    for (var i = 0; i < players.length; ++i) {
      if (TA.parse_player(players[i]).name === name) {
        console.log("(" + name + " is " + i + ")");
        return i;
      }
    }
    return null;
  };

  // Validates a players object
  function is_valid_players(players) {
    // TODO
    return true;
  }

  // Validates an input code string
  function is_valid_input(code) {
    var ctr = Number(code[0]);
    if (ctr === 0 && code.length === 3) {
      return true;
    }
    if (ctr >= 1 && ctr <= 3 && code.length === 7) {
      return true;
    }
    if (ctr >= 4 && ctr <= 7) {
      return true;
    }
    return false;
  };

  // Validates a name string
  var is_valid_name = (name) => {
    return typeof name === "string"
      && /^[a-zA-Z0-9_]{1,32}$/.test(name);
  };

  // Validates an Ethereum address string
  var is_valid_address = (addr) => {
    try {
      return ethers.utils.getAddress(addr) === addr;
    } catch (e) {
      return false;
    }
  };

  function make_turn_feed_message(game, turn) {
    if (game !== TA.OFF_GAME) {
      var count = turns[game].length;

      // Gather 5 turns around the one demanded by peer
      var from = Math.min(Math.max((turn||0)-5, 0),count-1); 
      var to = Math.min((turn||0)+5, count-1);

      // Creates message with game_id, from_turn and inputs
      var msg = "";
      msg += ("00000000"+game.toString(16)).slice(-8); 
      msg += ("00000000"+from.toString(16)).slice(-8);
      for (var i = from; i < to; ++i) {
        msg += "1"+turns[game][i];
      }
      msg += "0";

      return msg;
    } else {
      return null;
    }
  }

  return {
    games,
    turns,
    create_new_game,
    add_new_turn,
    perform_input,
    get_player_id,
    is_valid_players,
    is_valid_input,
    is_valid_name,
    is_valid_address,
    make_turn_feed_message,
  }
};

module.exports = game_server;
