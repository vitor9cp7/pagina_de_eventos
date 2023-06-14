<?php
session_start();
// Configurações de conexão com o banco de dados
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'siteeventos';

// Obtém o ID da classe event-thumb enviado via POST
$eventThumbId = $_POST['eventThumbId'];
$usuarioId = $_SESSION['usuario_id'];

// Estabelece a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve algum erro na conexão
if ($conn->connect_error) {
    die('Erro na conexão com o banco de dados: ' . $conn->connect_error);
}

$sqlCheckFavorite = "SELECT id FROM favoritos WHERE id_usuario = $usuarioId AND id_evento = '$eventThumbId'";
$resultCheckFavorite = $conn->query($sqlCheckFavorite);

if ($resultCheckFavorite->num_rows > 0) {
    echo 'Esse evento já está marcado como favorito para o usuário atual.';
} else {
    // Insere o ID do evento e o ID do usuário na tabela
    $sqlInsertFavorite = "INSERT INTO favoritos (id_usuario, id_evento) VALUES ($usuarioId, '$eventThumbId')";

    if ($conn->query($sqlInsertFavorite) === TRUE) {
        echo 'Evento favoritado com sucesso!';
    } else {
        echo 'Erro ao favoritar o evento: ' . $conn->error;
    }
}

// Fecha a conexão com o banco de dados
$conn->close();
?>