//Desenvolva uma solução em que o usuário insira a ficha atlética de 7 alunos de uma academia, com nome, peso e altura. Em seguida, imprima a lista ordenada pela altura dos alunos, de forma decrescente e uma segunda lista pelo peso, de forma crescente.


const prompt = require("prompt-sync")();

const usuario = [];


for(let i = 0; i < 7; i++) {
  let aluno = new Object();

  aluno.nomes = prompt("Digite o nome dos alunos: ");
  

  aluno.pesos = prompt("Digite o peso dos alunos: ");
  

  aluno.alturas = prompt("Digite a altura dos alunos: ");
  
  nome.push(aluno);
}

usuario.sort(function(a1, a2)
{
  return a2 - a1 // ordem decrescente
}
);
console.log(usuario);

usuario.sort(function(p1, p2)
{
  return p1 - p2 //ordem crescente
}
);

console.log(usuario);