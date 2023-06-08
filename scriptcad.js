document.addEventListener('DOMContentLoaded', function() {
    function exibirMensagemCadastroSucesso() {
        var mensagem = document.getElementById('cadastro-sucesso-mensagem');
        mensagem.style.display = 'block';

        setTimeout(function() {
            mensagem.style.display = 'none';
            window.location.href = "index.html";
        }, 3000); // Tempo em milissegundos (3 segundos)
    }

    // Verifica se a mensagem de cadastroSucesso existe na sessão
    if (sessionStorage.getItem('cadastroSucesso')) {
        exibirMensagemCadastroSucesso();
        sessionStorage.removeItem('cadastroSucesso');
    }
});