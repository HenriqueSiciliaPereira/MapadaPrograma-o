//1. Crie uma solução na qual o usuário irá inserir o cadastro de 5 participantes de um evento, contendo nome e sobrenome e tipo de ingresso (Pista Gold, Pista Premium, Camarote). Utilizando o conceito do array.map, adicione as seguintes propriedades ao cadastro de cada participante: 
//a-) Nome completo (utilizando interpolação de strings)
//b-) Tipo de ingresso pista (string includes)
//c-) Tipo de ingresso formatado (toUpperCase e trim)


const prompt = require("prompt-sync")();

const usuario = new Array();
const ingresso = [];

for(let i = 0; i < 5; i++) {

  let participantes = new Object();

  participantes.nome = prompt("Digite seu nome: ");
  participantes.sobrenome = prompt("Digite seu sobrenome: ");
  participantes.ingressos = prompt("Digite o seu tipo de ingresso: ");
  
  usuario.push(participantes)
}

const nomeCompleto = usuario.map(function(nome)
{
  return nome.nome + nome.sobrenome;
});

console.log(nomeCompleto);

console.log("Ingresso: ", ingresso.includes("Pista Gold, Pista Premium, Camarote"));

console.log("Formatado: ", ingresso.trim(" "));