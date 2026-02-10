//Desafio

// Converta o Texto: " João, mariA, NicolaS, SocoRRo, zuLeiCa"
// em um Arrya no Seguinte Formato: [João,Maria,Nicolas,Socorro,Zuleica]

const mensagem = " João, mariA, NicolaS, SocoRRo, zuLeiCa";

// Passo 1: Separar o texto em um array usando a vírgula como delimitador
const arrayNomes = mensagem.split(",").map((nome) => nome.trim());
// Passo 2: Converter cada nome para a formatação correta (primeira letra maiúscula e o restante minúsculo)
const nomesFormatados = arrayNomes.map((nome) => {
  return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
});
console.log(nomesFormatados); // [ 'João', 'Maria', 'Nicolas', 'Socorro', 'Zuleica' ]

// Outro jeito de fazer

const texto = " João, mariA, NicolaS, SocoRRo, zuLeiCa";

//remover os espaços vazios (trim)
const textotrim = texto.trim();

//split - separa em array

const nomesSujos = textotrim.split(", ");

console.log(nomesSujos);

//vetor de 5 nomes
let nomesLimpo = [];

for (let i = 0; i < nomesSujos.length; i++) {
  nomesLimpo[i] =
    nomesSujos[i].charAt(0).toUpperCase() + nomesSujos[i].slice(1).toLowerCase();
}

console.log(nomesLimpo); 