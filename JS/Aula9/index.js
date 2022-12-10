const prompt = require("prompt-sync")();

/* Criando array ja com elementos
const alunos = ["João", "Lucas","Anna","Helena","Marcos"];
console.log(alunos);*/

/*acessando elementos
const primeiroAluno = alunos[0];
console.log(primeiroAluno);*/

/*trocando aluno
alunos[0] = "Henrique";
console.log(alunos);*/

/* Criando array para inserir elementos
const alunos =new Array();


for(let i = 0; i < 5; i++) {
  let novoAluno = new Object();

  novoAluno.nome = prompt("Digite o nome do aluno: ");

  novoAluno.nota = prompt("Digite a nota: ");
  alunos[i] = novoAluno;
}

console.log("Listagem final de alunos: ", alunos);


console.log("Quantidade total de alunos: ", alunos.length);// tamanho do array

console.log("Ultimo aluno: ", alunos[alunos.length - 1]); // pegando um aluno*/

/*colocando um novo elemento no array (push coloca no final do array)

const nomeDasMarcas = new Array();
let i = 0;

do{
  let marca = prompt("Digite o nome da marca: ");
  nomeDasMarcas.push(marca);
  i++;

} while(i<5)

console.log("Listagem final: ", nomeDasMarcas);*/

/*colocando um novo elemento no array (unshift coloca no inicio do array)

const nomeDasMarcas = new Array();
let i = 0;

do{
  let marca = prompt("Digite o nome da marca: ");
  nomeDasMarcas.unshift(marca);
  i++;

} while(i<5)

console.log("Listagem final: ", nomeDasMarcas);*/

/* remover elementos do array

const nomeDasMarcas = ["nike", "adidas", "gucci", "prada", "balanceaga"];

nomeDasMarcas.pop(); // remove o ultimo elemento
nomeDasMarcas.shift(); // remove o primeiro elemento
console.log("Listagem final: ", nomeDasMarcas);*/

/*somando os arrays

const marcasEsportivas = ["nike", "adidas", "Under Armour", "Rebook"];

const marcasLuxo = ["Gucci", "Prada", "Balanceaga"];

const novoArray = marcasLuxo.concat(marcasEsportivas);

console.log(novoArray);*/

/* adiciona na posicao e remove tambem
const marcas = ["Gucci", "Prada", "Balanceaga"];

marcas.slice(1, 0, "Nike", "Adidas");
console.log(marcas);*/

const marcas = [
  "Gucci",
  "Prada",
  "Balanceaga",
  "Nike",
  "Adidas",
  "Under Armour",
  "Rebook",
];

const novoArray = marcas.slice(3, 5); // mostra os elementos
console.log(novoArray);

