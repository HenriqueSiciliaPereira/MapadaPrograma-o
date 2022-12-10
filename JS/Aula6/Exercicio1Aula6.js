//Desenvolva um sistema que execute uma função para calcular a média de 4 números

const prompt = require("prompt-sync")();

function calcuMedia (num1, num2, num3, num4){
  let resultado = (num1 + num2 + num3 + num4) / 2;
  return resultado;
}

let primeiroNum = Number(prompt("Digite o primeiro numero: "));
let segundaNum = Number(prompt("Digite o segundo numero: "));
let terceiroNum = Number(prompt("Digite o terceiro numero: "));
let quartoNum = Number(prompt("Digite o quarto numero: "));

let resultMedia = calcuMedia(primeiroNum, segundaNum, terceiroNum, quartoNum);

console.log("O resultado da média dos 4 numeros é: ", resultMedia);