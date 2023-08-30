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

  validarPropriedade(propriedade) {
    const ehPropriedadeValida = /^[a-z\-]+$/.test(propriedade);

    if (propriedade === "") {
      console.error("Entrada vazia. Por favor, digite uma propriedade válida.");
    } else if (!ehPropriedadeValida) {
      console.error("Entrada inválida. Utilize apenas letras e hífens.");
    } else if (this.propriedades.includes(propriedade)) {
      console.error("Entrada duplicada. Essa propriedade já foi adicionada.");
    } else {
      this.propriedades.push(propriedade);
      console.log(`Propriedade "${propriedade}" adicionada com sucesso.`);
    }
  }

  exibirPropriedades() {
    if (this.propriedades.length === 0) {
      console.log("Nenhuma propriedade foi adicionada.");
    } else {
      const propriedadesOrdenadas = [...this.propriedades].sort();

      const tabela = new cliTable({
        head: [chalk.bold.cyanBright("Propriedade")],
      });

      propriedadesOrdenadas.forEach((prop) => {
        tabela.push([prop]);
      });

      console.log(tabela.toString());
    }
  }

}

const listaCSS = new ListaPropriedadesCSS();
