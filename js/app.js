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

setInterval(slide, 3000);

// Testimonial
const testimonials =
    [
        {
            src: `url("./images/p1.jpg")`,
            client: "John Doe",
            review: "This was a great trip to kashmir, my family would like to thank you all for making all the necessary arrangements."
        },
        {
            src: `url("./images/p2.jpg")`,
            client: "Sara Williams",
            review: "I'm so glad to choose Travello for our trip to Kashmir, they made our trip amazing. We'd like to thank them for making this happen."
        },
        {
            src: `url("./images/p4.jpg")`,
            client: "Abdul Ali",
            review: "Thank you team Travello for all the hospitality and arrangements. It was comforting to know you guys were a phone call away at any given notice."
        },
        {
            src: `url("./images/p3.jpg")`,
            client: "Emma Brooke",
            review: "Our cab driver was so respectful, courteous and conscientious. It was superb having all our arrangements taken care of."
        }
    ]
const testimonialImg = document.querySelector(".testimonial-img");
const clientName = document.querySelector(".client-name");
const review = document.querySelector(".review");
const markers = document.querySelectorAll(".marker");

let i = 0;
function loadTestimonial() {
    if (i >= testimonials.length) return i = 0;
    testimonialImg.style.backgroundImage = testimonials[i].src;
    review.innerText = testimonials[i].review;
    clientName.innerText = testimonials[i].client;


    markers.forEach((marker) => {
        if (marker.classList.contains("active-marker")) {
            marker.classList.remove("active-marker");
        }
    })
    markers[i].classList.add("active-marker");
    i++;
}


loadTestimonial();
setInterval(loadTestimonial, 3000);

// Manual Controls For Slider
// const nextBtn = document.getElementById("next-btn");
// const prevBtn = document.getElementById("prev-btn");

// nextBtn.addEventListener("click", () => {
//     if (counter < imgs.length) {
//         carouselSlide.style.transform = `translateX(${+(-100 * counter)}vw)`;
//         counter++;
//     }
// })

// prevBtn.addEventListener("click", () => {
//     counter--;
//     if (counter <= 0) return;
//     carouselSlide.style.transform = `translateX(${+(-100 * counter)}vw)`;
// })
