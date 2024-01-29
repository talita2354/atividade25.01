const promptSync = require('prompt-sync');
const prompt = promptSync();

let sexo = prompt("Digite o sexo (M para Masculino, F para Feminino):");
let peso = Number(prompt("Digite o peso:"));


let pesoIdeal;
if (sexo.toUpperCase()  === 'M') {  //O método .toUpperCase() em JavaScript é utilizado para converter uma string em maiúsculas. No exemplo fornecido, é utilizado para garantir que a entrada do usuário para o sexo seja insensível a maiúsculas/minúsculas, ou seja, independentemente de o usuário digitar 'M' ou 'm', o programa trata ambas as entradas da mesma forma. Isso ajuda a tornar a comparação de strings mais robusta.
    
    pesoIdeal = (peso - 100) * 0.85;
    console.log("o seu peso ideal em kg é:", pesoIdeal);
    console.log("Opção: Masculino"); 

} else if (sexo.toUpperCase() === 'F') {
    
    pesoIdeal = (peso - 100) * 0.09;
    console.log("o seu peso ideal em kg é:", pesoIdeal);
    console.log("Opção: Feminino");

} else {
    console.log("Opção inválida."); // formulaq de peso ideal esta incorreta,porem fiz como esta no exercício 
}