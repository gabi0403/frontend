//Estudo de DOM avançado
//adicionar elementos com DOM em páginas html

//construir um header com DOM

let header = document.createElement("header"); // criação de uma tag <header>
//estilização do header
header.style.backgroundColor = "darkgreen";
header.style.height = "8vh";
//adicionar o header como elemento filho do body
document.body.appendChild(header);
document.body.style.margin = "0"; //retirou a margin do body

//adicionar elementos ao header
let divNav = document.createElement("div");
//configurando o diplay da div
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue";
divNav.style.height = "100%";
divNav.style.alignItems = "center";
divNav.style.fontSize = "5vh";
divNav.style.fontFamily = "Comic Sans MS";

//adicionar a div ao header
header.appendChild(divNav);

//adicionar itens a nav
let itensNav = ["Index", "Produtos", "Contato"];

//percorrer o vetor
itensNav.forEach((e) => {
  let item = document.createElement("a");
  item.innerHTML = e;
  item.href = e.toLowerCase() + ".html"; //criando o link
  item.style.textDecoration = "none"; //remove o link
  item.style.color = "inherit"; //mantem a cor original
  divNav.appendChild(item); //adicionando o item a divNav
});

// rodapé para a página
//faça um rodapé para a página
let footer = document.createElement("footer");
footer.style.backgroundColor = "darkgreen";
footer.style.height = "5vh";
footer.style.width = "100%";
footer.style.position = "fixed";
footer.style.bottom = "0";
let paragrafoFooter = document.createElement("p");
paragrafoFooter.innerHTML =
  "Copyright &copy; 2026 - Todos os direitos reservados.";
paragrafoFooter.style.color = "aliceblue";
paragrafoFooter.style.textAlign = "center";
paragrafoFooter.style.lineHeight = "5vh";
footer.appendChild(paragrafoFooter);
document.body.appendChild(footer);
