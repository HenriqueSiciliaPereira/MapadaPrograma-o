const prompt = require("prompt-sync")();

/* adicionando notas em cada elemento do array

const notas = [7, 8.2, 5, 3.5, 9, 4];

for( let i = 0; i < notas.length; i++) {
  notas[i] = notas[i] + 1;
}

console.log(notas);*/

/* Juntando nome e sobrenome com array
const nomes = [
  {
    nome: "Henrique",
    sobrenome: "Sicilia",
},
{

  nome: "Beatriz",
  sobrenome: "Sicilia"
},
];

for( let i = 0; i < nomes.length; i++) {
  let nomeCompleto = nomes[i].nome + " " + nomes[i].sobrenome;

  console.log(nomeCompleto);
}*/



/*For of imprime cada elemento do array

const nomes = [
  {
    nome: "Henrique",
    sobrenome: "Sicilia",
},
{

  nome: "Beatriz",
  sobrenome: "Sicilia"
},
];

for(let pessoa of nomes) {
  const nomeCompleto = pessoa.nome + " " + pessoa.sobrenome;
  console.log(nomeCompleto);
}*/



/*Foreach interage com cada elemento do array

const itens = [
  {
    nome:"Arroz",
    valor: 12.99,
  },

  {
    nome:"Feijão",
    valor: 5.2,
  },

  {
    nome:"Sabão em pó",
    valor: 18.99,
  },

  {
    nome:"Picanha",
    valor: 48.95,
  },
];

itens.forEach(function(elemento,index){
  elemento.valor = elemento.valor - 2;
}
);

console.log(itens);*/



/*Sort realiza ordenação do array

const numero = [1, 7, 10, 356, 2, 6, 4, 25]
numero.sort(function(n1, n2){
  return n1 - n2 // forma crescente
  return n2 - n1// forma descrescente
}
);
console.log(numero);*/


//Sort com String
const itens = [
  {
    nome:"Arroz",
    valor: 12.99,
  },

  {
    nome:"Feijão",
    valor: 5.2,
  },

  {
    nome:"Sabão em pó",
    valor: 18.99,
  },

  {
    nome:"Picanha",
    valor: 48.95,
  },
];

const ordenado = itens.sort(function(e1 , e2){
  return e1.valor - e2.valor // ordem crescente
}
);

console.log(itens)