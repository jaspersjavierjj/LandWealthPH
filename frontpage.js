window.addEventListener("load", () => {

setTimeout(() => {

    // LAND animation
    document.getElementById("titleWrapper").classList.add("left-mode");

    // location text animation
    document.getElementById("locationText").classList.add("final-position");

    // navbar slide down
    document.querySelector(".navbar").classList.add("show-navbar");

}, 2000);


/* SHOW BUTTONS AFTER TITLE FINISHES */

setTimeout(() => {

    document.getElementById("heroButtons").classList.add("show-buttons");

}, 3500);

});

const page2 = document.querySelector(".page2");

let hasAnimated = false;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting && !hasAnimated) {

            hasAnimated = true; // prevents instant re-trigger

            // 1️⃣ TEXT
            const text = document.querySelector(".page2-text");
            text.classList.add("show");

            // 2️⃣ FEATURED IMAGE
            setTimeout(() => {
                document.querySelector(".page2-featured")
                    .classList.add("show");
            }, 500);

            // 3️⃣ PROPERTY CARDS (STAGGER)
            const cards = document.querySelectorAll(".property-card");

            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("show");
                }, 1000 + (index * 400)); 
                // starts AFTER image, then 1s interval each
            });

        }

        // RESET when scrolling back up
        if (!entry.isIntersecting) {
            hasAnimated = false;

            document.querySelector(".page2-text").classList.remove("show");
            document.querySelector(".page2-featured").classList.remove("show");

            document.querySelectorAll(".property-card")
                .forEach(card => card.classList.remove("show"));
        }

    });
}, {
    threshold: 0.2
});

observer.observe(page2);

// SLIDER LOGIC

let currentSlide = 0;

const slider = document.getElementById("sliderWrapper");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let autoSlide;

// UPDATE FUNCTION
function updateSlider(){
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // update dots
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

// NEXT
function nextSlide(){
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    updateSlider();
}

// PREV
function prevSlide(){
    currentSlide--;
    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }
    updateSlider();
}

// BUTTON EVENTS
document.getElementById("nextBtn").addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

// DOT CLICK
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
        resetAutoSlide();
    });
});

// AUTO SLIDE
function startAutoSlide(){
    autoSlide = setInterval(() => {
        nextSlide();
    }, 4000); // 4 seconds
}

// RESET TIMER WHEN USER INTERACTS
function resetAutoSlide(){
    clearInterval(autoSlide);
    startAutoSlide();
}

// INIT
startAutoSlide();