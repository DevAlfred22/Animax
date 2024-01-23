<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $searchQuery = isset($_GET["q"]) ? $_GET["q"] : "";

    // Lógica de pesquisa simulada (substitua por sua lógica real de pesquisa)
    $livrosDisponiveis = ["Livro A", "Livro B", "Livro C"];

    if (in_array($searchQuery, $livrosDisponiveis)) {
        echo "<p>Encontramos o livro: $searchQuery</p>";
    } else {
        echo "<p>Não temos o livro: $searchQuery</p>";
        echo "<p>Que tal explorar outros livros em nossa coleção?</p>";
    }
}
?>
