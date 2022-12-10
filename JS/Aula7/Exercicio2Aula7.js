//2. Desenvolva um sistema que salve em um objeto uma receita de bolo, seguindo as seguintes informações:
//a-) Nome da receita
//b-) Ingredientes
//c-) Passos para a receita
//Em seguida, crie um método dentro do objeto que imprima na tela os dados da receita.


const prompt = require("prompt-sync")();

const receitaBolo = {
  nomeReceita: prompt("Qual o nome da receita: "),
  ingredientes: prompt("Quais os ingredientes? "),
  passosDaReceita: prompt("Quais os passos para fazer a receita? "),
  lista: Number(prompt("Quantas pessoas vão comer? ")),

  }

  const{nomeReceita, ingredientes, passosDaReceita,lista} = receitaBolo
  console.log("A receita é: ", nomeReceita);
  console.log("Os ingredientes são: ", ingredientes);
  console.log("Os passos para fazer a receita são: ", passosDaReceita);
  console.log("A quantidade de pessoas é: ", lista);
