//6. Considerando que a distância entre a terra e a lua é de 384.400km, escreva um programa que o usuário irá inserir a velocidade de uma nave espacial. Com esse dado, calcule em quanto tempo (horas) a aeronave chegaria até a lua.

//a-) Formula = 384.400/velocidade


const prompt = require("prompt-sync")();

let velocidade = Number(prompt("Digite a velocidade (em km/h) :"));

let tempo = (384.400 / velocidade);

console.log("Quanto tempo levará para a aeronave chegar a lua? ", tempo);