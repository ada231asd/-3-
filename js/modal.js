document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const openModalButton = document.getElementById("openModalButton");
    const openModalButton2 = document.getElementById("openModalButton2");
   

    openModalButton.addEventListener("click", function() {
        modal.style.display = "block";
    });
    openModalButton2.addEventListener("click", function() {
        modal.style.display = "block";
    });

 
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});




