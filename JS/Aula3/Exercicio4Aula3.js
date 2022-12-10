//Crie uma solução para identificar entre dois alunos, qual teve a nota mais baixa.

const prompt = require("prompt-sync")();

let aluno1 = Number(prompt("Digite a nota do aluno1: "));
let aluno2 = Number(prompt("Digite a nota do aluno2 "));

console.log("Qual dos alunos teve a nota mais baixa? ");
console.log(aluno1 > aluno2, "Aluno2");
console.log(aluno1 < aluno2, "Aluno1");
