const availableBooks = {
    
    "berserk": "https://mangaonline.biz/search/berserk",

    "boruto": "https://mangaonline.biz/manga/boruto-naruto-next-generations/l",

    "fairy": "https://mangaonline.biz/manga/fairy-tail/",

    "vinland": "https://mangaonline.biz/manga/vinland-saga/",

    "jujutsu": "https://mangaonline.biz/manga/jujutsu-kaisen/",

    "kaguya": "https://mangaschan.net/manga/kaguya-sama-wa-kokurasetai-tensai-tachi-no-renai-zunousen/",

    "nanatsu": "https://mangaonline.biz/manga/nanatsu-no-taizai/",

    "vagabond": "https://www.brmangas.net/manga/vagabond-online/",

    "borutotwo": "https://mangaonline.biz/manga/boruto-two-blue-vortex/",

    "kagura": "https://mangaonline.biz/manga/kagurabachi/",

    "shingeki": "https://mangaonline.biz/manga/shingeki-no-kyojin/",

    "onepiece": "https://mangaonline.biz/manga/one-piece/",

    "noragami": "https://mangaschan.net/manga/noragami/",

    "edenszero": "https://mangaschan.net/manga/edens-zero/",

  

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
