//Crie um sistema que através de uma função converta a quantidade de horas e minutos (1h = 60 minutos)

const prompt = require("prompt-sync")();

function conversaoDetempo(horas){
  let resultado = horas * 60;
  return resultado;
}

let tempoHoras = Number(prompt("Digite o tempo em horas: "));

let minutos = conversaoDetempo(tempoHoras);

console.log("A conversão de ", tempoHoras, "horas é: ", minutos, "minutos");