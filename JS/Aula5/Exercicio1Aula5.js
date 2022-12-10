//Para um clube europeu ter chances de se classificar para Champions League, ele deverá ter feito mais de 60 pontos durante o campeonato. Caso tenha feito mais de 75, as chances são maiores. Desenvolva uma solução que leia o nome e pontuação do time. Em seguida, usando as estruturas condicionais, caso a pontuação seja maior do que 75, imprima “Excelentes chances de classificação”. Caso entre 60 e 75, imprima “Boas chances de se classificar". Caso contrário: “Chances baixas de se classificar”.

const Prompt = require("prompt-sync")();

let nomeclub = Prompt("Digite o nome do clube: ");
let pontuacao = Prompt("Digite a pontuacao do clube: ");

if (pontuacao > 75){
  console.log(nomeclub, "Tem excelentes chances de classificação");
} else if(pontuacao >= 60 && pontuacao <= 75){
  console.log(nomeclub, "Tem boas chances de se classificar");
} else {
  console.log(nomeclub, "Tem chances baixas de se classificar")
}