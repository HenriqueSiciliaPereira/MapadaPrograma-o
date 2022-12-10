//Escreva um algoritmo que o usuário entre a hora que solicitou um taxi. Em seguida, apresente a mensagem: “Solicitação confirmada em: [apresente a data]”. Depois, solicite a previsão de minutos para chegada”. Finalizando, apresente a data final estimada para chegada ao destino.


const prompt = require("prompt-sync")();

const horas = prompt("Digite a hora e os minutos que chamou o taxi: HH-mm");

const splitado = horas.split(":");
const hora = Number(splitado[0]);
const minutos = Number(splitado[1]);

const dataAtual = new Date();
dataAtual.setHours(hora);
dataAtual.setMinutes(minutos);
console.log(`Solicitação confirmada em: ${dataAtual.toString()}`);

const tempoDeChegada = Number(prompt("Digite o tempo em minutos para a chegada: "));
const minutosTotais = tempoDeChegada + minutos;

let dataEntrega = dataAtual;

if(tempoDeChegada + minutos > 60) {
  const minutosExcedentes = minutosTotais - 60;
  dataEntrega.setHours(hora + 1);
  dataEntrega.setMinutes(minutosExcedentes);
} else {
  dataEntrega.setMinutes(minutosTotais);
}
console.log(`Data de entrega: ${dataEntrega.toString()}`);