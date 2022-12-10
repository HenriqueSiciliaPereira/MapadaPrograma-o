//Utilizando o exemplo anterior, cheque se na listagem todos os itens tem um valor acima de R$10. Dica: método every. Imprima o resultado na tela.


const prompt = require("prompt-sync")();

const usuario = [];


for(let i = 0; i < 2; i++) {
  let mercado = new Object();

  mercado.nomes = prompt("Digite o nome dos alimentos: ");
  

  mercado.precos = Number(prompt("Digite o preçoo dos alimentos: "));
  

  usuario.push(mercado);
}

const precoMaiorQue10 = usuario.every(function(item){
  return item.preco > 10;
});

console.log(precoMaiorQue10);