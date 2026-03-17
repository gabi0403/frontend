// DOM -> Document Object Model

//Script de Manipulação DOM

//getElementById -> variável simples - Id é sempre único
// usar sempre o document para manipular o dom
let titulo = document.getElementById("titulo"); // busca no html o elemento com a id correspondente
console.log(titulo); // mostra a informação da id
titulo.innerText = "Outro Título para o Site"; // modifica o conteúdo da id

//getElementByTagName -> Vetor (Array) de elementos
let paragrafos = document.getElementsByTagName("p"); // busca no html o elemento com a tag correspondente
paragrafos[0].innerText = "Exemplo de parágrafo modificado por DOM"; // modifica o conteúdo do primeiro elemento do vetor
paragrafos[1].style.color = "red"; // modificar o style do elemento

//getElementByClassName -> Vetor de elementos
let descricao = document.getElementsByClassName("descricao");
//modificar elementos do array
for (let i = 0; i < descricao.length; i++) {
  descricao[i].style.color = "blue";
}

//querySelector -> variavel simples = seleciona sempre o primeiro elemento com a seletor
let p = document.querySelector("p");
//modificar a fonte
p.style.fontWeight = "bold";

//querySelectorAll -> Vetor de Elementos -> seleciona todos os elementos
let descricaoAll = document.querySelectorAll(".descricao");
descricaoAll.forEach((e) => (e.style.fontWeight = "bold"));

//eventos Listener (ouvintes)

//chamar pelo nome da função
function MudarCorFundo() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "green";
}

//chamar diretamente no script o ouvinte
document.getElementById("btnColor").addEventListener("click", OutraCor);

function OutraCor() {
  let body = document.querySelector("body");
    body.style.backgroundColor = "orange";
}
