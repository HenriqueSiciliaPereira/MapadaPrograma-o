//Crie uma solução que de acordo com os dados inseridos pelo usuário salve as informações de um planeta (Nome, Tamanho, Distancia da terra). Em seguida, crie um método que calcule, de acordo com a velocidade que o usuário inserir, quanto tempo demoraria para chegar até este planeta.


const prompt = require("prompt-sync")();

const planeta = new Object()

planeta.nome = prompt("Nome: ");
planeta.tamanho = Number(prompt("Tamanho: "));
planeta.distanciaTerra = Number(prompt("Qual a distância que ele está da Terra? "));
planeta.velocidade = function(velocidadeVeiculo){
  return this.distanciaTerra / velocidadeVeiculo;
}

console.log("----------------");
console.log("Tempo da Terra para outros planetas");
let velocidadeVeiculo = Number(prompt("Qual a velocidade do veículo? "));
let tempo = planeta.velocidade(velocidadeVeiculo);
console.log("Levaria exatamente ", tempo, "horas");