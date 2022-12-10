//Desenvolva uma sistema que através de uma função apresente a conversão do real para dólar, euro e libra, utilizando o switch case

const prompt = require("prompt-sync")();

function converteMoeda(valor, moeda) {
  let valorConvertido;
   switch(moeda) {
    case 'dolar': {
      valorConvertido = valor / 5.2
      break;
    }
  
    case 'libra': {
     valorConvertido = valor / 6.2
      break;
    }
  
    case 'euro': {
      valorConvertido = valor / 5.9
      break;
    }
  
    default:
      valorConvertido = 0;
   }
   return valorConvertido
  }




