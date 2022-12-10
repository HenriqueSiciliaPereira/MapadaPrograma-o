//Desenvolva um sistema para receber duas velocidades de dois pilotos de fórmula 1. Em seguida, apresente o que teve maior velocidade.

const prompt = require("prompt-sync")();

let velocidade1 = Number(prompt("Qual a velocidade do piloto1? "));

let velocidade2 = Number(prompt("Qual a velocidade do piloto2? "));

let resultado1 = velocidade1 > velocidade2;
let resultado2 = velocidade1 < velocidade2;

console.log(resultado1, "Piloto1 estava mais veloz");
console.log(resultado2,"Piloto2 estava mais veloz");
