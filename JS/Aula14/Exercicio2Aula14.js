//1. Crie um sistema onde o usuário irá cadastrar os últimos 7 pedidos realizados em uma pizzaria. As informações inseridas deverão ser:
//a-) Sabor da pizza: margerita, pepperoni, frango, portuguesa.
//b-) Tamanho: 1, 2 ou 3
//c-) Data do pedido: ano-dia-mes
//d-) Hora do pedido: hh-dd
//e-) Valor total

//Valide os dados à cada entrada. Em seguida, formate os dados de cada item com data completa e o valor total seguindo os padrões do javascript. Por fim, calcule o valor total de todos os pedidos e apresente os dados formatados e o valor total na tela para o usuário.

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
      sabor: item.sabor.toUpperCase(),
    }));

  }



  const validaDados = (itemEstoque) => {
    if(itemEstoque.preco <= 0){

      throw "Preço não pode ser zero ou negativo";
    }

    if(itemEstoque.tamanho === 1 || itemEstoque.tamanho === 2 ||  itemEstoque.tamanho === 3){
      return
    } else {
      throw "Tamanho deve ser 1,2 ou 3";
    }

    if(itemEstoque.sabor === "margerita" || itemEstoque.sabor === "pepperoni" || itemEstoque.sabor === "frango" || itemEstoque.sabor === "portuguesa"){
      return
    } else{
      throw "Os sabores devem ser margerita, pepperoni, frango, portuguesa";
    }
  }



  const estoque = new Array();

for(let i = 0; i < 7; i++) {
  
  const item = new Object();
  console.log("Digite os ultimos 7 pedidos da pizzaria: ")

  item.sabor = prompt("Sabor da Pizza: ");

  item.tamanho = Number(prompt("Tamanho: "));

  const dataAtual = new Date();

  const horaEMinutos = prompt("Digite a hora e minuto do pedido no formato: HH:mm -");

  const splitado = horaEMinutos.split(":");
  const hora = Number(splitado[0]);
  const minutos = Number(splitado[1]);

  item.preco = Number(prompt("Preço: "));

  item.valorTotal += preco;
  validaDados(item);
  estoque.push(item);
}
  const estoqueFormatado = formataEstoque(estoque);
  console.table(estoqueFormatado);

} catch (error) {
  console.log("Erro no sistema: ", error);
}