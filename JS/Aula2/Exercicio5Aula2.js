//Desenvolva um programa que converta uma quantidade de horas inserida pelo usuário em minutos e, em seguida, em segundos.

const prompt = require("prompt-sync")();

let horas = Number(prompt("Digite uma quantidade de horas: "));
let minutos = (horas * 60);
let segundos = (horas * 3600);

console.log("Horas: ", horas);
console.log("Minutos: ", minutos);
console.log("segundos: ", segundos);