function abrirLogin(){
  const modal = document.getElementById('janela-login')
  modal.classList.add('abrir')

modal.addEventListener('click',(e) => {
  if(e.target.id == 'fechar' || e.target.id == 'janela-login'){
      modal.classList.remove('abrir')
  }
})
}

// JavaScript, variáveis para o slider
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const counter = document.querySelector('.counter');

let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const slideCount = slides.length;

function showSlide(n) {
  slideIndex = (n + slideCount) % slideCount;

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'block';

  // Update do contador
  counter.textContent = `${slideIndex + 1}/${slideCount}`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Event listeners para setas
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Avançar o slider automaticamente
let intervalId;

function startSlide() {
  intervalId = setInterval(nextSlide, 5000); // muda a cada 5 segundos
}

function stopSlide() {
  clearInterval(intervalId);
}

// Pausa quando o mouse está em cima
slider.addEventListener('mouseover', stopSlide);

// Sai do pause quando o mouse sai de cima
slider.addEventListener('mouseout', startSlide);

// Iniciar o Slider
showSlide(slideIndex);
startSlide();