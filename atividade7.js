promptSync = require('prompt-sync');
const prompt = promptSync();

let valorProduto = Number(prompt("Digite o valor do produto:"));
let formaPagamento =Number(prompt("Escolha a forma de pagamento:\n1. À vista\n2. À prazo"));

let valorFinal;

if (formaPagamento === 1) {
    valorFinal = valorProduto * 0.9;
    console.log("Valor final com desconto: R$" + valorFinal.toFixed(2)); //O método toFixed(2) em JavaScript é utilizado para formatar um número com um número específico de casas decimais. No caso, toFixed(2) é usado para formatar o número com duas casas decimais.

} else if (formaPagamento === 2) {
    valorFinal = valorProduto;
    console.log("Valor final: R$" + valorFinal.toFixed(2));

} else {
    console.log("Forma de pagamento inválida. Por favor, escolha 1 para à vista ou 2 para à prazo.");
}
