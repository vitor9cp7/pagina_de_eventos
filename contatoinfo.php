<?php
// Dados de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "siteeventos";

// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve algum erro na conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome_empresa = $_POST["nome_empresa"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $evento = $_POST["evento"];
    $tipo_evento = $_POST["tipo_evento"];
    $data = $_POST["data"];
    $descricao = $_POST["descricao"];

    // Insere os dados na tabela "contato_produtor"
    $sql = "INSERT INTO contato_produtor (nome_empresa, email, telefone, evento, tipo_evento, data, descricao) VALUES ('$nome_empresa', '$email', '$telefone', '$evento', '$tipo_evento', '$data', '$descricao')";

    if ($conn->query($sql) === TRUE) {
        echo "Dados inseridos com sucesso.";
    } else {
        echo "Erro ao inserir dados: " . $conn->error;
    }
}

// Fecha a conexão com o banco de dados
$conn->close();
?>