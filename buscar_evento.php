<?php
// Configurações de conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "siteeventos";

// Obtém a ID do evento da consulta GET
$eventoId = $_GET['id'];

// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve um erro na conexão
if ($conn->connect_error) {
  die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Consulta SQL para buscar os dados do evento com base na ID
$sql = "SELECT nome, local, DATE_FORMAT(dataInicio, '%Y-%m-%d %H:%i:%s') AS dataInicio, DATE_FORMAT(dataFim, '%Y-%m-%d %H:%i:%s') AS dataFim, imagem, link FROM eventos WHERE id_evento = $eventoId";

// Executa a consulta SQL
$result = $conn->query($sql);

// Verifica se a consulta retornou resultados
if ($result->num_rows > 0) {
  // Obtém os dados do evento
  $row = $result->fetch_assoc();

  // Cria um array com os dados do evento
  $eventoData = [
    'titulo' => $row['nome'],
    'local' => $row['local'],
    'date' => [$row['dataInicio'], $row['dataFim']],
    'imagem' => $row['imagem'],
    'link' => $row['link']
  ];

  // Converte o array em formato JSON e imprime na saída
  echo json_encode($eventoData);
} else {
  // Caso não haja resultados, retorna uma resposta vazia
  echo json_encode([]);
}


// Fecha a conexão com o banco de dados
$conn->close();
?>