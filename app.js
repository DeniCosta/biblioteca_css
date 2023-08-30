import figlet from "figlet";
import gradient from "gradient-string";

function exibirTitulo() {
  console.log(
    gradient.pastel.multiline(figlet.textSync("Biblioteca CSS", {
      horizontalLayout: "full",
      font: "Big",
    }))
  );
}

exibirTitulo();

