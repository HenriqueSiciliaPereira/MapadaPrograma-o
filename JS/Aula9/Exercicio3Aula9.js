// Crie uma solução que contenha uma listagem pré definida de alunos de uma turma e suas notas.
// Em seguida, solicite ao usuário que escreve os próximos 3 alunos e suas respectivas turmas.
// Adicione esses elementos (objetos) ao array no começo da listagem e imprima a lista na tela.
// Em seguida, remova os 3 últimos elementos da listagem e imprima o resultado final e o
// tamanho da listagem.

const prompt = require("prompt-sync")();

const schollList = [
  {
    name: "Tiago",
    class: "A",
    nota: 10,
  },
  {
    name: "Melissa",
    class: "B",
    nota: 9.5,
  },
  {
    name: "Carol",
    class: "C",
    nota: 9,
  },
  {
    name: "Andre",
    class: "A",
    nota: 8,
  },
  {
    name: "Pedro",
    class: "B",
    nota: 10,
  },
  {
    name: "Clara",
    class: "C",
    nota: 10,
  },
];

function addStudent() {
  const newStudent = {};
  newStudent.name = prompt(`Digite o nome do aluno: `);
  newStudent.class = prompt(`Digite a turma deste aluno: `);
  newStudent.nota = Number(prompt(`Digite a nota deste aluno: `));
  return newStudent;
}
function printList(list) {
  console.log(`Alunos:`);
  for (let index = 0; index < list.length; index++) {
    console.log(`${index + 1} - ${list[index].name}
    Turma: ${list[index].class}
    Nota: ${list[index].nota}`);
  }
}

for (let index = 0; index < 3; index++) {
  schollList.unshift(addStudent());
}
printList(schollList);

for (let index = 0; index < 3; index++) {
  schollList.pop(schollList);
}
printList(schollList);

console.log(`Nossa lista tem ${schollList.length} alunos`);


