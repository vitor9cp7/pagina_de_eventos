// Script da rolagem da faixa
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todas as faixas de eventos
    const faixasEventos = document.querySelectorAll('.faixa-eventos');
  
    // Iterar sobre cada faixa de eventos
    faixasEventos.forEach(faixa => {
      // Selecionar os elementos do carrossel dentro da faixa
      const eventosContainer = faixa.querySelector('.eventos-container');
      const scrollEsquerda = faixa.querySelector('.scrollEsquerda');
      const scrollDireita = faixa.querySelector('.scrollDireita');
  
      // Calcular a largura do container de eventos e a largura de cada evento
      const eventos = eventosContainer.querySelectorAll('.evento');
      const numEventos = eventos.length;
      const eventoWidth = eventos[0].offsetWidth + parseInt(window.getComputedStyle(eventos[0]).marginRight);
      const eventosContainerWidth = numEventos * eventoWidth;
      eventosContainer.style.width = `${eventosContainerWidth}px`;
  
      // Definir a quantidade de eventos visíveis por vez
      const eventosVisiveis = Math.floor(faixa.offsetWidth / eventoWidth);
  
      // Calcular o limite de rolagem do carrossel
      const limiteDireita = numEventos - eventosVisiveis;
      let posicao = 0;
  
      // Adicionar evento de clique ao botão de rolagem à esquerda
      scrollEsquerda.addEventListener('click', function() {
        if (posicao > 0) {
          posicao--;
          eventosContainer.style.transform = `translateX(-${posicao * eventoWidth}px)`;
        }
      });
  
      // Adicionar evento de clique ao botão de rolagem à direita
      scrollDireita.addEventListener('click', function() {
        if (posicao < limiteDireita) {
          posicao++;
          eventosContainer.style.transform = `translateX(-${posicao * eventoWidth}px)`;
        }
      });
    });
  });