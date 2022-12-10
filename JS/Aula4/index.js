const prompt = require("prompt-sync")();

// altura tem que ser > 120 e < 180
// e peso > 60 < 80

/*let altura = prompt("Digite a sua altura: ");
let peso = prompt("Digite o seu peso: ");
let condicaoAltura = altura >= 120 && altura <= 180;
let condicaopeso = peso >= 60 && peso <= 80;

console.log("Pode ser piloto de F1: ", condicaoAltura && condicaopeso);*/

/*let letra = prompt("Digite uma letra: ");
let condicaovogal = letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u";

console.log("Letra é vogal: ", condicaovogal);*/

let notaEnem = prompt("Digite a nota do ENEM: ");
let notaSeriado = prompt("Digite a nota do vestibular seriado: ");
let aprovado = notaEnem >= 700 || notaSeriado >= 500;

console.log("Aluno aprovado: ", aprovado);
console.log("Aluno foi reprovado: ", !aprovado);