<?php
// Conexão com o banco de dados
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

// Verificar se o parâmetro de categoria foi fornecido
if (isset($_GET['categoria'])) {
    $categoria = $_GET['categoria'];

    // Consulta SQL para buscar os eventos da categoria no banco de dados
    $sql = "SELECT * FROM eventos WHERE categoria = '$categoria'";
    $result = $conn->query($sql);

    // Verificar se foram encontrados eventos
    if ($result && $result->num_rows > 0) {
        $eventos = array();

        // Loop pelos resultados da consulta
        while ($row = $result->fetch_assoc()) {
            // Adicionar os dados do evento ao array
            $evento = array(
                'imagem' => $row['imagem'],
                'nome' => $row['nome'],
                'data' => $row['data'],
                'local' => $row['local']
            );
            $eventos[] = $evento;
        }

        // Retornar os eventos como uma resposta JSON
        header('Content-Type: application/json');
        echo json_encode($eventos);
    } else {
        // Não foram encontrados eventos na categoria especificada
        header('Content-Type: application/json');
        echo json_encode(array());
    }
} else {
    // Categoria não fornecida, retornar uma resposta de erro
    header('HTTP/1.1 400 Bad Request');
    echo 'Parâmetro de categoria não fornecido.';
}

$conn->close();
?>