const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

// List of games
class GameList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var game_list = this.props.game_list;
    var col = (body, onclick) => {
      return h("td", {
        style: {
          "padding": "4px",
          "cursor": onclick ? "pointer" : null,
          "text-decoration": onclick ? "underline" : null,
        },
        onclick,
      }, body);
    };
    var rows = [];
    rows.push(h("tr", {
      style: {
        "font-weight": "bold",
        "border-bottom": "1px dotted rgba(0,0,0,0.1)",
        "background": "rgba(0,0,0,0.03)",
      }
    }, [col("Jogo"), col("Equipe L"), col("Equipe R")]));
    for (let i = game_list.length - 1; i >= 0; --i) {
      let game = game_list[i];
      let row = [];
      if (game) {
        var id = ("00000000"+game.id.toString(16)).slice(-8);
        var nm = game.name;
        row.push(col(nm, () => this.props.join(game.id)));
        row.push(col(game.teams.lft.join(", ")));
        row.push(col(game.teams.rgt.join(", ")));
      } else {
        row.push(h("td", {colspan:3}, "?"));
      }
      rows.push(h("tr", {}, row));
    }
    var table = h("table", {
      style: {
        "width": "100%",
        "font-size": "12px",
        "border-collapse": "collapse",
      }
    }, rows);

    return h("div", {
      style: {
        "position": "fixed",
        "top": "24px",
        "left": "0px",
        "width": "calc(100% - 160px)",
        "height": "calc(100% - 24px)",
        "display": "flex",
        "flex-flow": "column nowrap",
        "justify-content": "flex-start",
        "align-items": "center",
        "overflow-y": "scroll",
        "background": "rgba(255,255,255,0.2)",
      }
    }, [table]);
  }
};

module.exports = GameList;
