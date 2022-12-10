//Desenvolva uma solução que preencha dinamicamente através do comando for preencha um array de nomes de seus familiares.

const prompt = require("prompt-sync")();

const familia = new Array();

for(let i = 0; i < 3; i++) {

  let minhaFamilia = new Object();

  minhaFamilia.nome = prompt("Digite os membros da sua familia: ");
  
  familia[i] = minhaFamilia; 
}

console.log("Lista da minha familia: ", familia);