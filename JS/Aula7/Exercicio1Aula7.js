//Construa uma solução em que o usuário insira os dados de um aluno (nome, matricula, nota1, nota2, nota3). Salve as informações um objeto e crie um método dentro deste objeto que calcule a média das 3 notas. Em seguida, apresente a média final para o usuário.

const prompt = require("prompt-sync")();

const aluno = {
nome : prompt("Digite o nome do aluno: "),
matricula : Number(prompt("Digite a matricula do aluno: ")),
nota1 : Number(prompt("Digite a primeira nota do aluno: ")),
nota2 : Number(prompt("Digite a segunda nota do aluno: ")),
nota3 : Number(prompt("Digite a terceira nota do aluno: ")),

finalMedia: function(){
  const media = (nota1 + nota2 + nota3) / 3;
  return media;
}
}

const{nome, matricula, nota1, nota2, nota3} = aluno
console.log("--------------------");
console.log("Dados do aluno: ");
console.log("Nome: ", nome);
console.log("matricula: ", matricula);
console.log("nota1: ", nota1);
console.log("nota2: ", nota2);
console.log("nota3: ", nota3);
console.log("Média: ", aluno.finalMedia());