// Mobile Menu
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("main-nav");

hamburger.addEventListener("click", () => {
    mainNav.classList.toggle("show-nav");
    hamburger.classList.toggle("show-burger");
})

// Image Slider
const carouselSlide = document.getElementById("carousel-slide");
const imgs = document.querySelectorAll(".carousel-slide img");

let counter = 1;
function slide() {
    if (counter < imgs.length) {
        carouselSlide.style.transform = `translateX(${+(-100 * counter)}vw)`;
        counter++;
    }

    if (counter >= imgs.length) {
        counter = 0;
    }
}

setInterval(slide, 4000);


// Manual Controls For Slider
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

nextBtn.addEventListener("click", () => {
    if (counter < imgs.length) {
        carouselSlide.style.transform = `translateX(${+(-100 * counter)}vw)`;
        counter++;
    }
})

prevBtn.addEventListener("click", () => {
    counter--;
    if (counter <= 0) return;
    carouselSlide.style.transform = `translateX(${+(-100 * counter)}vw)`;
})
