//Escreva um programa que contenha uma listagem com ficha de funcionários, contendo nome e valor do salário. Utilizando o comando for, passe por cada um dos elementos do array, e dê um bônus salarial de 5% a mais para cada funcionário.


const prompt = require("prompt-sync")();

const funcionarios = ["Henrique","Beatriz","Anna"];
const salario = [5000,4000,3000];  


for(let i = 0; i < salario.length; i++) {
  salario[i] += salario[i] * 0.05 ; // adicionando 5% a mais no salario  
}

console.log(salario);