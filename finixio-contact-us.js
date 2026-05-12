var hamBurger = document.querySelector(".fa-bars");
var otherButtons = document.querySelector(".listed-nav");
var closeBurger = document.querySelector(".fa-times");

function pushHamburger() {

    if (window.innerWidth < 1024) {
        hamBurger.classList.remove("hidden");
        otherButtons.classList.add("hidden");
        closeBurger.classList.add("hidden");
        otherButtons.classList.remove("vertical")

    } else {
        hamBurger.classList.add("hidden");
        otherButtons.classList.remove("hidden");
        closeBurger.classList.add("hidden");
        otherButtons.classList.remove("vertical")
    }
}
function hamburgerPressed() {
    otherButtons.classList.remove("hidden");
    closeBurger.classList.remove("hidden");
    hamBurger.classList.add("hidden");
    otherButtons.classList.add("vertical");
}
function closeburgerPressed() {
    otherButtons.classList.add("hidden");
    hamBurger.classList.remove("hidden");
    closeBurger.classList.add("hidden")
}
window.addEventListener("load", pushHamburger);
window.addEventListener("resize", pushHamburger);
hamBurger.addEventListener("click", hamburgerPressed);
closeBurger.addEventListener("click", closeburgerPressed);