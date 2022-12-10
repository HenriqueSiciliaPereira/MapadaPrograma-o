//Utilizando o exercício 8, averigue se algum elemento tem o valor acima de R$50 (função some). Imprima o resultado na tela.


const prompt = require("prompt-sync")();


const usuario = [];


for(let i = 0; i < 2; i++) {
  let mercado = new Object();

  mercado.nomes = prompt("Digite o nome dos alimentos: ");
  

  mercado.precos = Number(prompt("Digite o preçoo dos alimentos: "));
  

  usuario.push(mercado);
}

const precoAcimaDe50 = usuario.some(function(item){
  return item.preco > 50;
});

console.log(precoAcimaDe50);

