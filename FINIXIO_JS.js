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

var introFinixio = document.querySelector(".second-page-para");
introFinixio.innerHTML = introFinixio.innerHTML.toUpperCase();
var thirdNews = document.querySelector(".third-page-para");
thirdNews.innerHTML = thirdNews.innerHTML.toLocaleUpperCase();


const track = document.querySelector(".third-page-div");
const slides = document.querySelectorAll(".slides");
const prevBtn = document.querySelector(".circle-one");
const nextBtn = document.querySelector(".circle-two");

let currentIndex = 0; // Start at first slide

// Function to move slides
function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 50}%)`;
}

// Next button
nextBtn.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // loop back to first
    }
    updateCarousel();
});

// Previous button
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // loop to last
    }
    updateCarousel();
});

