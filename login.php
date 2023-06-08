<?php
$host = 'localhost'; // nome do host do seu banco de dados
$username = 'root'; // nome de usuário do banco de dados
$password = ''; // senha do banco de dados
$database = 'siteeventos'; // nome do banco de dados

// Conexão com o banco de dados
$conn = new mysqli($host, $username, $password, $database);

// Verificar conexão
if ($conn->connect_error) {
    die("Falha na conexão com o banco de dados: " . $conn->connect_error);
}

// Código PHP para verificar a autenticação do usuário
$isLoggedIn = false;
// Verifique a autenticação do usuário aqui
// Se o usuário estiver autenticado, defina $isLoggedIn como true

// Processar envio do formulário de login
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $senha = $_POST["senha"];

    // Consulta SQL para verificar o e-mail e a senha
    $sql = "SELECT * FROM tbl_usuarios WHERE email = '$email' AND password = '$senha'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // As credenciais estão corretas
        session_start();

        // Armazenar o nome do usuário na sessão
        $row = $result->fetch_assoc();
        $_SESSION['nome'] = $row['nome'];
        $isLoggedIn = true;

        // Redirecionar para a página principal ou outra página de sua escolha
        header("Location: index.html");
        exit();
    } else {
        // Credenciais inválidas, exibir uma mensagem de erro ou redirecionar para uma página de erro
        echo "Credenciais inválidas. Tente novamente.";
    }
}
$isLoggedIn = isset($_SESSION['nome']);

// ...
?>
<script>
    var isLoggedIn = <?php echo $isLoggedIn ? 'true' : 'false'; ?>;

    if (isLoggedIn) {
        document.getElementById('btn-login').style.display = 'none';
        document.getElementById('btn-cadastro').style.display = 'none';
    }
</script>