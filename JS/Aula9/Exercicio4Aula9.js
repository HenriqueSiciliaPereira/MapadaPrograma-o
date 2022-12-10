//Escreva um programa no qual o usuário irá inserir uma listagem inicial com o nome de 4 filmes que gostaria de assistir. Em seguida, solicite ao usuário o nome de 4 séries que gostaria de assistir. Em uma nova variável, salve o conjunto dos dois arrays e imprima o resultado na tela.


const prompt = require("prompt-sync")();

const assistir = new Array();

const filme = [];
const serie = [];

for (let i = 0; i < 4; i++) {

  let assistirfilmes = prompt("Digite o nome do filme que deseja assitir: ");

  filme[i] = assistirfilmes;

  let assistirseries = prompt("Digite o nome da serie que deseja assistir: ");

  serie[i] = assistirseries;
}
  
console.log("Filmes que gostaria de assistir: " , filme);
console.log("Series que gostaria de assistir: " , serie);