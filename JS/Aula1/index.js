const prompt = require('prompt-sync')();

let nome = prompt("Qual é o seu nome? ");
let idade = prompt("Idade: ");
let contratado = false;
let pagamento = null;
let cargo;

console.log("-------------------")
console.log(" Dados da ficha: ")
console.log("-------------------")
console.log("Nome do funcionário: ", nome);
console.log("Idade: ", idade);
console.log("Já foi contratado: ", contratado);
console.log("Pagamento a receber: ", pagamento);
console.log("cargo: ", cargo);