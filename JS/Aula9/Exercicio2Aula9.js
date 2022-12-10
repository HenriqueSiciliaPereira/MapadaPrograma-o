//Desenvolva uma solução que contenha um array pré definido com valores de itens de supermercado. Solicite o usuário os próximos 3 itens que serão adicionados e os coloque ao final da listagem. Em seguida, imprima a lista final na tela.


const prompt = require("prompt-sync")();

const valoresMercado = ["Tomate", "Sabão","Macarrão"];

for(let i = 0; i < 3; i++){

  let itensFinais = prompt("Digite os itens: ");
  valoresMercado.push(itensFinais);
}

console.log("Listagem final dos itens: ", valoresMercado);