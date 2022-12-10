//Para uma criança participar das aulas de natação do colégio, ela deve ter menos de 10 anos e estar na série 5. Desenvolva um sistema em que o usuário insira a idade da criança e também a respectiva série. Em seguida, imprima se poderá ou não participar das aulas de natação.

const prompt = require("prompt-sync")();

let idade = prompt("Digite a sua idade: ");
let serie = prompt("Digite em qual série está: ");
let condicao = idade < 10 && serie == 5;

console.log("A criança poderá participar das aulas de natação: ", condicao);
