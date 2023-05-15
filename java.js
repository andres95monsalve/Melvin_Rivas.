var barsMenu = document.querySelector(".bars__menu");
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

barsMenu.addEventListener("click", function() {
    animateBars();
    setTimeout(animateBars, 1000);
});

function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

document.addEventListener('click', function(event) {
    var targetElement = event.target;

    if (!nav.contains(targetElement) && !abrir.contains(targetElement)) {
        nav.classList.remove('visible');
    }
});