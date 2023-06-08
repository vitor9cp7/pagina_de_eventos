<?php
// Configuração do banco de dados
$host = 'localhost'; // nome do host do seu banco de dados
$username = 'root'; // nome de usuário do banco de dados
$password = ''; // senha do banco de dados (nula)
$database = 'siteeventos'; // nome do banco de dados

// Conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $database);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Processar envio do formulário de cadastro
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Inserir dados na tabela TBL_usuarios
    $sql = "INSERT INTO tbl_usuarios (nome, email, password) VALUES ('$nome', '$email', '$senha')";

    if ($conn->query($sql) === TRUE) {
        // Cadastro realizado com sucesso
        echo "<script>alert('Usuário cadastrado com sucesso!'); setTimeout(function() { window.close(); });</script>";
    } else {
        // Erro no cadastro, exibir mensagem de erro
        echo "Erro ao cadastrar: " . $conn->error;
    }
}

// Fechar conexão com o banco de dados
$conn->close();
?>