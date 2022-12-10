//Desenvolva um programa que tenha uma lista de compras dos itens de tecnologia que você deseja comprar futuramente. Em seguida, por meio do terminal, escreva mais 2 elementos que deseja inserir nessa listagem. Pela função splice, remova os 2 últimos elementos e adicione esses dois novos. Ao final, imprima a nova listagem na tela.


const prompt = require("prompt-sync")();

const tecnologia = ["Memoria", "Processador","Monitor","Placa de Video"];

tecnologia.splice(2, 2, "Placa Mãe", "Fone");



console.log(tecnologia);