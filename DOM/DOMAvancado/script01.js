//criando elementos para a página index

//clonando elemento com DOM

let card = document.createElement("div");
card.classList.add("card"); //add a classe card ao meu div
//criar um conatiner para add os cards
let container = document.createElement("div");
container.classList.add("container"); //add a class container ao div

//botão para clonar elementos
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar"; // add texto ao botão
btnClonar.id = "btnClonar"; //add um id ao botão

//add elementos à página
document.body.appendChild(btnClonar);
document.body.appendChild(container); // add container ao body
container.appendChild(card); //add card ao container

//add um evento ao botão
btnClonar.addEventListener("click", () => {
  let clonar = card.cloneNode(true); //clonaro obj card
  container.appendChild(clonar);
});

// Crie o input e a label
let chave = document.createElement("input");
chave.type = "checkbox";
chave.id = "darkMode";

let labelChave = document.createElement("label");
labelChave.setAttribute("for", "darkMode");
labelChave.classList.add("switch-label");
labelChave.innerHTML = "☀️"; // Ícone inicial

// Adicionar ao body
document.body.appendChild(chave);
document.body.appendChild(labelChave);

// Evento de troca
chave.addEventListener("change", () => {
  document.body.classList.toggle("darkMode");
  labelChave.innerHTML = chave.checked ? "🌙" : "☀️";
});
