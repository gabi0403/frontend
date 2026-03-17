// logica de funcionamento de lista de tarefas

//criar um ouvinte para a tarefa
let btnEnviar = document.getElementById("btnEnviar"); // onj para controlar o botão
let tarefa = document.getElementById("tarefa"); // obj para controlar o input

btnEnviar.addEventListener("click", criarTarefa);

//criar a função para criar a tarefa
function criarTarefa() {
  let texto = tarefa.value.trim();
  //verificar se tarefa não está vazia
  if (texto == "") {
    return; // se estiver vazia, não faz nada
  }
  //se não estiver vazia -> não precisa do else -> vai continuar o código se o texto não for vazio
  let li = document.createElement("li"); // criação de um list item
  li.innerHTML =
    texto +
    '<button onclick="removerTarefa(this)" class="btnRemove">Remover</button>';
  //adicionar li -> ul
  let ul = document.getElementById("lista");
  ul.appendChild(li); // adicionar o li a ul via hierarquia
  //limpa o campo do input
  tarefa.value = "";
}

function removerTarefa(botao) {
  botao.parentElement.remove(); // remove o elemento pai do botão, que é o li
}

//estilizando pelo DOM
document.body.style.backgroundColor = "#634f3d";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Comic Sans MS";

let container = document.querySelector(".container");
container.style.width = "50%";
container.style.backgroundColor = "#5a8f66";
container.style.margin = "auto";
container.style.borderRadius = "15px";

tarefa.style.width = "50%";
tarefa.style.padding = "10px";
tarefa.style.borderRadius = "5px";

btnEnviar.style.padding = "6px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.background = "green";
btnEnviar.style.color = "white";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.cursor = "pointer";

let lista = document.getElementById("lista");
lista.style.listStyleType = "none";