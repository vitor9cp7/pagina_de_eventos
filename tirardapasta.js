// // Script da rolagem da faixa
// document.addEventListener('DOMContentLoaded', function() {
//     // Selecionar todas as faixas de eventos
//     const faixasEventos = document.querySelectorAll('.faixa-eventos');
  
//     // Iterar sobre cada faixa de eventos
//     faixasEventos.forEach(faixa => {
//       // Selecionar os elementos do carrossel dentro da faixa
//       const eventosContainer = faixa.querySelector('.eventos-container');
//       const scrollEsquerda = faixa.querySelector('.scrollEsquerda');
//       const scrollDireita = faixa.querySelector('.scrollDireita');
  
//       // Configurar a largura do container de eventos com base no número de eventos
//       const eventos = eventosContainer.querySelectorAll('.evento');
//       const numEventos = eventos.length;
//       const eventosContainerWidth = numEventos * 220; // Considerando 200px de largura do evento e 20px de margem direita
//       eventosContainer.style.width = `${eventosContainerWidth}px`;
  
//       // Adicionar evento de clique ao botão de rolagem à esquerda
//       scrollEsquerda.addEventListener('click', function() {
//         eventosContainer.style.transform = 'translateX(20px)';
//       });
  
//       // Adicionar evento de clique ao botão de rolagem à direita
//       scrollDireita.addEventListener('click', function() {
//         eventosContainer.style.transform = 'translateX(-220px)';
//       });
//     });
//   });

//   const faixasEventos = document.querySelectorAll('.faixa-eventos');

//     faixasEventos.forEach(faixa => {
//       const eventosContainer = faixa.querySelector('.eventos-container');
//       const scrollEsquerda = faixa.querySelector('.scrollEsquerda');
//       const scrollDireita = faixa.querySelector('.scrollDireita');
//       const eventos = faixa.querySelectorAll('.evento');
//       const eventoWidth = eventos[0].offsetWidth + parseInt(window.getComputedStyle(eventos[0]).marginRight);
//       let posicao = 0;

//       scrollDireita.addEventListener('click', () => {
//         if (posicao < eventos.length - 1) {
//           posicao++;
//           eventosContainer.style.transform = `translateX(-${posicao * eventoWidth}px)`;
//         }
//       });

//       scrollEsquerda.addEventListener('click', () => {
//         if (posicao > 0) {
//           posicao--;
//           eventosContainer.style.transform = `translateX(-${posicao * eventoWidth}px)`;
//         } else {
//           posicao = eventos.length - 1;
//           eventosContainer.style.transform = `translateX(-${posicao * eventoWidth}px)`;
//         }
//       });
//     });
