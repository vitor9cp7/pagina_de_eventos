// Script da funcionalidade de login
$(document).ready(function() {
    function getNomeUsuario() {
      $.ajax({
        url: 'get_nome_usuario.php',
        success: function(response) {
          exibirNomeUsuario(response);
        }
      });
    }
  
    function exibirNomeUsuario(response) {
      if (response !== '') {
        $('#btn-login').hide();
        $('#btn-usuario').show();
        $('#nome-usuario').text('Bem-vindo, ' + response.nomeUsuario);
      } else {
        $('#btn-login').show();
        $('#btn-usuario').hide();
        $('#nome-usuario').text('');
      }
    }
  
    function abrirLogin() {
      $('.janela-login').show();
    }
  
    getNomeUsuario();
  
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
  });