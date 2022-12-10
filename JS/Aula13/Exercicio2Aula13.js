//Crie um sistema que solicite o usuário o cadastro de 5 participantes de um processo seletivo para uma bolsa escolar, contento nome e data de nascimento (ano-mes-dia). A partir disso, apresente quantos nasceram no mesmo ano e quantos nasceram no mesmo mês.


const prompt = require("prompt-sync")();

let participants = [];
let sameYear = [];
let sameMonth = [];

function checkSameYear(student) {
  let year = student.birthday.getFullYear(); // separa a data de nascimento

  // checar se existem alunos que tem a mesmo ano
  let checkSameYear = participants.filter(function (item) {
    return item.birthday.getFullYear();
  });

  // se o length do filter é maior que zero, possui mesma data
  if (checkSameYear.length > 0) {
    // checar se já existe um item com aquele ano salvo
    let alreadySavedYear = sameYear.some(function (item) {
      return item.year === year;
    });

    // se não tiver, adiciona no array
    if (!alreadySavedYear) {
      sameYear.push({
        year,
        quantity: checkSameYear.length,
      });
    }
  }
}

function checkSameMonth(student) {
  let month = student.birthday.getMonth(); // separa a data de nascimento

  // checar se existem alunos que tem a mesmo mes
  let checkSameMonth = participants.filter(function (item) {
    return item.birthday.getMonth();
  });

  // se o length do filter é maior que zero, tem
  if (checkSameMonth.length > 0) {
    // checar se já existe um item com aquele mes salvo
    let alreadySavedMonth = sameMonth.some(function (item) {
      return item.month === month;
    });
    if (!alreadySavedMonth) {
      // se não tiver, adiciona no array
      sameMonth.push({
        month,
        quantity: checkSameMonth.length,
      });
    }
  }
}

for (let i = 0; i < 5; i++) {
  let student = new Object();
  student.name = prompt("Digite o nome do candidato: ");
  let birthday = prompt("Digite a data de nascimento (yyyy-mm-dd): ");
  student.birthday = new Date(birthday);
  participants.push(student);
}

participants.map(function (student) {
  checkSameYear(student);
  checkSameMonth(student);
});

console.table(participants);

console.log("Mesmo ano: ");
console.table(sameYear);

console.log("Mesmo mês: ");
console.table(sameMonth);