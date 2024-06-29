let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.slides');

function updateSlides() {
    slides.forEach((slide, index) => {
        slide.classList.remove('main-slide');
        if (index === currentSlide) {
            slide.classList.add('main-slide');
        }
    });
    slideContainer.style.transition = 'transform 1s ease';
    slideContainer.style.transform = `translateX(-${currentSlide * 120}px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlides();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlides();
}

document.querySelector('.slides').addEventListener('transitionend', () => {
    if (currentSlide === totalSlides) {
        slideContainer.style.transition = 'none';
        currentSlide = 0;
        slideContainer.style.transform = `translateX(0)`;
    }
});

setInterval(nextSlide, 3000);
updateSlides();
