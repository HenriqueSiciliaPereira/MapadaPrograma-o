const prompt = require("prompt-sync")();

//String
const nome = "Henrique Sicilia Pereira";


console.log("Nome: ", nome);
console.log("Tamanho: ", nome.length);
console.log("Primeiro nome: ", nome.substring(0, 8));
console.log("Outro nome: ", nome.replace(/henrique/i, "André"));
console.log("Maiusculo: ", nome.toLocaleUpperCase());
console.log("Minusculo: ", nome.toLocaleLowerCase());
console.log("Sem espaço: ", nome.trim(" "));
console.log("1 posição: ", nome.charAt(0));
console.log("Separado: ", nome.split(" "));
console.log("Include: ", nome.includes("H"));

const nomes = "Henrique";
const sobrenome = "Sicilia";
const nomeCompleto = "${nome} - ${sobrenome}";
console.log(nomeCompleto);

//Numbers

const preco = 12.9;

let valor = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
}).format(preco);

console.log(valor);

console.log(preco.toFixed);//arredonda

