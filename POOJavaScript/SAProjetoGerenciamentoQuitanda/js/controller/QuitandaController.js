// Classe controller para realizar a comunicação entre o model e view
export class QuitandaController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  // Função que roda ao iniciar o sistema
  iniciar() {
    // Cria o evento de clique no botão de cadastrar
    this.view.btnAdicionarProduto.addEventListener("click", () =>
      this.adicionarNovoProduto(),
    );

    // Atualiza a tela pela primeira vez
    this.atualizarTela();
  }

  // Função para lidar com o cadastro de produtos
  adicionarNovoProduto() {
    const dados = this.view.pegarDadosProduto(); // Pega os dados da view

    // Verifica se algum campo está vazio
    if (
      dados.nome === "" ||
      dados.categoria === "" ||
      dados.preco === "" ||
      dados.quantidade === ""
    ) {
      this.view.mostrarMensagem("Preencha todos os campos!", "erro");
      return; // Interrompe a função
    }

    // Regra de negócio 1 e 2: preço e quantidade não podem ser negativos
    if (parseFloat(dados.preco) < 0 || parseInt(dados.quantidade) < 0) {
      this.view.mostrarMensagem("Valores não podem ser negativos!", "erro");
      return;
    }

    // Tenta adicionar no model, se der erro (ex: passou do limite), cai no catch
    try {
      this.model.adicionarProduto(
        dados.nome,
        dados.categoria,
        dados.preco,
        dados.quantidade,
      );
      this.view.mostrarMensagem("Produto cadastrado!");
      this.view.limparInputs(); // Limpa os campos
      this.atualizarTela(); // Recarrega as listas
    } catch (erro) { // Caso ocorra um erro, o catch sera executado
      this.view.mostrarMensagem(erro.message, "erro");
    }
  }

  // Função para lidar com a entrada de novos itens no estoque existente
  atualizarEstoqueProduto(id, nomeProduto) {
    // Diálogo (prompt)
    const qtdTexto = prompt(
      `Entrada de estoque: ${nomeProduto}\nDigite a quantidade:`,
    );

    // Se o usuário clicar em "cancelar" o valor é nulo, então interrompe
    if (qtdTexto === null || qtdTexto.trim() === "") return;

    const qtdNumero = parseInt(qtdTexto);

    // Valida se a pessoa digitou algo válido
    if (isNaN(qtdNumero) || qtdNumero <= 0) {
      alert("Quantidade inválida!"); // Diálogo (alert)
      return;
    }

    try {
      this.model.atualizarEstoque(id, qtdNumero);
      this.atualizarTela();
    } catch (erro) {
      alert(erro.message); // Mostra o erro do limite máximo na caixa de dialogo
    }
  }

  // Função para lidar com a venda de produtos
  venderProdutoEstoque(id, nomeProduto) {
    // Diálogo (prompt)
    const qtdTexto = prompt(
      `Venda de produto: ${nomeProduto}\nDigite a quantidade:`,
    );

    // Se o usuário clicar em "cancelar" interrompe
    if (qtdTexto === null || qtdTexto.trim() === "") return;

    const qtdNumero = parseInt(qtdTexto);

    // Valida se o valor é válido
    if (isNaN(qtdNumero) || qtdNumero <= 0) {
      alert("Quantidade inválida!"); // Diálogo (alert)
      return;
    }

    try {
      this.model.venderProduto(id, qtdNumero);
      this.atualizarTela();
    } catch (erro) {
      alert(erro.message); // Exibe erro se não tiver estoque suficiente
    }
  }

  // Função para atualizar as listas na tela
  atualizarTela() {
    // Manda o view montar o estoque, passando as funções de clique junto
    this.view.renderizarEstoque(
      this.model.pegarProdutos(),
      (id, nome) => this.venderProdutoEstoque(id, nome),
      (id, nome) => this.atualizarEstoqueProduto(id, nome),
    );

    // Manda o view montar o histórico
    this.view.renderizarHistorico(this.model.pegarHistorico());
  }
}