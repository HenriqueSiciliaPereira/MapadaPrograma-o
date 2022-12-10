const prompt = require("prompt-sync")();

/*const date = new Date();// data de hoje
const date2 = new Date("2022-12-24");
console.log(date);
console.log(date2.toString());
console.log(date2.toDateString());
console.log(date2.toUTCString());
console.log(date2.toISOString());
console.log(date2.toLocaleDateString());// a partir de onde voce está

console.log(date2.getTime());
console.log(date2.getDate());

const mudandoHora = date.setHours(20);// Seters mudam os dados
console.log(new Date(mudandoHora).toString());*/


//Exemplo Ifood

const horaEMinutos = prompt("Digite a hora e minuto do pedido no formato: HH:mm -");

const splitado = horaEMinutos.split(":");
const hora = Number(splitado[0]);
const minutos = Number(splitado[1]);

const dataAtual = new Date();
dataAtual.setHours(hora);
dataAtual.setMinutes(minutos);
console.log(`Pedido confirmado em ${dataAtual.toString()}`);

const tempoDeEntrega = Number(prompt("Digite os minutos de entrega: "));
const minutosTotais = tempoDeEntrega + minutos;

let dataEntrega = dataAtual;

if(tempoDeEntrega + minutos > 60) {
  const minutosExcedentes = minutosTotais - 60;
  dataEntrega.setHours(hora + 1);
  dataEntrega.setMinutes(minutosExcedentes);
} else {
  dataEntrega.setMinutes(minutosTotais);
}
console.log(`Data de entrega: ${dataEntrega.toString()}`);
