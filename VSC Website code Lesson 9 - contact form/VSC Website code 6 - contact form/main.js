const navLinks = document.querySelectorAll("nav a");

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function(event) {
        event.preventDefault();
        const sectionId = this.getAttribute("href");
        document.querySelector(sectionId).scrollIntoView({
            behavior: "smooth"
        });
    });
}

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
let slideIndex = 0;

// Show the first slide
slides[slideIndex].style.display = "block";

// Add event listeners to the buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

function prevSlide() {
  slides[slideIndex].style.display = "none";
  slideIndex--;
  if(slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides[slideIndex].style.display = "block";
}

function nextSlide() {
  slides[slideIndex].style.display = "none";
  slideIndex++;
  if(slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
}
