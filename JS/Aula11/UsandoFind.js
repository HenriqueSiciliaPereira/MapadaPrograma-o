//Ainda utilizando o exercício de número 8, busque se há na lista algum elemento que seja “Arroz”, por meio da função find. Imprima o resultado na tela.


const prompt = require("prompt-sync")();

const nome = [];

for(let i = 0; i < 2; i++) {
  let mercado = new Object();

  mercado.nomes = prompt("Digite o nome dos alimentos: ");
  

  mercado.precos = Number(prompt("Digite o preçoo dos alimentos: "));
  

  usuario.push(mercado);
}

const buscaNome = preco.find(function( item){
  return item.nome === "Arroz";
});

console.log(buscaNome);

