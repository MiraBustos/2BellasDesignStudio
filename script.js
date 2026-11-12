// ABOUT ME INTERACTION
const aboutBtn = document.getElementById("aboutBtn");
const aboutStory = document.getElementById("aboutStory");

if (aboutBtn && aboutStory) { 
    aboutBtn.addEventListener("click", ()=> { 
    aboutStory.hidden = !aboutStory.hidden;
    if (aboutStory.hidden) {
        aboutBtn.textContent = "Get to Know Me";
        aboutBtn.setAttribute("aria-expanded", "false");
    } else {
        aboutBtn.textContent = "Show Less";
        aboutBtn.setAttribute("aria-expanded", "true");
    }
});
}

// PHOTOGRAPHY SCROLL ANIMATION

const photHeading = document.querySelector(".work-section h2");

const photoObserver = new IntersectionObserver(( entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        }); 
    }, { threshold: 0.2 });
const photoHeading = document.querySelector(".photography-heading");
    if (photoHeading) {
        photoObserver.observe(photoHeading);
    }

// SERVICES CAROUSEL
const carousel = document.querySelector(".services-container");
const prevBtn = document.getElementById("prevService");
const nextBtn = document.getElementById("nextService");
if (carousel && prevBtn && nextBtn) {
    const moveAmount = () => {
        const card= carousel.querySelector(".service-card");
        return card ? card.getBoundingClientRect().width + 20 : 300;
};
nextBtn.addEventListener("click", () => {
carousel.scrollBy({ left: moveAmount(), behavior: "smooth" });
});
prevBtn.addEventListener("click", () => {
carousel.scrollBy({ left: -moveAmount(), behavior: "smooth"});
});
}
// RANDOM COLOR INTERACTION
const colorBtn = document.getElementById("colorBtn");
const servicesSection = document.querySelector(".services-section");

const colors = ["#fff0f3", "#fce4ec", "#f5e6dc", "#f3e5f5", "#e8f0eb"];

if (colorBtn && servicesSection) {
  colorBtn.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    servicesSection.style.backgroundColor = randomColor;
  });
}