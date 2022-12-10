//Escreva um algoritmo que através de uma função identifique se o nome de uma marca de carros inserida pelo usuário é de origem alemã (Volkswagen, Audio, BMW, Mercedes)

const prompt = require("prompt-sync")();

function marca(alema){
  if(alema == "Volkswagen" || alema == "Audi" || alema == "BMW" || alema == "Mercedes"){
    return true;
  }
  return false;
}



console.log("------Identificação para ver se é um carro alemão----------");

let marcaCarro = prompt("Digite uma marca de carros: ");
let verificaCarro = marca(marcaCarro);

console.log("A marca, ", marcaCarro, "é alemã? ", verificaCarro);