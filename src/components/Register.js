const {Component, render} = require("inferno");
const h = require("inferno-hyperscript").h;
const ethers = require("ethers");
const request = require("xhr-request-promise");
const post = (func, body) => {
  return request("/"+func, {method:"POST",body,json:true});
};

class Register extends Component {
  constructor(props) {
    super(props)
    this.phase = "enter_name";
    this.input = "";
    this.on_done = props.on_done;
    this.wlet = ethers.Wallet.createRandom();
    this.name = "";
  }

  render() {
    
    const modal = (body) => {
      return h("div", {
        style: {
          "position": "fixed",
          "width": "100%",
          "height": "100%",
          "display": "flex",
          "flex-flow": "column nowrap",
          "justify-content": "center",
          "align-items": "center",
          "font-family": "monaco, monospace",
          "background": "#4070D0",
          "color": "white",
        }
      }, body);
    };

    const title = (body) => {
      return h("div", {
        style: {
          "margin": "4px"
        }
      }, [body]);
    };

    const button = (body, onClick) => {
      return h("div", {
        onClick,
        style: {
          "margin": "4px",
          "width": "128px",
          "cursor": "pointer",
          "border": "1px solid #204090",
          "padding": "3px",
          "text-align": "center",
          "background": "rgba(255,255,255,0.25)"
        }}, [
          body
        ]);
    };

    const input = (field, next) => {
      return h("input", {
        style: {
          "border": "1px solid #204090",
          "outline": "none",
          "height": "24px",
          "font-size": "16px",
          "padding": "2px",
        },
        autoFocus: 1,
        onkeyup: (e) => {
          this[field] = e.target.value;
          if (e.key === "Enter") {
            this.phase = next;
            this.forceUpdate();
          };
        }});
    };

    const ask = (question, infield, buttons) => {
      var children = [title(question)];
      if (infield) {
        children.push(input(infield, buttons[0][1]));
      };
      for (let i = 0; i < buttons.length; ++i) {
        children.push(button(buttons[i][0], () => {
          this.phase = buttons[i][1];
          this.forceUpdate();
        }));
      };
      return modal(children);
    };

    switch (this.phase) {
      case "enter_name":
        return ask("Escolha um nick:", "name", [
          ["Pronto", "got_name"]]);
      case "got_name":
        if (!/^[a-zA-Z0-9_]{1,32}$/.test(this.name)) {
          return ask([
            h("div",{},"Nome inválido."),
            h("div",{},"Use letras, números e underscore.")],
            null,
            [["Ok.", "enter_name"]]);
        }
        var body = h("div", {}, [
          h("div", {}, "Seja bem-vindo, " + this.name + "!"),
          h("div", {}, [
            h("span", {}, "Criamos uma "),
            h("span", {
              style: {"font-weight": "bold"}
            }, "*chave-privada Ethereum*"),
            h("span", {}, " pra você.")]),
          h("div", {},
            "Use-a para logar, jogar e guardar suas moedas."),
          h("div", {},
            "Essa chave NÃO é enviada pra gente. Se perder,"),
          h("div", {},
            "não tem volta. Poderia anotá-la seguramente?"),
        ]);
        return ask(body, null, [
          ["Posso sim!", "here_is_your_key"],
          ["Não posso.", "come_back_when_you_can"]]);
      case "come_back_when_you_can":
        return ask("Então volte quando puder.", null,
          [["Ok.", "failure"]]);
      case "here_is_your_key":
        var body = h("div", {}, [
          h("div", {}, "Sua chave é:"),
          h("div", {}, ""),
          h("div", {
            style: {
              "background": "rgba(0,0,0,0.2)",
              "width": "420px",
              "overflow-y": "scroll",
            },
          }, this.wlet.privateKey),
          h("div", {}, ""),
          h("div", {}, "Guardou em lugar seguro?")
        ]);
        return ask(body, null, [
          ["Sim!", "will_you_lose_your_key"],
          ["Não.", "no_account_for_you"]
        ]);
      case "no_account_for_you":
        return ask(
          "Então sem conta pra você.",
          null,
          [["Ok.", "failure"]]);
      case "will_you_lose_your_key":
        return ask(
          "Você pretende perder sua chave?",
          null,
          [ ["Sim!", "no_account_for_you"],
            ["Não.", "will_you_not_not_lose_your_key"]]);
      case "will_you_not_not_lose_your_key":
        return ask(
          "Você não pretende não perder sua chave?",
          null,
          [ ["Sim!", "type_your_key"],
            ["Não.", "type_your_key"]]);
      case "type_your_key":
        return ask(
          "Prove que guardou a chave. Digite-a:",
          "key",
          [["Pronto.", "check_key"]]);
      case "check_key":
        if (this.key !== this.wlet.privateKey) {
          return ask(
            "Tá errado. Pq mentir? Vai jogar LoL.",
            null,
            [ ["Blz.", "failure"],
              ["Nãããão!!!", "type_your_key"]]);
        } else {
          post("register", {
            name: this.name,
            addr: this.wlet.address,
          }).then((res) => {
            switch (res.ctr) {
              case "err": 
                this.phase = "error";
                this.error = res.err;
                break;
              case "ok":
                this.phase = "done";
                break;
            }
            this.forceUpdate();
          }).catch((err) => {
            this.phase = "error";
            this.error = "Deu ruim no server. Desculpa :(";
            this.forceUpdate();
          });
          return ask("Registrando. Aguarde...", null, []);
        }
      case "error":
        return ask(this.error, null, [
          ["Tentar outro.", "enter_name"],
          ["Ah vsf.", "failure"],
        ]);
          
      case "done":
        return ask([
          h("div", {},
            "Nice nice! Confio plenamente que você não"),
          h("div", {},
            "vai perder a sua chave. Bons jogos, GLHF!")
          ],
          null,
          [
            ["GLHF <3", "success"],
            ["Foda-se", "success"],
          ]);
      case "success":
        this.on_done({name:this.name, wlet:this.wlet});
        return h("div");
      case "failure":
        this.on_done({name:null, wlet:null});
        return h("div");
    }
  }
};

module.exports = Register;
