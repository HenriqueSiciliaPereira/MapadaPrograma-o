//Escreva um sistema que o usuário insira as notas de 10 alunos de uma faculdade. Em seguida, através do comando sort, ordene a listagem de notas.


const prompt = require("prompt-sync")();

const notas = [];

for( let i = 0; i < 10; i++) {
  let nota = prompt("Digite a nota do aluno: ");
  notas[i] = nota;
}

notas.sort(function(n1, n2){
  return n1 - n2 // ordem crescente
}
);

console.log(notas);