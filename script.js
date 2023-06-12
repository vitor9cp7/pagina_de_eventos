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
const slides = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const counter = document.querySelector('.counter');

let slideIndex = 0;
let isTransitioning = false;

function fadeIn(element) {
  let opacity = 0;
  const duration = 500; // Duração da transição em milissegundos
  const increment = 1 / (duration / 10); // Incremento do valor de opacidade

  element.style.opacity = '0';
  element.style.display = 'block';

  function animate() {
    opacity += increment;
    element.style.opacity = opacity.toString();

    if (opacity < 1) {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

function fadeOut(element) {
  let opacity = 1;
  const duration = 500; // Duração da transição em milissegundos
  const decrement = 1 / (duration / 10); // Decremento do valor de opacidade

  function animate() {
    opacity -= decrement;
    element.style.opacity = opacity.toString();

    if (opacity > 0) {
      requestAnimationFrame(animate);
    } else {
      element.style.display = 'none';
    }
  }

  animate();
}

function showSlide(n) {
  if (isTransitioning) {
    return;
  }

  isTransitioning = true;

  fadeOut(slides[slideIndex]);

  setTimeout(() => {
    slideIndex = (n + slides.length) % slides.length;

    fadeIn(slides[slideIndex]);

    counter.textContent = `${slideIndex + 1}/${slides.length}`;
    isTransitioning = false;
  }, 500); // Tempo de espera antes de mostrar a próxima imagem em milissegundos
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Atualiza a exibição do slide atual e do contador
function updateSlideView() {
  fadeIn(slides[slideIndex]);
  counter.textContent = `${slideIndex + 1}/${slides.length}`;
}

// Event listeners para as setas
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Iniciar o slider
updateSlideView();

// Avançar o slider automaticamente
let intervalId = setInterval(nextSlide, 5000); // Avança a cada 5 segundos

// Pausar quando o mouse estiver sobre o slider
slider.addEventListener('mouseover', () => {
  clearInterval(intervalId);
});

// Retomar a reprodução quando o mouse sair do slider
slider.addEventListener('mouseout', () => {
  intervalId = setInterval(nextSlide, 5000); // Reinicia o intervalo
});
