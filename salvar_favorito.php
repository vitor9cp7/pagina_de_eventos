<?php
session_start();
// Configurações de conexão com o banco de dados
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'siteeventos';

// Obtém o ID do evento enviado via POST
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
    // O evento já está marcado como favorito, então vamos removê-lo
    $sqlRemoveFavorite = "DELETE FROM favoritos WHERE id_usuario = $usuarioId AND id_evento = '$eventThumbId'";

    if ($conn->query($sqlRemoveFavorite) === TRUE) {
        echo 'Evento removido dos favoritos com sucesso!';
    } else {
        echo 'Erro ao remover o evento dos favoritos: ' . $conn->error;
    }
} else {
    // O evento ainda não está marcado como favorito, vamos adicioná-lo
    $sqlInsertFavorite = "INSERT INTO favoritos (id_usuario, id_evento) VALUES ($usuarioId, '$eventThumbId')";

    if ($conn->query($sqlInsertFavorite) === TRUE) {
        echo 'Evento adicionado aos favoritos com sucesso!';
    } else {
        echo 'Erro ao adicionar o evento aos favoritos: ' . $conn->error;
    }
}

// Fecha a conexão com o banco de dados
$conn->close();
?>