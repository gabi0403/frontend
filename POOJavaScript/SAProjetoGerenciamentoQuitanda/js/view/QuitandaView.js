// classe pra organização da interface
export class QuitandaView {
  constructor() { // cria e inicializa objetos a partir de uma classe
    // entradas de dados
    this.nomeInput = document.getElementById("nomeInput");
    this.catInput = document.getElementById("catInput");
    this.precoInput = document.getElementById("precoInput");
    this.qtdInput = document.getElementById("qtdInput");

    // Botão de cadastrar
    this.btnAdicionarProduto = document.getElementById("addProdutoBtn");

    // onde as informações vão aparecer na tela (UL e P)
    this.mensagem = document.getElementById("mensagem");
    this.listaEstoque = document.getElementById("listaEstoque");
    this.listaHistorico = document.getElementById("listaHistorico");
  }

  // pegar os valores digitados nos inputs
  pegarDadosProduto() {
    return {
      nome: this.nomeInput.value.trim(),
      categoria: this.catInput.value.trim(),
      preco: this.precoInput.value.trim(),
      quantidade: this.qtdInput.value.trim(),
    };
  }

  // Limpar todos os inputs após o cadastro
  limparInputs() {
    this.nomeInput.value = "";
    this.catInput.value = "";
    this.precoInput.value = "";
    this.qtdInput.value = "";
  }

  // Mostrar mensagem de sucesso ou erro no parágrafo
  mostrarMensagem(texto, tipo = "sucesso") {
    this.mensagem.textContent = texto;

    // Muda a cor dependendo se é erro ou sucesso (usando classes do css)
    if (tipo === "erro") {
      this.mensagem.className = "msg-erro";
    } else {
      this.mensagem.className = "msg-sucesso";
    }

    // Apaga a mensagem automaticamente depois de 4 segundos
    setTimeout(() => this.limparMensagem(), 4000);
  }

  // Limpar o texto do parágrafo de mensagem
  limparMensagem() {
    this.mensagem.textContent = "";
    this.mensagem.className = "";
  }

  // Renderizar a lista de produtos (estoque) na UL
  renderizarEstoque(produtos, funcaoVender, funcaoAtualizar) {
    // Limpar a lista existente antes de recriar
    this.listaEstoque.innerHTML = "";

    // Se não tiver produtos, mostra um aviso
    if (produtos.length === 0) {
      this.listaEstoque.innerHTML = "<li>Estoque vazio...</li>";
      return;
    }

    // Laço de repetição para criar os itens da lista
    produtos.forEach((produto) => {
      const li = document.createElement("li"); // Cria a tag <li>

      // Cria a div de informações do produto
      const info = document.createElement("div");
      info.classList.add("info");
      info.innerHTML = `
                <span><strong>${produto.nome}</strong> (${produto.categoria})</span>
                <span>Preço: R$ ${produto.preco.toFixed(2)} | Estoque: ${produto.quantidade} un.</span>`;

      // Cria a div que vai guardar os botões
      const acoes = document.createElement("div");
      acoes.classList.add("action");

      // Cria o botão de reposição
      const btnAtualizar = document.createElement("button");
      btnAtualizar.textContent = "+ Entrada";
      btnAtualizar.classList.add("btn-atualizar");
      btnAtualizar.addEventListener("click", () =>
        funcaoAtualizar(produto.id, produto.nome),
      );

      // Cria o botão de venda
      const btnVender = document.createElement("button");
      btnVender.textContent = "- Venda";
      btnVender.classList.add("btn-vender");
      btnVender.addEventListener("click", () =>
        funcaoVender(produto.id, produto.nome),
      );

      // Adiciona os botões na div de ações
      acoes.appendChild(btnAtualizar);
      acoes.appendChild(btnVender);

      // Adiciona a div de info e a div de ações no <li>
      li.appendChild(info);
      li.appendChild(acoes);

      // Adiciona o <li> pronto na <ul> da tela
      this.listaEstoque.appendChild(li);
    });
  }

  // Renderizar a lista do histórico na tela
  renderizarHistorico(historico) {
    this.listaHistorico.innerHTML = ""; // limpa a lista

    if (historico.length === 0) {
      this.listaHistorico.innerHTML = "<li>Sem movimentações...</li>";
      return;
    }

    // Cria uma cópia invertida para mostrar o mais recente no topo
    const historicoInvertido = [...historico].reverse();

    historicoInvertido.forEach((movimentacao) => {
      const li = document.createElement("li");
      li.classList.add("historico-item");

      // texto do histórico
      li.innerHTML = `<span>[${movimentacao.data}] <strong>${movimentacao.tipo}</strong>: ${movimentacao.produto} (Qtd: ${movimentacao.quantidade})</span>`;

      this.listaHistorico.appendChild(li);
    });
  }
}
