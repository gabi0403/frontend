


# Especificação de Requisitos de Software (SRS)
**Projeto:** Plataforma RH
**Versão:** 1.0
**Data:** 2 de Junho de 2026

## 1. Introdução
### 1.1 Propósito
Este documento descreve os requisitos funcionais e não funcionais para o Módulo de Currículos e Vagas da Plataforma de RH. O objetivo deste módulo é permitir que candidatos gerenciem suas informações profissionais e que a administração visualize esses dados.

### 1.2 Escopo
O sistema compreende o desenvolvimento de uma interface frontend em Angular integrada a um backend simulado (json-server). As funcionalidades incluem o CRUD completo de currículos, vinculação de dados por ID de usuário e interface administrativa para gestão.

---

## 2. Descrição Geral
O Módulo de Currículos é uma extensão da Plataforma RH que replica a lógica de gerenciamento de dados já aplicada às vagas. Ele permite que usuários recém-cadastrados registrem e editem suas informações profissionais (formação, experiência, habilidades e LinkedIn), persistindo esses dados no `db.json` vinculados a um `usuarioId`. 

Além disso, o sistema conta com uma interface administrativa oculta para que as empresas simulem a visualização de todos os candidatos cadastrados no banco de dados através de uma listagem centralizada.

---

## 3. Requisitos do Sistema

### 3.1 Requisitos Funcionais (RF)
*   **RF01 - Criação de Currículo:** O sistema deve fornecer um formulário reativo para o candidato preencher seus dados profissionais, vinculando-os automaticamente ao seu `usuarioId` simulado.
*   **RF02 - Edição de Currículo:** O sistema deve permitir que o candidato altere e atualize as informações de seu currículo já existente.
*   **RF03 - Visualização de Currículo Próprio:** O candidato deve conseguir visualizar seus próprios dados cadastrados em uma tela de leitura dedicada (`/meu-curriculo`).
*   **RF04 - Painel Geral de Currículos (Tela Oculta):** O sistema deve disponibilizar uma rota oculta (`/painel-curriculo`) que lista todos os currículos salvos no backend para simulação da administração/empresas.
*   **RF05 - Exclusão de Currículo:** O sistema deve permitir a remoção de registros de currículos cadastrados na base de dados através do painel.

### 3.2 Requisitos Não-Funcionais (RNF)
*   **RNF01 - Persistência de Dados:** Os dados devem ser manipulados e salvos via requisições HTTP (GET, POST, PUT, DELETE) consumindo o endpoint `/curriculos` do `json-server`.
*   **RNF02 - Validação de Formulários:** O formulário de cadastro deve utilizar `ReactiveForms` do Angular para garantir campos obrigatórios validados antes do envio.
*   **RNF03 - Experiência do Usuário (UI/UX):** A interface deve ser limpa e responsiva, utilizando componentes do Angular Material (como cartões, formulários e botões).
*   **RNF04 - Notificações de Feedback:** O sistema deve exibir alertas visuais de sucesso ou erro (utilizando `MatSnackBar` ou alertas nativos) após cada operação do CRUD.

---

## 4. Interface de Dados e Modelagem do Sistema

### 4.1 Diagramas

#### 4.1.1 Diagrama de Uso
[ Candidato ] --------> (Cadastrar / Editar Currículo)
--------> (Visualizar Meu Currículo)

[ Administrador ] ----> (Acessar Rota Oculta /painel-curriculo)
----> (Listar e Deletar Todos os Currículos)


#### 4.1.2 Diagrama de Classe
+--------------------------------------+
|              Curriculo               |
+--------------------------------------+
| - id?: string                        |
| - usuarioId: number                  |
| - nomeCompleto: string               |
| - formacao: string                   |
| - experiencia: string                |
| - habilidades: string[]              |
| - linkedinUrl?: string               |
+--------------------------------------+


#### 4.1.3 Diagrama de Fluxo
[Início] -> [Preencher Formulário] -> [Validar Dados]
|
+------------------------+------------------------+
| Se Inválido                                     | Se Válido
v                                                 v
[Exibir Mensagem de Erro]                          [Chamar CurriculoService]
|
v
[Enviar HTTP para json-server]
|
v
[Exibir MatSnackBar Sucesso] -> [Fim]


---

## 5. Critérios de Aceitação

1.  **Operação CRUD:** É possível criar, ler, atualizar e excluir um registro no `db.json` através da interface?
2.  **Navegação:** As rotas configuradas levam aos componentes corretos sem erros de console?
3.  **Feedback:** O usuário recebe uma confirmação (ex: MatSnackBar) ao salvar um currículo?
4.  **Consistência:** Os dados exibidos na listagem correspondem exatamente ao que está no backend simulado?

---

## 6. Configuração do Ambiente

### Pré-requisitos
*   Node.js instalado.
*   Angular CLI instalado globalmente (`npm install -g @angular/cli`).
*   json-server instalado globalmente (`npm install -g json-server`).
*   Projeto Angular com dependências instaladas (`npm install`).

### Inicialização do Sistema
1. Certifique-se de que o arquivo `db.json` na raiz do projeto possui o nó para currículos:
```json
{
  "vagas": [],
  "curriculos": []
}
Inicialize o backend simulado rodando o comando:

Bash
json-server --watch backend/db.json --port 3000
Em outro terminal, inicialize o servidor do Angular:

Bash
ng serve
Acesse a aplicação no navegador através do endereço http://localhost:4200.


---
