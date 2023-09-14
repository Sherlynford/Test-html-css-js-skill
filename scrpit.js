// Your JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    let slideIndex = 0;
    const slideWidth = slides[0].clientWidth;

    function showSlide(index) {
      slider.style.transition = "transform 0.5s ease";
      slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    function nextSlide() {
      slideIndex = (slideIndex + 1) % slides.length;
      showSlide(slideIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
  });



