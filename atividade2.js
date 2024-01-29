const promptSync = require('prompt-sync');
const prompt = promptSync();
  

let primeiro = Number(prompt("Digite seu primeiro operador:"));
let segundo = Number(prompt("Digite o segundo operador:"));

console.log("escolha qual vai ser sua operção entre +,-,*,/");


let operacao = prompt("escolha a sua operação:");

switch(operacao) {

    case '+' :
         console.log("Resultado é:" ,primeiro + segundo);
         break

         case '-' :
         console.log("Resultado é:" ,primeiro - segundo);
         break

         case '*' :
         console.log("Resultado é:" ,primeiro * segundo);
         break
           
         case '/' : 

           if(primeiro && segundo == 0 )  {
            console.log("Não é possivel realizar operção!");
          }else {
            console.log("Resultado é:" ,primeiro + segundo);
            
          }
          break

          default:
            console.log("não é possivel realizar operção!!");

   


}
 
