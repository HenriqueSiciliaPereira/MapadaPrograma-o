const prompt = require("prompt-sync")();

/* usando Map cria um novo array, realizando uma função em cada elemento do array
const alunos = [{

  nome: "Henrique",
  sobrenome: "Sicilia",
  nota: 9,
},

{

  nome: "Beatriz",
  sobrenome: "Sicilia",
  nota: 10,
},

{

  nome: "Anna",
  sobrenome: "Sicilia",
  nota: 8,
},
];

const novosAlunos = alunos.map(function(item)
{
  return {
    ...item, // copia todas as propriedades do item para o novo objeto
    nomeCompleto: item.nome + " " + item.sobrenome,
  };

});

console.log(novosAlunos);*/


/*Usando filter

const alunos = [{

  nome: "Henrique",
  sobrenome: "Sicilia",
  nota: 9,
},

{

  nome: "Beatriz",
  sobrenome: "Sicilia",
  nota: 10,
},

{

  nome: "Anna",
  sobrenome: "Sicilia",
  nota: 8,
},
];

const novosAlunos = alunos.filter(function(item)
{
  return item.nota >= 8;
});

console.log(novosAlunos);*/


/* Usando reduce cria um novo array, passando por cada elemento para reduzir os valores em um valor


const alunos = [{

  nome: "Henrique",
  sobrenome: "Sicilia",
  nota: 9,
},

{

  nome: "Beatriz",
  sobrenome: "Sicilia",
  nota: 10,
},

{

  nome: "Anna",
  sobrenome: "Sicilia",
  nota: 8,
},
];

const somaNotas = alunos.reduce(function(total,item)
{
  return total + item.nota;
}, 0);

console.log(somaNotas);*/




/*Usando every

const alunos = [{

  nome: "Henrique",
  sobrenome: "Sicilia",
  nota: 9,
},

{

  nome: "Beatriz",
  sobrenome: "Sicilia",
  nota: 10,
},

{

  nome: "Anna",
  sobrenome: "Sicilia",
  nota: 8,
},
];

const todasNotasMaioresQue8 = alunos.every(function(item)
{
  return item.nota > 8;
});

console.log(todasNotasMaioresQue8);*/


/*Usando some

const alunos = [{

  nome: "Henrique",
  sobrenome: "Sicilia",
  nota: 9,
},

{

  nome: "Beatriz",
  sobrenome: "Sicilia",
  nota: 10,
},

{

  nome: "Anna",
  sobrenome: "Sicilia",
  nota: 8,
},
];

const alguemTirou10 = alunos.some(function(item)
{
  return item.nota > 9;
});

console.log(alguemTirou10);*/


/*Usando indexOf

const alunos = [{

  nome: "Henrique",
  sobrenome: "Sicilia",
  nota: 9,
},

{

  nome: "Beatriz",
  sobrenome: "Sicilia",
  nota: 10,
},

{

  nome: "Anna",
  sobrenome: "Sicilia",
  nota: 8,
},
];
const notas = alunos.map(function(item)
{ 
  return item.nota;
});


const indexNota8 = alunos.indexOf(8);

console.log(indexNota8);*/



/*Usando find

const alunos = [{

  nome: "Henrique",
  sobrenome: "Sicilia",
  nota: 9,
},

{

  nome: "Beatriz",
  sobrenome: "Sicilia",
  nota: 10,
},

{

  nome: "Anna",
  sobrenome: "Sicilia",
  nota: 8,
},
];

const alunoNota8 = alunos.find(function(item)
{
  return item.nota === 8;
});

console.log(alunoNota8);*/


//Usando findIndex

const alunos = [{

  nome: "Henrique",
  sobrenome: "Sicilia",
  nota: 9,
},

{

  nome: "Beatriz",
  sobrenome: "Sicilia",
  nota: 10,
},

{

  nome: "Anna",
  sobrenome: "Sicilia",
  nota: 8,
},
];

const index = alunos.findIndex(function(item)
{
  return item.nome === "Henrique";
});

console.log(index);