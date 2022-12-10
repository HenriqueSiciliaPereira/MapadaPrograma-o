//Desenvolva um programa que o usuário insira um número ilimitado de itens de supermercado, contendo os valores e nome do item.. Através da função reduce, calcule o valor total da compra e apresente o resultado na tela.


const prompt = require("prompt-sync")();

const usuario = [];


for(let i = 0; i < 2; i++) {
  let mercado = new Object();

  mercado.nomes = prompt("Digite o nome dos alimentos: ");
  

  mercado.precos = Number(prompt("Digite o preçoo dos alimentos: "));
  

  usuario.push(mercado);
}

const precoTotal = usuario.reduce(function(total, item){
  return total + item.precos;
}, 0);

console.log(precoTotal);

