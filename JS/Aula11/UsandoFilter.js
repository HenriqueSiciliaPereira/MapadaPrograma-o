//Utilizando o exercício 6, utilize a função filter para imprimir um array com os alunos que tenham mais de 180 de altura.

const prompt = require("prompt-sync")();

const usuario = [];


for(let i = 0; i < 2; i++) {
  let aluno = new Object();

  aluno.nomes = prompt("Digite o nome dos alunos: ");
  

  aluno.pesos = Number(prompt("Digite o peso dos alunos: "));
  

  aluno.alturas = Number(prompt("Digite a altura dos alunos: "));
  
  usuario.push(aluno);
}

const somenteAltura180 = usuario.filter(function(nome)
{
  return nome.nomes = nome.alturas > 180;
  
});

console.log(somenteAltura180);