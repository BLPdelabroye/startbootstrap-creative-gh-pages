// Script pour réduire la taille du bandeau lorsque l'utilisateur scroll
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    const header = document.getElementById("header");

    // Si l'utilisateur scroll plus de 50px, ajouter la classe "shrink"
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
}
