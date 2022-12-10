const prompt = require("prompt-sync")();

//Repetição For

/*let somaTotal = 0;

for (let i = 0; i < 10; i++) {
  console.log("Digite o valor do produto ", i + 1);
  let valorProduto = Number(prompt("R$ "));
  somaTotal += valorProduto;
}

console.log("O valor da sua compra é: R$ ", somaTotal);*/


//Repetição For in  (para percorrer os dados de um objeto)

/*const piloto = new Object();

piloto.nome = prompt("Digite o nome do piloto: ");
piloto.equipe = prompt("Nome da equipe: ");
piloto.tempoDeProva = prompt("Tempo de prova: ");
piloto.posicao = prompt("Posição: ");

console.log("-----------------");
console.log("Ficha do piloto: ")
for(let propriedade in piloto) {
  console.log(propriedade, ":", piloto[propriedade]);
}*/

//Repetição While e Do While (Usado enquanto a condição for verdadeira)

function checarNumeroPar(numero) {
  return numero % 2 === 0;
}

let continuaOLoop = "s";
do {
  let numero = prompt("Digite o numero: ");
  let numeroEpar = checarNumeroPar(Number(numero));
  console.log("O numero ", numero, "é par: ", numeroEpar);
  continuaOLoop = prompt("Digite s para continuar ou qualquer outro caracter para parar: ");
} 
while(continuaOLoop == "s");



