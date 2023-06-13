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

// Script do bancco de dados

  const eventos = document.querySelectorAll('.evento');
  
    eventos.forEach(evento => {
      const img = evento.querySelector('img');
      const titulo = evento.querySelector('.titulo');
      const local = evento.querySelector('.local');
      const date = evento.querySelector('.data');
      const eventoId = img.getAttribute('id');
      const aLink = evento.querySelector('a');
  
      // Chamar o arquivo PHP que busca os dados do evento no banco de dados com base na ID
      // Certifique-se de substituir 'buscar_evento.php' pelo nome do seu arquivo PHP
      fetch(`buscar_evento.php?id=${eventoId}`)
        .then(response => response.json())
        .then(data => {
          titulo.textContent = data.titulo;
          local.textContent = data.local;
          img.src = data.imagem; 
          aLink.href = data.link;

          if (data.date[0] && data.date[1] && data.date[0] !== 'null' && data.date[1] !== 'null') {
            // Formatação da data de início
            const dataInicio = new Date(data.date[0]);
            const diaInicio = dataInicio.getDate().toString().padStart(2, '0');
            const mesInicio = (dataInicio.getMonth() + 1).toString().padStart(2, '0');
            const anoInicio = dataInicio.getFullYear().toString();
            const horaInicio = dataInicio.getHours().toString().padStart(2, '0');
            const minutoInicio = dataInicio.getMinutes().toString().padStart(2, '0');
            const dataHoraInicio = `${diaInicio}-${mesInicio}-${anoInicio}`;
          
            // Formatação da data de fim
            const dataFim = new Date(data.date[1]);
            const diaFim = dataFim.getDate().toString().padStart(2, '0');
            const mesFim = (dataFim.getMonth() + 1).toString().padStart(2, '0');
            const anoFim = dataFim.getFullYear().toString();
            const horaFim = dataFim.getHours().toString().padStart(2, '0');
            const minutoFim = dataFim.getMinutes().toString().padStart(2, '0');
            const dataHoraFim = `${diaFim}-${mesFim}-${anoFim}`;
          
            const dataFormatada = `${dataHoraInicio} -> ${dataHoraFim}`;
            date.textContent = dataFormatada;
          } else if (data.date[0] && data.date[0] !== 'null') {
            // Apenas data de início é não nula
            const dataInicio = new Date(data.date[0]);
            const diaInicio = dataInicio.getDate().toString().padStart(2, '0');
            const mesInicio = (dataInicio.getMonth() + 1).toString().padStart(2, '0');
            const anoInicio = dataInicio.getFullYear().toString();
            const horaInicio = dataInicio.getHours().toString().padStart(2, '0');
            const minutoInicio = dataInicio.getMinutes().toString().padStart(2, '0');
            const dataHoraInicio = `${diaInicio}-${mesInicio}-${anoInicio}`;
            date.textContent = dataHoraInicio;
          } else {
            // Caso ambos sejam nulos, oculta o campo
            date.textContent = '';
          }
        });
});
