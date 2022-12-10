//Desenvolva um programa que leia um número. Em seguida, usando os operadores de incremento, imprima o número seguinte.


const prompt = require("prompt-sync")();

let n1 = Number(prompt("Digite um número: "));

console.log("Apos o incremento: ", ++n1); // numero seguinte
