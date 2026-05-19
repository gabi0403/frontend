"use strict";
// Exercício 1: Cadastro de UsuáriosTarefa: 
// 1. Crie uma interface chamada Usuario que contenha as propriedades: id (número), nome (string), email (string) e isAdmin (booleano).
// 2. Crie uma função chamada renderizarPerfil que receba um objeto do tipo Usuario e exiba no console uma mensagem personalizada (ex: "Usuário Administrador: Fulano (fulano@email.com)" caso ele seja admin, ou apenas "Usuário Comum: ..." caso não seja).
// renderizar perfil do usuario
function renderizarPerfil(usuario) {
    if (usuario.isAdmin) {
        console.log(`Usuário Administrador: ${usuario.nome} (${usuario.email})`);
    }
    else {
        console.log(`Usuário Comum: ${usuario.nome} (${usuario.email})`);
    }
}
// fazendo teste com a função de renderizar
const usuario1 = {
    id: 1,
    nome: "Emily",
    email: "emily@email.com",
    isAdmin: true
};
renderizarPerfil(usuario1);
const usuario2 = {
    id: 2,
    nome: "Evelyn",
    email: "evelyn@email.com",
    isAdmin: false,
};
renderizarPerfil(usuario2);
