<?php
// Código PHP para obter o nome do usuário
session_start();

if (isset($_SESSION['nome'])) {
    $nomeUsuario = $_SESSION['nome'];
} else {
    $nomeUsuario = '';
}

$response = array('nomeUsuario' => $nomeUsuario);
echo json_encode($response);
?>