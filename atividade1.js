const promptSync = require('prompt-sync');
const prompt = promptSync();

console.log("bem vindo ao hotel!!!")
console.log("para chamar nossos servisos, digite um dos numeros");
console.log("1- Para fazer Check-in")
console.log("2- Para fazer limpeza do quarto");
console.log("3- Para fazer um pedido no restaurante");
console.log("4- Para fazer check-up");
console.log("5- Para falar com a recepção");

let hotel = Number(prompt("O que você deseja?"))

switch(hotel){

    case 1:
        console.log("Vamos iniciar o seu Check-in!! Esperamos que tenha uma otima estadia");
        break
    case 2:
            let limpeza = prompt("informe o numero do seu quarto:");
            console.log("Em alguns minutos, nossa camareira estara em seu quarto")
         break
    case 3:
            console.log("Este é o nosso menu do dia: ");
            console.log("1- frago a milanesa com suco ou refri");
            console.log("2- feijoada com suco ou refri");
            console.log("3-macarronada com suco ou refri");
    
            let restaurante = Number(prompt("O que você deseja no nosso restaurante? "));
            
            switch(restaurante) {
                case 1: 
                console.log("você escolheu o frago a milanesa. o preço dele é de R$15,00");
                
                let suco = prompt("Você deseja refrigerante ou suco? ")
                
                if (suco === "suco"){
                  console.log("Escolha umas das opcões de suco: ");
                  console.log("1- suco de laranja");
                  console.log("2-suco de limão");
                  console.log("3-suco de acerola com laranja");
                   
                  let escolha = Number(prompt("Faça sua escolha aqui: "));

                  switch (escolha) {
                      case 1: 
                      console.log("você escolheu suco de laranja. o preço dele é de R$5,00");
                         let pedi =prompt("Informe o numero do seu quarto: ");
                         console.log("levaremos em alguns minutos");
                      break
                      case 2:
                          console.log("você escolheu o suco de limão, o preço dele é de R$6,00");
                          let pe =prompt("Informe o numero do seu quarto: ");
                          console.log("levaremos em alguns minutos");     

                          break
                       case 3: 
                       console.log("você escolheu oo suco de acerola com laranja,o preço dele é de R$7,00");
                       let pedid =prompt("Informe o numero do seu quarto: ");
                       console.log("levaremos em alguns minutos");

                          

                       default:
                          console.log("essa opção não esta disponivel no momento!");
                        } 
                        } else{
                            let ped =prompt("Informe o numero do seu quarto: ");
                            console.log("levaremos em alguns minutos")
                        }
                break
                case 2:
                    console.log("você escolheu a feijoada, o preço dela é de R$18,00");


                    let bebida = prompt("você deseja refrigerante ou suco? ")
                
                if (bebida === "suco"){
                  console.log("escolha umas das opcões de suco: ");
                  console.log("1- suco de laranja");
                  console.log("2-suco de limão");
                  console.log("3-suco de acerola com laranja");
                   
                  let escolha = Number(prompt("faça sua escolha aqui:"));

                  switch (escolha) {
                      case 1: 
                      console.log("você escolheu suco de laranja. o preço dele é de R$5,00");
                         let pedi =prompt("Informe o numero do seu quarto:");
                         console.log("levaremos em alguns minutos");
                      break
                      case 2:
                          console.log("você escolheu o suco de limão, o preço dele é de R$6,00");
                          let pe =prompt("Informe o numero do seu quarto:");
                          console.log("levaremos em alguns minutos");     

                          break
                       case 3: 
                       console.log("você escolheu oo suco de acerola com laranja,o preço dele é de R$7,00");
                       let pedid =prompt("Informe o numero do seu quarto:");
                       console.log("levaremos em alguns minutos");

                          

                       default:
                          console.log("essa opção não esta disponivel no momento!");
                        } 
                        } else{
                            let ped =prompt("Informe o numero do seu quarto:");
                            console.log("levaremos em alguns minutos")
                        }

                        break
                 case 3: 
                 console.log("você escolheu a macarronada ,o preço dele é de R$10,00");

                 let bebidaa = prompt("você deseja refrigerante ou suco? ")
                
                if (bebidaa === "suco"){
                  console.log("escolha umas das opcões de suco: ");
                  console.log("1- suco de laranja");
                  console.log("2-suco de limão");
                  console.log("3-suco de acerola com laranja");
                   
                  let escolha = Number(prompt("faça sua escolha aqui:"));

                  switch (escolha) {
                      case 1: 
                      console.log("você escolheu suco de laranja. o preço dele é de R$5,00");
                         let pedi =prompt("Informe o numero do seu quarto:");
                         console.log("levaremos em alguns minutos");
                      break
                      case 2:
                          console.log("você escolheu o suco de limão, o preço dele é de R$6,00");
                          let pe =prompt("Informe o numero do seu quarto:");
                          console.log("levaremos em alguns minutos");     

                          break
                       case 3: 
                       console.log("você escolheu oo suco de acerola com laranja,o preço dele é de R$7,00");
                       let pedid =prompt("Informe o numero do seu quarto:");
                       console.log("levaremos em alguns minutos");


                       default:
                          console.log("essa opção não esta disponivel no momento!");
                        } 
                        } else{
                            let ped =prompt("Informe o numero do seu quarto:");
                            console.log("levaremos em alguns minutos")
                        }
                 
                 
                 default:
                    console.log("essa opção não esta disponivel no momento!");
            }

        break
    case 4:
        console.log("Vamos iniciar seu Check-up! Esperamos que tenha gostado");
        let ava = Number(prompt("De 0 a 5, quanto você avalia nosso hotel"));
         
        break
    case 5:
        let. recepiçao = prompt("o que você deseja?");
        break
    default:
    console.log("essa opcão não existe");
}