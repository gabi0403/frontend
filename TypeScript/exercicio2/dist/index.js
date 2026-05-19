"use strict";
// Crie uma interface Estudante com as propriedades: nome (string) e notas (um array de números: number[]).
// Crie uma função chamada calcularMedia que receba um Estudante, calcule a média de suas notas e exiba no console o nome do aluno, sua média formatada e se ele foi Aprovado (média maior ou igual a 7) ou Reprovado.
// Crie um objeto de teste para validar o funcionamento.
function calcularMedia(estudante) {
    const soma = estudante.notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / estudante.notas.length;
    const status = media >= 7 ? "Aprovado" : "Reprovado";
    console.log(`Aluno: ${estudante.nome}`);
    console.log(`Média: ${media.toFixed(2)}`);
    console.log(`Status: ${status}`);
}
;
//obj de teste
const estudante1 = {
    nome: "Evelyn",
    notas: [9, 8, 9.5, 10]
};
calcularMedia(estudante1);
