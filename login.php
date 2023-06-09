<?php
session_start(); // Inicia a sessão (se ainda não estiver iniciada)

$host = 'localhost'; // Nome do host do seu banco de dados
$username = 'root'; // Nome de usuário do banco de dados
$password = ''; // Senha do banco de dados
$database = 'siteeventos'; // Nome do banco de dados

// Conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $database);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Processar envio do formulário de login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Consulta SQL para verificar o e-mail e a senha
    $sql = "SELECT * FROM tbl_usuarios WHERE email = '$email' AND password = '$senha'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows == 1) {
        // As credenciais estão corretas
        $row = $result->fetch_assoc();
        $_SESSION['nome'] = $row['nome'];
        $_SESSION['isLoggedIn'] = true;
        $_SESSION['expireTime'] = time() + 3600; // Definir o tempo de expiração da sessão (1 hora neste exemplo)

        // Redirecionar para a página principal ou outra página de sua escolha
        header("Location: index.html");
        exit();
    } else {
        // Credenciais inválidas, exibir uma mensagem de erro ou redirecionar para uma página de erro
        $_SESSION['isLoggedIn'] = false;
        header("Location: index.html"); // Redirecionar para a página de login novamente
        exit();
    }
}
$conn->close();
?>