const Prompt = require("prompt-sync")();

let notaExatas = Number(Prompt("Digite sua nota de exatas: "))
let notaHumanas = Number(Prompt("Digite sua nota de humanas: "));
let notaRedacao = Number(Prompt("Digite a nota da redação: "));

let media = (notaExatas + notaHumanas + notaRedacao) / 3;

console.log("Média: ", media);

if (media >= 900) {
  console.log("Boas chances de aprovação em medicina");
} else if (media >= 700) {
  console.log("Aprovação provavel em outros cursos");
} else {
  console.log("Apovação improvavel");
}
