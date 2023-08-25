import figlet from "figlet";
import gradient from "gradient-string";

//Título da ferramenta no terminal
console.log(
    gradient.pastel.multiline(figlet.textSync("Biblioteca CSS", {
        horizontalLayout: "full",
    }))
);
