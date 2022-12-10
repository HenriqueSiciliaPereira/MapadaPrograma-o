//Desenvolva um sistema que solicite ao usuário dois números. Em seguida, calcule a média dos dois números.

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite o primeiro numero: "));
let n2 = Number(prompt("Digite o segundo numero: "));
let media = (n1+n2) / 2;

console.log("A média entre os dois numeros é: ", media);