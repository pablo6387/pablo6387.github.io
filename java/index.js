const slidesContainer = document.getElementById("contenedor");
const prevButton = document.getElementById("flecha-atras");
const nextButton = document.getElementById("flecha-adelante");

const imagenes = ['img/fondo.jpg', 'img/fondo2.jpg', 'img/fondo3.png', 'img/fondo4.png'];
let index = 0;

function mostrarImagen() {
  slidesContainer.innerHTML = `<img src="${imagenes[index]}" alt="imagen">`;
}

prevButton.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = imagenes.length - 1;
  }
  mostrarImagen();
});

nextButton.addEventListener("click", () => {
  index++;
  if (index >= imagenes.length) {
    index = 0;
  }
  mostrarImagen();
});

mostrarImagen();

