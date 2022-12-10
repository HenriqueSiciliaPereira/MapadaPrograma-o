//Crie um algoritmo que tenha uma listagem com os carros dos seus sonhos, contendo o nome e valor dos veículos, e deixe a listagem ordenada de acordo com o valor. Em seguida, pela função slice, separe em dois novos arrays os veículos que tem valor abaixo e acima de 100mil reais. Imprima na tela as duas listagens.


const prompt = require("prompt-sync")();

const veiculo = ["Corsa","Mercedes","Porshe", "Mustang"];

const preco = ["10,000","150,000","1,000,000","500,00"];

const baixoValor = veiculo.slice(0,1);

const altoValor = veiculo.slice(1,4);

console.log("Veiculos acima de 100k: ", altoValor);

console.log("Veiculos abaixo de 100k: ", baixoValor);