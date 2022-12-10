//Para se qualificar para o melhor jogador de vôlei do mundo, o candidato deverá ter marcado durante a temporada uma pontuação maior ou igual a 50 pontos, ter mais de 3 anos de carreira e também ter fornecido pelo menos 30 assistências. Desenvolva um programa que leia o nome, pontuação, tempo de carreira e numero de assistências. Em seguida, imprima uma mensagem se ele se qualifica ou não para ser candidato a melhor do mundo.

const prompt = require("prompt-sync")();

let nome = prompt("Digite o seu nome: ");
let pontuacao = prompt("Digite quantos pontos fez: ");
let tempCarreira = prompt("Digite seu tempo de carreira: ");
let numAssis = prompt("Digite seus números de assistência: ");

let melhorJogador = pontuacao >= 50 && tempCarreira > 3 && numAssis >= 30;

console.log("Melhor Jogador de Vôlei do Mundo");

console.log("O jogador ", nome, "se qualifica para ser candidato a melhor do mundo? ", melhorJogador);