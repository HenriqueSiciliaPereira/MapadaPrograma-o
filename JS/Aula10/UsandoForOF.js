//Utilizando o comando for of passe por cada elemento de uma listagem de clientes de uma empresa. Cada dado de cliente deve conter: nome do cliente, 2 dois saldos a receber (saldo1, saldo2). Calcule o saldo total de cada cliente, adicione essa nova propriedade ao elemento respectivo da lista. Ao final, imprima toda listagem na tela.


const prompt = require("prompt-sync")();

const clientes = [
  {
    nome: "Bradesco",
    saldo1: 1000,
    saldo2: 500,
},

{
  nome: "Itaú",
  saldo1: 2000,
  saldo2: 200,
},
];

for(let saldo of clientes) {
  saldo.total = saldo.saldo1 + saldo.saldo2;
  
}

console.log(clientes);

