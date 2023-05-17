// JavaScript code to handle slider functionality
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const counter = document.querySelector('.counter');

let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const slideCount = slides.length;

function showSlide(n) {
  slideIndex = (n + slideCount) % slideCount;

  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  slides[slideIndex].style.display = 'block';

  // Update counter
  counter.textContent = `${slideIndex + 1}/${slideCount}`;
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

// Event listeners for arrow buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Automatically advance the slider
let intervalId;

function startSlide() {
  intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

function stopSlide() {
  clearInterval(intervalId);
}

// Pause the auto slide when hovering over the slider container
slider.addEventListener('mouseover', stopSlide);

// Resume the auto slide when the mouse leaves the slider container
slider.addEventListener('mouseout', startSlide);

// Initial display
showSlide(slideIndex);
startSlide();