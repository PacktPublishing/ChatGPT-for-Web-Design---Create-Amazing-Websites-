// Select all the navigation links
const navLinks = document.querySelectorAll(".navbar a");

// Iterate over each link and add an event listener for smooth scrolling
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


// Select the arrow button
const arrowButton = document.querySelector(".arrow-icon");

// Add an event listener to the arrow button
arrowButton.addEventListener("click", () => {
  // Select the welcome text and new text elements
  const welcomeText = document.querySelector(".welcome-text");
  const generatedText = document.querySelector(".generated-text");
  clickedYes = 1;
  // Fade out the welcome text and arrow button
  welcomeText.style.display = "none";
  // After the welcome text has faded out, fade in the new text
  setTimeout(() => {
    generatedText.style.display = "flex";
  }, 500);
});




const sliderContainer = document.querySelector(".slider-container");
const sliderFrame = document.querySelector(".slider-frame");
const sliderContent = document.querySelector(".slider-content");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const images = ["purple_robo_brain.png", "brain_tree.png", "purple_colorful_brain.png"];
const titles = ["The Computer Intelligence", "Interconnected Design", "New Visions On Creation"];
const descriptions = [
  "For this project, we aimed to create a web design solution that could generate website content automatically, saving time and effort for businesses and individuals. To achieve this, we leveraged the power of AI and natural language processing (NLP) algorithms. Our AI system was trained on a vast dataset of text and web content, allowing it to understand and generate web content that is informative, engaging, and well-structured. The end result was a platform that could generate entire webpages, including product descriptions, about us pages, and blog articles, in a matter of seconds. The platform was user-friendly and allowed users to customize the content generated according to their preferences. This project was a game-changer in the world of web design and demonstrated the potential of AI to revolutionize the way we create and manage online content.",
  "In this project, we developed a web design tool that leverages the power of AI to create beautiful and effective landing pages. The tool used machine learning algorithms to analyze user data and generate landing pages that were optimized for conversions. The AI system was trained on a dataset of successful landing pages, allowing it to understand what elements were crucial for generating leads and sales. The end result was a platform that could create landing pages in a matter of minutes, eliminating the need for manual design and coding. The platform was easy to use, with a drag-and-drop interface that allowed users to customize their pages as needed. This project showed how AI can be used to simplify the web design process and improve the effectiveness of digital marketing efforts.",
  "In this project, we aimed to create a web design solution that could generate personalized web designs for businesses and individuals. The platform used AI algorithms to analyze user data and preferences, such as brand colors, logos, and target audience, to generate custom web designs that were tailored to their needs. The AI system was trained on a large dataset of web design elements and best practices, allowing it to understand how to create visually appealing and user-friendly designs. The end result was a platform that could create unique and effective web designs in a matter of minutes, without the need for manual design and coding. This project demonstrated how AI can be used to provide businesses and individuals with custom web designs that are both visually appealing and tailored to their needs, making it easier than ever to create a professional online presence."
];
let currentImageIndex = 0;

arrowLeft.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + images.length - 1) % images.length;
  updateSlider();
});

arrowRight.addEventListener("click", function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateSlider();
});

function updateSlider() {
  sliderFrame.querySelector("img").src = images[currentImageIndex];
  sliderContent.querySelector("h2").textContent = titles[currentImageIndex];
  sliderContent.querySelector("p").textContent = descriptions[currentImageIndex];
}

updateSlider();
