<?php
session_start();

// Verificar se o usuário está autenticado (exemplo de verificação da sessão)
if (!isset($_SESSION['usuario_id']) || !isset($_SESSION['nome'])) {
  echo 'Usuário não autenticado';
  exit;
}

// Obter o ID do usuário e o nome da sessão
$usuarioId = $_SESSION['usuario_id'];
$usuarioNome = $_SESSION['nome'];

// Exibir o ID do usuário e o nome
echo 'ID do usuário: ' . $usuarioId . '<br>';
echo 'Nome do usuário: ' . $usuarioNome;
?>