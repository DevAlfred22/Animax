const availableBooks = {
    "livro1": "bookPageVerde.html",
    "livro2": "bookPageVermelho.html",
    // Adicione mais livros conforme necessário
};

function searchBook() {
    const userInput = document.getElementById("bookInput").value.toLowerCase();
    const searchResults = document.getElementById("searchResults");

    if (availableBooks[userInput]) {
        // Livro encontrado, redirecione para a página correspondente
        window.location.href = availableBooks[userInput];
    } else {
        // Livro não encontrado, exiba uma notificação
        searchResults.innerHTML = `<p>Ops! Não temos esse livro no momento.</p>`;
    }
}
