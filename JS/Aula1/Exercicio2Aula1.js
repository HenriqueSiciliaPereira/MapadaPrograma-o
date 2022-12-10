//Desenvolva uma programa que irá salvar o dado de 2 jogadores de futebol. Peça o usuário que digite o nome dos jogares e seus respectivos clubes. Em seguida, imprima as informações na tela.

const prompt = require('prompt-sync')();

let nomejogador1 = prompt("Digite o nome do jogador1: ");

let clubejogador1 = prompt("Nome do clube do jogador: ");

let nomejogador2 = prompt("Digite o nome do jogador2: ");

let clubejogador2 = prompt("Nome do clube do jogador: ");

console.log("-------------");
console.log("Jogadores de  Futebol")

console.log("Nome: ", nomejogador1);
console.log("Clube: ", clubejogador1);

console.log("Nome: ", nomejogador2);

console.log("Clube: ", clubejogador2);