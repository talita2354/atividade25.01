promptSync = require('prompt-sync');
const prompt = promptSync();

let numeroCriançasNascidas = Number(prompt("Digite o número de crianças nascidas:"));
let numeroObitos = Number(prompt("Digite o número de óbitos:"));
let numeroHabitantes = Number(prompt("Digite o número de habitantes:"));

let escolha = prompt("Escolha a opção:\n1. Calcular Taxa de Natalidade\n2. Calcular Taxa de Mortalidade");

let resultado;

switch (escolha) {
    case "1":
        resultado = (numeroCriançasNascidas * 1000) / numeroHabitantes;
        console.log("Taxa de Natalidade: " + resultado.toFixed(2) + " por mil habitantes");
        break;
    case "2":
        resultado = (numeroObitos * 1000) / numeroHabitantes;
        console.log("Taxa de Mortalidade: " + resultado.toFixed(2) + " por mil habitantes");
        break;
    default:
        console.log("Opção inválida. Por favor, escolha 1 para calcular Taxa de Natalidade ou 2 para calcular Taxa de Mortalidade.");
}
