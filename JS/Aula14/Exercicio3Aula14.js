//1. Desenvolva um sistema que irá cadastrar as 5 corridas inicias de um motorista de aplicativo. Os dados inseridos devem ser:
//a-) Horário de início da corrida
//b-) Distância em km
//c-) Tempo até o destino
//d-) Valor da corrida

//Em seguida, formate os dados, adicionado a propriedade de horário final de chegada ao destino e também o valor da corrida. Por fim, apresente os dados formatados, o valor total das soma das corridas e também a soma de distância percorrida.

const prompt = require("prompt-sync")();


try {
  const formataEstoque = (estoque) => {
    return estoque.map((item) => ({
      ... item,
      preco: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(item.preco),
      
    }));
  }

  const validaDados = (itemEstoque) => {
    if(itemEstoque.preco <= 0){

      throw "Preço não pode ser zero ou negativo";
    }
  }



  const estoque = new Array();

for(let i = 0; i < 5; i++) {
  
  const item = new Object();
  console.log("Corridas iniciais de um motorista de App: ");

  const horaEMinutos = prompt("Digite a hora e minuto do inicio da corrida no formato: HH:mm ");

  const splitado = horaEMinutos.split(":");
  const hora = Number(splitado[0]);
  const minutos = Number(splitado[1]);



  item.distancia = prompt("Digite a distancia em Km: ");

  const tempoDeCorrida = Number(prompt("Digite os minutos até o destino: "));

  const minutosTotais = tempoDeCorrida + minutos;

  if(tempoDeCorrida + minutos > 60) {
    const minutosExcedentes = minutosTotais - 60;
    tempoDeCorrida.setHours(hora + 1);
    tempoDeCorrida.setMinutes(minutosExcedentes);
  } else {
    tempoDeCorrida.setMinutes(minutosTotais);
  }
  
  item.valorCorrida = prompt("Preço da corrida: ");
  validaDados(item);
  estoque.push(item);
}
  const estoqueFormatado = formataEstoque(estoque);
  console.table(estoqueFormatado);

} catch (error) {
  console.log("Erro no sistema: ", error);
}