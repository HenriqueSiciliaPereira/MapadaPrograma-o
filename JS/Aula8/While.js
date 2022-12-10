//Crie uma solução utilizando o comando while um sistema que leia nome de países. A cada loop, identifique, por meio de uma função, se esse país faz parte da América do Sul e apresente essa informação para o usuário. Em seguida, pergunte se ele deseja continuar (s para continuar, qualquer outra tecla para parar).


const prompt = require("prompt-sync")();

const paisEDaAmericaDoSul = ("Argentina, Bolívia, Brasil, Chile, Colômbia, Equador, Guiana, França (Guiana Francesa), Paraguai, Peru, Suriname, Uruguai e Venezuela");
function checarPaises(paises) {
  return paises === paisEDaAmericaDoSul;
}

let continuaOLoop = "s";
while(continuaOLoop == "s") {
  let paises = prompt("Digite nomes de paises: ");
  let paisEDaAmericaDoSul = checarPaises(paises);
  console.log("O pais ", paises, "é da America do Sul: ", paisEDaAmericaDoSul);
  continuaOLoop = prompt("Digite s para continuar ou qualquer outro caracter para parar: ");
} 
