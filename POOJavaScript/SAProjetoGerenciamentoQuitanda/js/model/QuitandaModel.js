// Classe responsável pelos dados e regras de negócio do sistema
export class QuitandaModel {
  constructor() {
    this.produtos = []; // Vetor para armazenar os produtos
    this.historico = []; // Vetor para armazenar o histórico de movimentações
    this.idAtual = 1; // Contador para gerar o ID automático
    this.limiteMaximo = 999; // Limite máximo de quantidade permitida
  }

  // Retorna a lista de produtos 
  pegarProdutos() {
    return this.produtos;
  }

  // Retorna a lista do histórico
  pegarHistorico() {
    return this.historico;
  }

  // Função para adicionar um novo produto (CREATE do CRUD)
  adicionarProduto(nome, categoria, preco, quantidade) {
    // Valida se o produto já existe no vetor
    const existe = this.produtos.find(
      (produto) => produto.nome.toLowerCase() === nome.toLowerCase(),
    );
    if (existe) {
      throw new Error("Produto já cadastrado!"); // Interrompe e joga um erro
    }

    // Valida o limite máximo permitido
    if (quantidade > this.limiteMaximo) {
      throw new Error(`A quantidade não pode passar de ${this.limiteMaximo}.`);
    }

    // Cria o objeto do novo produto
    const novoProduto = {
      id: this.idAtual++, // Usa o ID atual e depois soma +1
      nome: nome,
      categoria: categoria,
      preco: parseFloat(preco), // Garante que o preço é decimal
      quantidade: parseInt(quantidade), // Garante que a quantidade é inteira
    };

    // Adiciona no vetor de produtos
    this.produtos.push(novoProduto);

    // Registra no histórico (Entrada)
    this.registrarHistorico(
      "Entrada",
      novoProduto.nome,
      novoProduto.quantidade,
    );
  }

  // Função para adicionar mais unidades a um produto que já existe (UPDATE do CRUD)
  atualizarEstoque(id, quantidadeAdicional) {
    const produto = this.produtos.find((produto) => produto.id === id);

    if (produto) {
      // Verifica se a soma não vai passar do limite máximo
      if (produto.quantidade + quantidadeAdicional > this.limiteMaximo) {
        throw new Error(
          `O estoque total não pode passar de ${this.limiteMaximo}.`,
        );
      }

      produto.quantidade += parseInt(quantidadeAdicional); // Soma a quantidade
      this.registrarHistorico("Reposição", produto.nome, quantidadeAdicional);
    }
  }

  // Função para dar baixa no estoque quando ocorre uma venda (UPDATE do CRUD)
  venderProduto(id, quantidadeVendida) {
    const produto = this.produtos.find((produto) => produto.id === id);

    if (!produto) throw new Error("Produto não encontrado.");

    // Regra de negócio 4: não pode vender mais do que tem no estoque
    if (produto.quantidade < quantidadeVendida) {
      throw new Error("Estoque insuficiente!");
    }

    produto.quantidade -= parseInt(quantidadeVendida); // Subtrai a quantidade
    this.registrarHistorico("Venda", produto.nome, quantidadeVendida);
  }

  // Função pra armazenar as movimentações (RF 5)
  registrarHistorico(tipo, nomeProduto, quantidade) {
    // Pega a data e hora do momento da ação
    const dataAtual = new Date().toLocaleString("pt-BR");

    // Adiciona um novo objeto no vetor de histórico
    this.historico.push({
      data: dataAtual,
      tipo: tipo,
      produto: nomeProduto,
      quantidade: quantidade,
    });
  }
}