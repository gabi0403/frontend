// definição de interface 

interface Usuario{
    id: number;
    nome: string;
    email: string;
    isAdmin: boolean;
}

// renderizar perfil do usuario

function renderizarPerfil(usuario: Usuario): void{
    if(usuario.isAdmin){
        console.log(`Usuário Administrador: ${usuario.nome} (${usuario.email})`);
    } else{
        console.log(`Usuário Comum: ${usuario.nome} (${usuario.email})`);
    }
}

// fazendo teste com a função de renderizar
const usuario1: Usuario = {
    id: 1,
    nome: "Emily",
    email: "emily@email.com",
    isAdmin: true
}
renderizarPerfil(usuario1);


const usuario2: Usuario = {
  id: 2,
  nome: "Evelyn",
  email: "evelyn@email.com",
  isAdmin: false,
};

renderizarPerfil(usuario2);
