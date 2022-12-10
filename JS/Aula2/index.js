const prompt = require("prompt-sync")();

let velocidade = Number(prompt("Digite sua velocidade em km/h: "));
let horas = Number(prompt("Digite o tempo percorrido (em horas): "));
let distancia = velocidade * horas;

console.log("Distancia percorrida: " + distancia + "km")




//let n1 = Number (prompt("Digite o 1 numero: "));
//let n2 = Number (prompt("Digite o 2 numero: "));

/*console.log("Soma = ", n1 + n2);
console.log("Subtração = ", n1 - n2);
console.log("Multiplicação = ", n1 * n2);
console.log("Divisão = ", n1 / n2);
console.log("Modulo = ", n1 % n2);
console.log("Exponenciação = ", n1 ** n2);*/

/*console.log("Ação do decremento: ", n1--);
console.log("Após o decremento: ", n1);
console.log("Decremento imediato: ", --n1);

console.log("Ação do incremento: ", n1++);
console.log("Após o incremento: ", n1);
console.log("Incremento imediato: ", ++n1);*/

/*console.log("Adição com 5", (n1 += 5));
console.log("Divisão com 5", (n1 /= 5));
console.log("Modulo com 5", (n1 %= 5));*/
