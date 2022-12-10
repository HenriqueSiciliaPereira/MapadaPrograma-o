//Escreva um algoritmo para identificar se o nome inserido pelo usuário é diferente do seu.

const prompt = require("prompt-sync")();

let nome1 = prompt("Digite o seu nome: ");
let nome2 = prompt("Digite outro nome: ");

console.log("O seu nome é diferente do seu colega? ", nome1 != nome2);