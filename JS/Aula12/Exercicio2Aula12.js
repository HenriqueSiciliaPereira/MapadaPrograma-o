//2. Desenvolva um sistema que o usuário irá cadastrar um orçamento de obra. Para isso, será necessário inserir os dados no seguinte padrão:
//a-) Material
//b-) Custo

//O sistema deverá perguntar repetidas vezes até o usuário desejar finalizar.
//Ao finalizar, apresente a quantidade de material que inclua a palavra “cimento”, calcule o valor total da obra e formate também o valor total seguindo a formatação de moeda no JavaScript


const prompt = require("prompt-sync")();

const orcamento = [];


let continuaOLoop = "nao";

do{
  let orcamentos = new Object();
  
  orcamentos.material = prompt("Digite o material que foi usado: ");

  orcamentos.custo = Number(prompt("Quanto custou esse material: "));
  orcamento.push(orcamentos);

  continuaOLoop = prompt(" Deseja adicionar mais um material: ");

}
while (continuaOLoop == "nao");

const newOrcamento = orcamento.map(function(item) {
  return {
    ...item,
    checarCimento: item.material.includes("cimento"),
  };
});

let totalCimento = newOrcamento.reduce(function(total, p2) {
  return total + p2.checarCimento;
}, 0);

let total = orcamento.reduce(function(total, p2) {
  return total + p2.price;
}, 0);



let valor = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(preco);

console.log(newOrcamento);

console.log(`Quantos cimentos tem: , ${totalCimento}`);

console.log(`Total do seu pedido é de: ${total}`);