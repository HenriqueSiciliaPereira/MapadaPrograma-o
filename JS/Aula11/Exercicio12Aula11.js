//Encontre no exercício 8 o index do elemento “Sabão”. Caso não haja (index -1), imprima a informação na tela.


const prompt = require("prompt-sync")();

const usuario = [];


for(let i = 0; i < 2; i++) {
  let mercado = new Object();

  mercado.nomes = prompt("Digite o nome dos alimentos: ");
  

  mercado.precos = Number(prompt("Digite o preçoo dos alimentos: "));
  

  usuario.push(mercado);
}

const buscaNome = usuario.find(function( item){
  return item.nomes === "Sabao";
});

console.log(buscaNome);
