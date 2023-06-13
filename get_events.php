<?php
// Dados de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "siteeventos";

// Conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Consulta para recuperar os eventos do banco de dados
$sql = "SELECT * FROM eventos";
$result = $conn->query($sql);

// Verificar se a consulta retornou resultados
if ($result->num_rows > 0) {
    $eventos = array();

    // Loop através dos resultados da consulta
    while ($row = $result->fetch_assoc()) {
        $evento = array(
            'titulo' => $row['titulo'],
            'descricao' => $row['descricao'],
            'imagem' => $row['imagem']
        );
        $eventos[] = $evento;
    }

    // Converter dados dos eventos para uma string JSON
    $eventos_json = json_encode($eventos);

    // Retornar os dados dos eventos em formato JSON
    header('Content-Type: application/json');
    echo $eventos_json;
} else {
    echo "Nenhum evento encontrado.";
}

// Fechar a conexão com o banco de dados
$conn->close();
?>