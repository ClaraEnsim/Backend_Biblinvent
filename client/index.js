document.addEventListener("DOMContentLoaded", function () {
    const themeOptions = document.querySelectorAll(".theme-option");

    themeOptions.forEach(option => {
        option.addEventListener("click", function () {
            this.classList.toggle("selected");
        });
    });

    document.getElementById("book-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let title = document.getElementById("title").value;
        let type = document.getElementById("type").value;
        let audience = document.getElementById("audience").value;
        let summary = document.getElementById("summary").value;

        let selectedThemes = [];
        document.querySelectorAll(".theme-option.selected").forEach(theme => {
            selectedThemes.push(theme.getAttribute("data-value"));
        });

        if (!title || !type || selectedThemes.length === 0 || !audience || !summary) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        console.log({
            title: title,
            type: type,
            themes: selectedThemes,
            audience: audience,
            summary: summary
        });

        alert("Données soumises avec succès !");
        this.reset();
        document.querySelectorAll(".theme-option").forEach(theme => theme.classList.remove("selected"));
    });
});
