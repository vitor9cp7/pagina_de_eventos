$(document).ready(function() {
    function abrirLogin() {
      $('.janela-login').show();
    }

    $('#btn-login').click(function() {
      abrirLogin();
    });

    $('#btn-usuario').click(function() {
      $.ajax({
        url: 'logout.php',
        success: function() {
          location.reload();
        }
      });
    });

    $('#login-form').submit(function(e) {
      e.preventDefault();

      var formData = $(this).serialize();

      $.ajax({
          url: 'login.php',
          type: 'POST',
          dataType: 'json',
          data: formData,
          success: function(response) {
              if (response.success) {
                  // Credenciais corretas, redirecionar ou executar ação necessária
                  window.location.href = 'index.html';
              } else {
                  // Credenciais inválidas, exibir mensagem de erro
                  alert(response.message);
              }
          },
          error: function() {
              alert('Ocorreu um erro ao processar a requisição.');
          }
      });
    });

    $.ajax({
      url: "get_nome_usuario.php",
      type: "GET",
      dataType: "json",
      success: function(response) {
        if (response.nomeUsuario !== '') {
          $('#btn-login').hide();
          $('#btn-usuario').show();
          $('#btn-cadastro').hide();
          $('#nome-usuario').text('Bem-vindo(a), ' + response.nomeUsuario);
        } else {
          $('#btn-login').show();
          $('#btn-usuario').hide();
          $('#nome-usuario').text('');
          $('#btn-logout').hide();
        }
      }
    });

    $('#btn-logout').click(function() {
      $.ajax({
        url: 'logout.php',
        success: function() {
          // Redirecionar para a página de login ou outra página de sua escolha
          window.location.href = 'index.html';
        }
      });
    });
  });