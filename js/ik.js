document.addEventListener("DOMContentLoaded", function() {
    const news = document.getElementById("per_news");


    news.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("news").scrollIntoView({ behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Если в URL есть хэш, прокручиваем до соответствующего элемента
    if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Обработчик для элемента с id="per_news"
    const newsLink = document.getElementById("per_news");
    if (newsLink) {
        newsLink.addEventListener("click", function(event) {
            event.preventDefault();
            const newsSection = document.getElementById("news");
            if (newsSection) {
                newsSection.scrollIntoView({ behavior: "smooth" });
                // Обновляем URL без перезагрузки страницы
                history.pushState(null, null, '#news');
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const dropdownButton = document.getElementById("dropdownButton");
    const dropdownContent = document.getElementById("dropdownContent");

    dropdownButton.addEventListener("click", function(event) {
        event.stopPropagation();
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    });

    dropdownContent.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});