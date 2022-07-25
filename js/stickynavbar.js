// When the user scrolls the page, execute stickOnScroll
window.onscroll = function() {stickOnScroll()};

// Récupérer le header, le logo et le contenu principal de la page
var header = document.getElementById("sticky-header");

var minilogo = document.getElementById("minilogo");
var minilogotext = document.getElementById("minilogotext");
var content = document.getElementById("content");


// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickOnScroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    if (header.classList.contains('sticky')) {
        minilogo.classList.remove("invisible");
        minilogotext.classList.remove("invisible");
        content.classList.remove("headernotfixed");
    } else {
        minilogo.classList.add("invisible");
        minilogotext.classList.add("invisible");
        content.classList.add("headernotfixed");
    }
} 