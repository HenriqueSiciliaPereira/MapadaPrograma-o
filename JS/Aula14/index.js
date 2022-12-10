const prompt = require("prompt-sync")();

try {
  const formataEstoque = (estoque) => {
    return estoque.map((item) => ({
      ... item,
      preco: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(item.preco),
      tamanho: item.tamanho.toUpperCase(),
    }));

  }



  const validaDados = (itemEstoque) => {
    if(itemEstoque.preco <= 0){

      throw "Preço não pode ser zero ou negativo";
    }

    if(itemEstoque.tamanho === "p" || itemEstoque.tamanho === "m" || itemEstoque.tamanho === "g" || itemEstoque.tamanho === "gg"){
      return
    } else {
      throw "Tamanho deve ser p,m,g ou gg";
    }
  }



  const estoque = new Array();

for(let i = 0; i < 3; i++) {
  
  const item = new Object();
  console.log("Digite os dados do item para o estoque: ")
  item.nome = prompt("Nome: ");
  item.preco = Number(prompt("Preço: "));
  item.tamanho = prompt("Tamanho: ");
  validaDados(item);
  estoque.push(item);
}
  const estoqueFormatado = formataEstoque(estoque);
  console.table(estoqueFormatado);

} catch (error) {
  console.log("Erro no sistema: ", error);
}