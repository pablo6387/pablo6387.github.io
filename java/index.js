const slidesContainer = document.getElementById("contenedor");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("flecha-atras");
const nextButton = document.getElementById("flecha-adelante");
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  if (slidesContainer.scrollLeft > 4*slideWidth){
    slidesContainer.scrollLeft = slideWidth;
  }
  
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  if (slidesContainer.scrollLeft <= 0*slideWidth){
    slidesContainer.scrollLeft = 4*slideWidth;
  }
});

function posicionar(){
  slidesContainer.scrollLeft = slide.clientWidth;
}


