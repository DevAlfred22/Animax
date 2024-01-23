document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const searchQuery = formData.get('q');

        fetch(`pesquisa.php?q=${encodeURIComponent(searchQuery)}`)
            .then(response => response.text())
            .then(data => {
                resultadoDiv.innerHTML = data;
            });
    });
});
