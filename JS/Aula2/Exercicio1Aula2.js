//Crie um código que solicite ao usuário digitar três números. Em seguida, apresente o resultado da soma, subtração, multiplicação dos três.

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite o primeiro numero: "));
let n2 = Number(prompt("Digite o segundo numero: "));
let n3 = Number(prompt("Digite o terceiro numero: "));

console.log("Soma: ", (n1 + n2 + n3));
console.log("Subtração: ", (n1 - n2 - n3));
console.log("Multiplicação: ", (n1 * n2 * n3));