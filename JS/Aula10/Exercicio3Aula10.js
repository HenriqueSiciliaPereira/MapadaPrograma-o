//Crie um programa que solicitei que o usuário entre com 5 nome de jogadores e a quantidade de gols e assistências na temporada. Em seguida, através do comando forEach, imprima na tela a quantidade total de lances para gol (gols + assistência) esse jogador contribuiu.


const prompt = require("prompt-sync")();

const jogadores = [];

for (let i = 0; i < 5; i++) {

  let jogador = new Object();

  jogador.nomes = prompt("Digite um nome: ");
  

  jogador.gols = Number(prompt("Digite a quantidade de gols: "));
  

  jogador.assistencias = Number(prompt("Digite a quantidade de assistências: "));
  
  jogadores.push(jogador);
  
}

jogadores.forEach(function (jogador) {
  let lancesGol = jogador.gols + jogador.assistencias;
  console.log(lancesGol);
});


