//Desenvolva um sistema que solicite o usuário o dia, mês e ano. Em seguida, apresente a data no formato de date string, UTC e ISO.


const prompt = require("prompt-sync")();

const data = new Date(prompt("Digite a data no formato YYYY-MM-DD: "));

console.log(data.toUTCString());
console.log(data.toISOString());