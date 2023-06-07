document.addEventListener('DOMContentLoaded', function() {
    <?php
    session_start();
    if (isset($_SESSION['cadastroSucesso']) && $_SESSION['cadastroSucesso']) {
        echo 'exibirMensagemCadastroSucesso();';
        unset($_SESSION['cadastroSucesso']);
    }
    ?>

    function exibirMensagemCadastroSucesso() {
        var mensagem = document.getElementById('cadastro-sucesso-mensagem');
        mensagem.style.display = 'block';

        setTimeout(function() {
            mensagem.style.display = 'none';
            window.location.href = "index.html";
        }, 3000); // Tempo em milissegundos (3 segundos)
    }
});