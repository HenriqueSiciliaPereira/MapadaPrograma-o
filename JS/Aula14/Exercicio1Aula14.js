//1. Desenvolva um sistema que cadastre 5 opções de menu te uma hamburgueria. O usuário deverá inserir os seguintes dados:
//a-) Nome do lanche
//b-) Valor
//c-) Tamanho: p, m, g 

//Valide os dados de entrada utilizando uma arrow function, e caso ocorra um erro, utilize a função throw. Em seguida, utilizando o console.table, apresente as informações na tela.

const prompt = require("prompt-sync")();

try {
  const formataEstoque = (estoque) => {
    return estoque.map((item) => ({
      ... item,
      valor: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(item.valor),
      tamanho: item.tamanho.toUpperCase(),
    }));

  }



  const validaDados = (itemEstoque) => {
    if(itemEstoque.preco <= 0){

      throw "Preço não pode ser zero ou negativo";
    }

    if(itemEstoque.tamanho === "p" || itemEstoque.tamanho === "m" || itemEstoque.tamanho === "g" ){
      return
    } else {
      throw "Tamanho deve ser p,m ou g";
    }
  }



  const estoque = new Array();

for(let i = 0; i < 5; i++) {
  
  const item = new Object();
  console.log("Digite os itens de menu da hamburgueria: ")
  item.nomeLanche = prompt("Nome do lanche: ");
  item.valor = Number(prompt("Preço: "));
  item.tamanho = prompt("Tamanho: ");
  validaDados(item);
  estoque.push(item);
}
  const estoqueFormatado = formataEstoque(estoque);
  console.table(estoqueFormatado);

} catch (error) {
  console.log("Erro no sistema: ", error);
}