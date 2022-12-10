//3. Desenvolva um sistema que solicite ao usuário o nome, sobrenome, idade e faculdade e salário de 4 pessoas. Utilizando a interação de arrays, crie um novo array que contenha no cadastro de cada pessoa, além das informações cadastradas, as inicias da pessoa (1 letra do nome e 1 letra do sobrenome), se a formação é engenharia ou não, e formate o salário em duas casas decimais.


const prompt = require("prompt-sync")();

const usuario = new Array();

for( let i = 0; i < 4; i++) {
  let aluno = new Object();

  aluno.nome = prompt("Digite o nome do aluno: ");

  aluno.sobrenome = prompt("Digite o sobrenome do aluno: ");

  aluno.idade = Number(prompt("Digite a idade do aluno: "));
  
  aluno.curso = prompt("Digite o nome da faculdade do aluno: ");

  aluno.salario = Number(prompt("Digite o salario do aluno: "));

  usuario.push(aluno);

}

const newUsuario = usuario.map(function(item) {
  return {
      ...item,
      iniciar:
      item.nome.toUpperCase().slice(0, 1) +
      item.sobrenome.toUpperCase().slice(0, 1),
    checarEngenharia: item.curso.includes("engenharia"),
    salario: Number(item.salario).toFixed(2),
  };
});


console.log(usuario);
console.log("----------------------------");
console.log(newUsuario);

