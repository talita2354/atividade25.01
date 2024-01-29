const promptSync = require('prompt-sync');
const prompt = promptSync();

let valor = Number(prompt("coloque o valor da sua compra R$"))

console.log("Veja os codigos e depois informe,para calcular o seu desconto");
console.log("1- Sou cliente comum.");
console.log("2-Sou funcionaria.");
console.log("3- Sou cliente VIP.");

let desconto = Number(prompt("Informe o que você é:"));

switch (desconto) {

            case 1:
                 console.log("Sinto muito, mas você não tem nenhum desconto,deseja se tornar VIP? ");
                 break
            
            case 2: 

            valorpagar = valor *(10/100)
            console.log("Você ira pagar R$", valorpagar );
            console.log("Seu codigo é: 2");
                break 
            
            case 3:
                
            valorpagar = valor *(5/100)
            console.log("Você ira pagar R$", valorpagar );
            console.log("Seu codigo é: 3");
                break
        
            default:
                



}