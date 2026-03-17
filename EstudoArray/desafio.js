// Calculadora de Média
// Crie um formulário onde o usuário insira notas.
// Armazene essas notas em um array.
// Use o método reduce para calcular a média e exiba o resultado na tela.

var prompt = require("prompt-sync")();

let notas = [];
console.log("Digite as notas dos alunos:");
for(let i=0; i<5; i++){
    let nota = parseFloat(prompt(`Digite a nota ${i+1}: `));
    if(nota < 0 || nota > 10){
        console.log("Nota inválida! Digite uma nota entre 0 e 10.");
        i--; // decrementa o índice para repetir a iteração
        continue;
    }
    notas.push(nota);
}
let media = notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
media = Math.round(media * 100) / 100;
console.log(`A média das notas é: ${media}`);
