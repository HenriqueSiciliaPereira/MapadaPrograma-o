const prompt = require("prompt-sync")();

/*const funcionario = { // para inserir manualmente
  nome: "Henrique",
  idade: 30,
  cargo: "Programador",
  salario: 3000,
};

const{nome, idade, cargo, salario} = funcionario
console.log("--------------------");
console.log("Dados do funcionário: ");
console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Cargo: ", cargo);
console.log("Salário: ", salario);*/

/*const funcionario = new Object(); // para inserir valores

funcionario.nome = prompt("Digite o nome do funcionário: ");
funcionario.idade = prompt("Digite a idade do funcionário: ");
funcionario.cargo = prompt("Digite o cargo do funcionário: ");
funcionario.salario = prompt("Digite o salário do funcionário: "); 

const{nome, idade, cargo, salario} = funcionario
console.log("--------------------");
console.log("Dados do funcionário: ");
console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Cargo: ", cargo);
console.log("Salário: ", salario); */



/*const funcionario = { // Através da palabra "this" é possivel acessar uma propriedade do objeto dentro da função (método) do objeto
  nome: "Henrique",
  idade: 30,
  cargo: "Programador",
  salario: 3000,
  calcularSalarioAnual: function(){
    const salarioAnual = 13 * this.salario;
    return salarioAnual;
  }
};

const{nome, idade, cargo, salario} = funcionario
console.log("--------------------");
console.log("Dados do funcionário: ");
console.log("Nome: ", nome);
console.log("Idade: ", idade);
console.log("Cargo: ", cargo);
console.log("Salário: ", salario);
console.log("Salário Anual: ", funcionario.calcularSalarioAnual());*/


/*const carro = new Object() // Busca via parametro por String
carro.modelo = "Gol";
carro.marca = "Volkswagen";
carro.ano = 2017;
carro.cor = "Preto";
carro.valor = 35000;


let nomeDaPropriedade = prompt("Digite o nome da prorpiedado do carro que deseja saber: ");
console.log("--------------------");
console.log("Dados do carro: ");
console.log(carro[nomeDaPropriedade]);*/


const carro = new Object()
carro.modelo = prompt("Modelo: ");
carro.marca = prompt("Marca: ");
carro.ano = prompt("Ano: ");
carro.cor = prompt("Cor: ");
carro.valor = Number(prompt("Valor: "));
carro.financiamento = function (numeroParcelas){
  return this.valor / numeroParcelas;
}

console.log("--------------------");
console.log("Financiamento do carro: ");
let numeroParcelas = Number(prompt("Numero de parcelas: "));
let valorFinanciamento = carro.financiamento(numeroParcelas);
console.log("Valor das parcelas do financiamento: ", valorFinanciamento);