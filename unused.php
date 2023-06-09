<?php
session_start(); // Inicia a sessão (se ainda não estiver iniciada)

// Verificar se o usuário está logado
if (isset($_SESSION['isLoggedIn']) && $_SESSION['isLoggedIn'] === true) {
    // O usuário está logado
    echo "Você está logado como: " . $_SESSION['nome'];
} else {
    // O usuário não está logado
    echo "Você não está logado.";
}
?>