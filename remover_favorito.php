<?php
session_start();
// Configurações de conexão com o banco de dados
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'siteeventos';

// Obtém o ID do evento e o ID do usuário enviados via POST
$eventThumbId = $_POST['id'];
$userId = $_SESSION['usuario_id'];

// Verifica se o favorito existe na tabela
$sqlCheckFavorite = "SELECT id FROM favoritos WHERE id_usuario = $userId AND id_evento = '$eventThumbId'";
$resultCheckFavorite = $conn->query($sqlCheckFavorite);

if ($resultCheckFavorite->num_rows > 0) {
    // Remove o favorito da tabela
    $sqlRemoveFavorite = "DELETE FROM favoritos WHERE id_usuario = $userId AND id_evento = '$eventThumbId'";

    if ($conn->query($sqlRemoveFavorite) === TRUE) {
        echo 'Favorito removido com sucesso!';
    } else {
        echo 'Erro ao remover o favorito: ' . $conn->error;
    }
} else {
    echo 'Esse evento não está marcado como favorito para o usuário atual.';
}


// Fecha a conexão com o banco de dados
$conn->close();
?>