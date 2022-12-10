//Construa uma solução que através do loop for leia 5 números diferentes. A partir disso, apresente para o usuário qual foi o maior e qual foi o menor número digitado

const prompt = require("prompt-sync")();




let maiornumero = 0;
let menornumero = 0;

for (let i = 0; i < 5 ; i ++) {
  let numeros= Number(prompt("Digite um numero: "));
  
if (numeros > maiornumero ){
  maiornumero = numeros;
} 
else if (numeros < menornumero){
  menornumero = numeros;
}
}

console.log("O maior número digitado é: ", maiornumero);
console.log("O menor numero digitado é: ", menornumero);