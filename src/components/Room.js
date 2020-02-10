const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const TA = require("./../TaelinArena.js");

// List of games
class GameRoom extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //var game_list = this.props.game_list;
    //var col = (body, onclick) => {
      //return h("td", {
        //style: {
          //"padding": "4px",
          //"cursor": onclick ? "pointer" : null,
          //"text-decoration": onclick ? "underline" : null,
        //},
        //onclick,
      //}, body);
    //};
    //var rows = [];
    //rows.push(h("tr", {
      //style: {
        //"font-weight": "bold",
        //"border-bottom": "1px dotted rgba(0,0,0,0.1)",
        //"background": "rgba(0,0,0,0.03)",
      //}
    //}, [col("Jogo"), col("Equipe L"), col("Equipe R")]));
    //for (let i = game_list.length - 1; i >= 0; --i) {
      //let game = game_list[i];
      //let row = [];
      //if (game) {
        //var id = ("00000000"+game.id.toString(16)).slice(-8);
        //var nm = game.name;
        //row.push(col(nm, () => this.props.join(game.id)));
        //row.push(col(game.teams.lft.join(", ")));
        //row.push(col(game.teams.rgt.join(", ")));
      //} else {
        //row.push(h("td", {colspan:3}, "?"));
      //}
      //rows.push(h("tr", {}, row));
    //}
    //var table = h("table", {
      //style: {
        //"width": "100%",
        //"font-size": "12px",
        //"border-collapse": "collapse",
      //}
    //}, rows);

    function player_list(title, items) {
      return h("div", {
        style: {
          "height": "calc(100% - 16px)",
          "flex-grow": "1",
          "max-width": "220px",
          "margin": "8px",
          "font-size": "14px",
          "color": "white",
        }
      }, [
        h("div", {
          style: {
            "height": "28px",
            "padding": "6px",
            "width": "100%",
            "text-align": "center",
          }
        }, [title]),
        h("div", {
          style: {
            "width": "100%",
            "height": "calc(100% - 28px)",
            "padding": "6px",
            "border-radius": "8px",
            "background": "#101619",
          }
        }, items)
      ]);
    }

    if (this.props.players) {
      var players = this.props.players
        .split(",")
        .map(TA.parse_player);
    } else {
      var players = [];
    }

    var red_list = players
      .filter((player) => player.team === "red")
      .map((player) => h("div", {},
        player.name+" !"+player.hero));

    var spec_list = players
      .filter((player) => player.team === "spec")
      .map((player) => h("div", {},
        player.name+" !"+player.hero));

    var blue_list = players
      .filter((player) => player.team === "blue")
      .map((player) => h("div", {},
        player.name+" !"+player.hero));

    return h("div", {
      style: {
        "position": "fixed",
        "top": "24px",
        "left": "0px",
        "width": "calc(100%)",
        "height": "calc(100% - 24px - 160px)",
        "display": "flex",
        "flex-flow": "row nowrap",
        "justify-content": "center",
        "align-items": "center",
        //"background": "#142342",
      }
    }, [
      player_list("Red", red_list),
      player_list("Spectators", spec_list),
      player_list("Blue", blue_list),
    ]);
  }
};

module.exports = GameRoom;
