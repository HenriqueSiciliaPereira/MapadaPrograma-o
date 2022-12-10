//Utilizando o exercício anterior, utilize a função map para criar um novo array que contenha somente o nome dos alunos e imprima o resultado na tela.


const prompt = require("prompt-sync")();

const usuario = [];


for(let i = 0; i < 2; i++) {
  let aluno = new Object();

  aluno.nomes = prompt("Digite o nome dos alunos: ");
  

  aluno.pesos = Number(prompt("Digite o peso dos alunos: "));
  

  aluno.alturas = Number(prompt("Digite a altura dos alunos: "));
  
  usuario.push(aluno);
}

const somenteNomes = usuario.map(function(nome)
{
  return nome.nomes;
});

console.log(somenteNomes);