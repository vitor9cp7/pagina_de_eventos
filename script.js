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

//Script da funcionalidade de login

$.ajax({
  url: 'login.php',
  method: 'POST',
  data: {param1: valor1, param2: valor2}, // Se você precisar enviar dados para o servidor
  success: function(response) {
    // O código a ser executado quando a requisição for bem-sucedida
    console.log(response); // Exemplo: exibir a resposta no console
  },
  error: function(xhr, status, error) {
    // O código a ser executado se ocorrer um erro na requisição
    console.log(error); // Exemplo: exibir o erro no console
  }
});


document.addEventListener('DOMContentLoaded', function() {
  function getNomeUsuario() {
      // Fazer uma requisição para obter o nome do usuário do servidor
      // Você pode usar AJAX, fetch, ou qualquer outra forma de requisição assíncrona
      // Por exemplo, se você estiver usando jQuery, pode fazer algo assim:
      $.ajax({
          url: 'get_nome_usuario.php',
          success: function(nome) {
              exibirNomeUsuario(nome);
          }
      });
  }

  function exibirNomeUsuario(nome) {
      var nomeUsuarioElement = document.getElementById('nome-usuario');
      nomeUsuarioElement.textContent = "Bem-Vindo, " + nome;
      nomeUsuarioElement.style.display = 'block';
      document.getElementById('btn-login').style.display = 'none';
      document.getElementById('btn-cadastro').style.display = 'none';
  }

  // Verificar se o usuário está logado e exibir o nome do usuário, se necessário
  getNomeUsuario();
});