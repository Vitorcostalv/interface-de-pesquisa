document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const consulta = document.getElementById('search-input').value;
    if (consulta) {
        window.location.href = `https://www.google.com/search?q=${consulta}`;
    }
});
