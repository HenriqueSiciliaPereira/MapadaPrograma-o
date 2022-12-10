//Desenvolva um sistema que através do comando do while identifique se o número digitado é impar. Enquanto o usuário digitar um número diferente de zero, continue a executar o loop.


const prompt = require("prompt-sync")();

function chegarNumeroImpar(numero){
  return numero % 2 === 1;
}

let continuaOLoop = "s";

do{
  let numero = prompt("Digite um numero: ");
  let numeroEImpar = chegarNumeroImpar (Number(numero));
  console.log("O numero, ", numero, "é impar: ", numeroEImpar);
  continuaOLoop = prompt("Digite s para continuar ou qualquer outro caracter para parar: ");
}
while (continuaOLoop == "s");