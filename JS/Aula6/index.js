const prompt = require("prompt-sync")();

//Função para calcular média

function calculaMedia( n1, n2){
  let resultado = (n1 + n2) / 2;
  return resultado;
}

let primeiroNumero = Number(prompt("Digite o primeiro numero: "));
let segundaNumero = Number(prompt("Digite o segundo numero: "));

let resultadoMedia = calculaMedia(primeiroNumero, segundaNumero);

console.log("Resultado da média: ", resultadoMedia);

//Conversão para F

/*function converteParaF(grau){
  let resultado = grau * (9/5) + 32;
  return resultado;
}

let grauCelsius = prompt("Digite a temperatura em C: ");
let grauF = converteParaF(grauCelsius);

console.log("O grau ", grauCelsius, "em F: ", grauF);*/

/*function verificarVogal(caracter){
  if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
  return true;
  }

  return false;
}

let letra = prompt("Digite um caracter: ");
let letraEvogal = verificarVogal(letra);
console.log("A letra ", letra, "é vogal? ", letraEvogal);*/