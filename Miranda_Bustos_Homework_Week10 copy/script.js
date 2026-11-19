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

/* ===== 2BELLAS HAMBURGER MENU ===== */

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (menuToggle && mobileMenu) {
  function closeMenu() {
    menuToggle.classList.remove("open");
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
}

/* ===== 2BELLAS PHOTO SLIDESHOW ===== */

const heroSlides = document.querySelectorAll(".hero-slide");
const heroPrev = document.querySelector(".slide-arrow.prev");
const heroNext = document.querySelector(".slide-arrow.next");

if (heroSlides.length > 0 && heroPrev && heroNext) {
  let currentSlide = 0;

  function showSlide(index) {
    heroSlides[currentSlide].classList.remove("active");

    currentSlide =
      (index + heroSlides.length) % heroSlides.length;

    heroSlides[currentSlide].classList.add("active");
  }

  heroNext.addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  heroPrev.addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });

  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 5000);
}

