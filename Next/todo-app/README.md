# Meu Primeiro Projeto NEXT - TodoList

## Introdução ao Desenvolvimento de uma aplicação To-Do com Next.js e MongoDB

## Objetivos
Aplicação de Lista de Tarefas completa, integrando o FrontEnd do Next.js com o BackEnd em API Routes e o MongoDB. Consolidando uma ideia de Arquitetura FullStack dentro de um mesmo framework

### Objetivos Específicos

- Criar e configurar um projeto Next.js com TypeScript
- Configurar a conexão com o MongoDB usando Mongoose
- Criar uma Modelagem de Dados
- Implementar Rotas API ( Listar(GET), Cadastrar(POST), atualizar(PUT) e excluir(DELETE))
- Consumir essas Rotas a partir do FrontEnd
- Compreender o fluxo do CRUD na aplicação

## Contextualização

A palicação permite que os Usuários:

- adicionem uma nova tarefa
- visualize todas as tarefas cadastradas
- marque tarefa como conscluída ou pendente
- remova itens da lista
- tenha persistência de dados em banco

## Visão Geral da Arquitetura

```mermaid
flowchart TB

    subgraph NEXT["Next.js"]
        FrontEnd["FrontEnd<br/>REACT + Next.js<br/>Componentes e Interfaces"]
        API["API Routes (Next.js)<br/>/api/todos"]
    end

    MongoDB["MongoDB<br/>Armazenamento de Tarefas"]

    FrontEnd -->|Request HTTP/ fetch| API
    API --> |Mongoose| MongoDB
    MongoDB --> |Devolve a Solicitação| API
    API --> |Response HTTP / fetch| FrontEnd

    style NEXT fill:#340034
```
 
## Escopo do Projeto

### FrontEnd (Next.js/React)

- exibição da lista de tarefas;
- formulário para adicionar novas tarefas;
- botão para alternar status (concluída ou pendente);
- botão para excluir tarefas;
- atualização dinâmica da interface sem recarregar a página.

### BackEnd (Next.js API Routes)

- `GET /api/todos`: retorna todas as tarefas;
- `POST /api/todos`: cria uma nova tarefa;
- `PUT /api/todos/[id]`: atualiza uma tarefa existente;
- `DELETE /api/todos/[id]`: remove uma tarefa.


### Banco de Dados (MongoDB)

- armazenamento das tarefas;
- persistência do título e do status de conclusão;
- conexão segura e reutilizável com o banco.

