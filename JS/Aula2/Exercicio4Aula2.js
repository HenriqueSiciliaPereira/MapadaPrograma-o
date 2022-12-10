//Desenvolva um programa que leia um número. Em seguida, usando os operadores de decremento, imprima o número anterior.

const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite um número: "));

console.log("Apos o decremento: ", --n1); //numero anterior
