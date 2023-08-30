import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import cliTable from "cli-table3";
import chalk from "chalk";

class ListaPropriedadesCSS {
  constructor() {
    this.propriedades = [];
  }

  exibirTitulo() {
    console.log(
      gradient.pastel.multiline(figlet.textSync("Biblioteca CSS", {
        horizontalLayout: "full",
        font: "Big",
      }))
    );
  }

  coletarPropriedades() {
    const prompt = inquirer.createPromptModule();

    let continuar = true;
    while (continuar) {
      const resposta = prompt.sync({
        type: "input",
        name: "propriedade",
        message: "Digite uma propriedade de CSS (ou digite 'SAIR' para encerrar):",
      });

      const propriedade = resposta.propriedade.trim().toLowerCase();

      if (propriedade.toUpperCase() === "SAIR") {
        continuar = false;
      } else {
        this.validarPropriedade(propriedade);
      }
    }
  }

}

const listaCSS = new ListaPropriedadesCSS();
