const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;

// Chat
class Chat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.msgs = this.props.msgs;
    var msgs = [];
    for (var i = 0; i < this.msgs.length; ++i) {
      msgs.push(h("div", {}, this.msgs[i]));
    };
    var chat = h("div", {
      id: "chat_msgs",
      style: {
        "font-size": "12px",
        "width": "100%",
        "height": "calc(100% - 24px)",
        "padding": "4px",
        "flex-grow": "1",
        "display": "flex",
        "overflow-x": "hidden",
        "overflow-y": "scroll",
        "flex-flow": "column",
        "justify-content": "flex-start",
        "align-items": "flex-start",
      }
    }, [msgs]);
    var input = h("input", {
      id: "chat_input",
      autocomplete: "off",
      onkeydown: (e) => {
        var value = e.target.value;
        if (e.key === "Enter") {
          this.props.on_say(value);
          setTimeout(() => {
            var el0 = document.getElementById("chat_input");
            var el1 = document.getElementById("chat_msgs");
            el0.value = "";
            el1.scrollTop = el1.scrollHeight;
            e.target.blur();
          }, 5);
        }
        this.forceUpdate();
      },
      style: {
        "width": "calc(100% - 10px)",
        "outline": "none",
        "padding": "4px",
        "height": "24px",
        "margin": "5px",
        "border-radius": "4px",
        "border": "0px solid #D0D0D0",
        "background": "#303030",
        "color": "#D0D0D0",
        //"background": "#F2F2F2",
      },
    });
    return h("div", {
      style: {
        //"position": "fixed",
        "left": "0px",
        "bottom": "0px",
        "width": "100%",
        "height": "100%",
        "border-left": "1px solid rgba(0,0,0,0.1)",
        "display": "flex",
        "flex-flow": "column nowrap",
        "justify-content": "flex-end",
        //"background": "white",
        "align-items": "center",
        //"color": "white",
      }
    }, [
      chat,
      input
    ]);
  };
};

module.exports = Chat;
