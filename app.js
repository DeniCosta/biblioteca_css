import figlet from "figlet";
import gradient from "gradient-string";
import inquirer from "inquirer";
import cliTable from "cli-table3";
import chalk from "chalk";

class ListaPropriedadesCSS {
  constructor() {
    this.propriedades = [];
  }

  async exibirTitulo() {
    console.log(
      gradient.pastel.multiline(figlet.textSync("Biblioteca CSS", {
        horizontalLayout: "full",
        font: "Big",
      }))
    );
  }

  async coletarPropriedades() {
    const prompt = inquirer.createPromptModule();

    let continuar = true;
    while (continuar) {
        const resposta = await prompt({
            type: "input",
            name: "propriedade",
            message: "Digite uma propriedade de CSS (ou digite 'SAIR' para ver a lista e encerrar):",
        });

        const propriedade = resposta.propriedade.trim().toLowerCase();

        if (propriedade.toUpperCase() === "SAIR") {
            continuar = false;
        } else {
            try {
                await this.validarPropriedade(propriedade);
            } catch (error) {
                console.error(error.message);
            }
        }
    }
}

  async validarPropriedade(propriedade) {
    const ehPropriedadeValida = /^[a-z\-]+$/.test(propriedade);

    if (propriedade === "") {
      throw new Error("Entrada vazia. Por favor, digite uma propriedade válida.");
    } else if (!ehPropriedadeValida) {
      throw new Error("Entrada inválida. Utilize apenas letras e hífens.");
    } else if (this.propriedades.includes(propriedade)) {
      throw new Error("Entrada duplicada. Essa propriedade já foi adicionada.");
    } else {
      this.propriedades.push(propriedade);
      console.log(`Propriedade "${propriedade}" adicionada com sucesso.`);
    }
  }

  async exibirPropriedades() {
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

  async iniciar() {
    await this.exibirTitulo();
    await this.coletarPropriedades();
    await this.exibirPropriedades();
  }

}

const listaCSS = new ListaPropriedadesCSS();
listaCSS.iniciar();
