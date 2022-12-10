//Desenvolva um sistema que leia a idade do usuário. Caso a idade seja maior que 70 anos, imprima a mensagem “Idoso”, caso entre 30 e 70: “Adulto”, entre 20 e 30: “Jovem Adulto”, entre 15 e 20: “Jovem”, menor do que 15: “Criança ou adolescente”

const Prompt = require("prompt-sync")();

let idade = Number(Prompt("Digite a sua idade: "));

if (idade > 70){
  console.log("Idoso");
} else if(idade >= 30 && idade <= 70){
  console.log("Adulto");
} else if(idade >= 20 && idade < 30){
  console.log("Jovem Adulto");
} else if(idade >= 15 && idade < 20){
  console.log("Jovem");
} else{
  console.log("Criança ou Adolescente");
}