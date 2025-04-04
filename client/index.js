document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("book-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let title = document.getElementById("title").value;
        let type = document.getElementById("type").value;
        let themes = Array.from(document.getElementById("themes").selectedOptions).map(opt => opt.value);
        let audience = document.getElementById("audience").value;
        let summary = document.getElementById("summary").value;

        if (!title || !type || themes.length === 0 || !audience || !summary) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        console.log({
            title: title,
            type: type,
            themes: themes,
            audience: audience,
            summary: summary
        });

        alert("Données soumises avec succès !");
        this.reset();
    });
});
