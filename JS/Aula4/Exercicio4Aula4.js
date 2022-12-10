//Para um número ser ímpar, o resultado do módulo (%) tem que ser diferente de zero. Desenvolva um programa que identifique se o número inserido pelo usuário é impar. 

const prompt = require("prompt-sync")();

let numero = prompt("Digite um número: ");
let numimpar = numero % 2 == 1;

console.log("O número digitado é impar? ", numimpar);