import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import cliTable from "cli-table3";
import chalk from "chalk";

class ListaPropriedadesCSS {
  constructor() {
    this.propriedades = [];
  }
}

function exibirTitulo() {
  console.log(
    gradient.pastel.multiline(figlet.textSync("Biblioteca CSS", {
      horizontalLayout: "full",
      font: "Big",
    }))
  );
}

exibirTitulo();

const listaCSS = new ListaPropriedadesCSS();
