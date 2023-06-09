<?php
session_start(); // Inicia a sessão (se ainda não estiver iniciada)

$response = array('isLoggedIn' => false);

if (isset($_SESSION['nome'])) {
    $response['isLoggedIn'] = true;
}

echo json_encode($response);
?>