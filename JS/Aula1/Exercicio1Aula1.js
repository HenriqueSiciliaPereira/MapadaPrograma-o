//Escreva um programa que irá cadastrar um aluno em um sistema escolar. Para isso, peça o usuário que insira: Nome Completo, Idade, Número da Matricula.
//Em seguida, imprima as informações na tela.


const prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");
let matricula = prompt("Número da matricula: ")

console.log("-----------------");
console.log("-----SISTEMA ESCOLAR----");
console.log("-----------------");
console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Matrícula: ", matricula);