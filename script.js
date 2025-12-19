// Fade in hero text/images on page load
window.addEventListener("DOMContentLoaded", () => {
  const fadeItems = document.querySelectorAll(".hero-text > *, .hero-img img, .hero-content h1, .hero-content p, .hero-images img");
  fadeItems.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("fade-in");
    }, i * 300);
  });
});

// Fade in elements on scroll
const scrollElements = document.querySelectorAll(".fade-on-scroll, .project-final img, .detail img, .detail, .project-card");

const elementInView = (el, divisor = 1) => {
  const top = el.getBoundingClientRect().top;
  return top <= (window.innerHeight || document.documentElement.clientHeight) / divisor;
};

const displayScrollElement = (el) => {
  el.style.opacity = 1;
  el.style.transform = "translateY(0)";
};

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 1.25)) displayScrollElement(el);
  });
};

window.addEventListener("scroll", handleScrollAnimation);
