const availableBooks = {
    "livro1": "URL_LIVRO_1",
    "livro2": "URL_LIVRO_2",
    "livro3": "URL_LIVRO_3",
    // Adicione mais livros conforme necessário
};

function searchBook() {
    const userInput = document.getElementById("bookInput").value.toLowerCase();
    const searchResults = document.getElementById("searchResults");

    if (availableBooks[userInput]) {
        // Livro encontrado, redirecione para a página do livro (cor verde)
        window.location.href = `https://mangaonline.biz/search/berserk`;
    } else {
        // Livro não encontrado, exiba uma notificação
        searchResults.innerHTML = `<p>Ops! Não temos esse livro no momento.</p>`;
    }
}
