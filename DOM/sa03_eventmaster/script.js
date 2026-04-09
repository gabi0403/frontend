const form = document.getElementById("formulario-evento");
const lista = document.getElementById("lista-presenca");
const erro = document.getElementById("mensagem-erro");
const btnTema = document.getElementById("alternar-tema");

// modo escuro
btnTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// a tecla esc limpa todo o formulario
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    form.reset();
    erro.innerText = "";
  }
});

//ao clicar em enviar, impedir o envio padrão (preventDefault)
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // pegando valores
  const nome = document.getElementById("campo-nome").value;
  const email = document.getElementById("campo-email").value;
  const cpf = document.getElementById("campo-cpf").value;
  const empresa = document.getElementById("campo-empresa").value;
  const ingresso = document.getElementById("campo-ingresso").value;

  // validação dos campos (se tá tudo preenchido)
  if (
    nome === "" ||
    email === "" ||
    cpf === "" ||
    empresa === "" ||
    ingresso === ""
  ) {
    // mensagem de erro
    erro.innerText = "Erro: Todos os campos são obrigatórios!";
  } else {
    erro.innerText = ""; // limpa erro se estiver tudo certo

    //card do convidado
    const divCard = document.createElement("div");
    divCard.className = "card-item";

    divCard.innerHTML = `
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>CPF:</strong> ${cpf}</p>
            <p><strong>Empresa:</strong> ${empresa}</p>
            <p><strong>Ingresso:</strong> ${ingresso}</p>
        `;

    //botão de remover 
    const btnRemover = document.createElement("button");
    btnRemover.innerText = "Remover Convidado";
    btnRemover.className = "btn-remover";

    // excluir convidado da lista
    btnRemover.addEventListener("click", function () {
      divCard.remove();
    });

    divCard.appendChild(btnRemover);
    lista.appendChild(divCard);

    // se deu certo, limpa todos os campos
    form.reset();
  }
});
