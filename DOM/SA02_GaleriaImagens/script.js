let uploadInput = document.getElementById("upload");
let btnAdd = document.getElementById("addImagem");
let galeria = document.querySelector(".galeria");
let carrossel = document.querySelector(".carrossel");

let imagens = [];
let intervaloCarrossel; // Guarda o temporizador para poder resetá-lo

btnAdd.addEventListener("click", () => {
  let imagemURL = uploadInput.value.trim();
  if (imagemURL === "") return;

  imagens.push(imagemURL);
  atualizarGaleria();
  atualizarCarrossel();
  uploadInput.value = "";
});

function atualizarGaleria() {
  galeria.innerHTML = "";
  imagens.forEach((imagem, index) => {
    let div = document.createElement("div");
    div.classList.add("imagemContainer");

    let img = document.createElement("img");
    img.src = imagem;

    let btnRemove = document.createElement("button");
    btnRemove.innerText = "X";
    btnRemove.classList.add("remove");

    btnRemove.addEventListener("click", () => {
      imagens.splice(index, 1);
      atualizarGaleria();
      atualizarCarrossel();
    });

    div.appendChild(img);
    div.appendChild(btnRemove);
    galeria.appendChild(div);
  });
}

function atualizarCarrossel() {
  carrossel.innerHTML = "";
  clearInterval(intervaloCarrossel); // Para o carrossel antigo antes de criar um novo

  if (imagens.length === 0) return;

  imagens.forEach((imagem) => {
    let img = document.createElement("img");
    img.src = imagem;
    // Força a imagem a ocupar 100% da largura do container do carrossel
    img.style.flex = "0 0 100%";
    carrossel.appendChild(img);
  });

  if (imagens.length > 1) {
    iniciarCarrossel();
  } else {
    carrossel.style.transform = `translateX(0)`;
  }
}

function iniciarCarrossel() {
  let index = 0;
  intervaloCarrossel = setInterval(() => {
    index = (index + 1) % imagens.length;
    carrossel.style.transition = "transform 0.8s ease-in-out"; // Movimento suave
    carrossel.style.transform = `translateX(-${index * 100}%)`;
  }, 3000); // Muda a cada 3 segundos
}
