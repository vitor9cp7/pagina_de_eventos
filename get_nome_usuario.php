<?php
// Código PHP para obter o nome do usuário
session_start();

if (isset($_SESSION['nome'])) {
    echo $_SESSION['nome'];
} else {
    echo '';
}
?>