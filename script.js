let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.style.display = "none"); 
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0; } 
    slides[slideIndex].style.display = "block"; 
    setTimeout(showSlides, 3000); 
}

function changeSlide(n) {
    const slides = document.querySelectorAll(".slide");
    slides[slideIndex].style.display = "none"; 
    slideIndex += n; 
    if (slideIndex >= slides.length) { slideIndex = 0; } 
    if (slideIndex < 0) { slideIndex = slides.length - 1; } 
    slides[slideIndex].style.display = "block"; 
}