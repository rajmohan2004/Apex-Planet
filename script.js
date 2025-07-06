// Lazy load images if needed
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]");
  const loadImage = (img) => {
    img.src = img.dataset.src;
    img.removeAttribute("data-src");
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        obs.unobserve(entry.target);
      }
    });
  });
  images.forEach(img => observer.observe(img));
});

// Form submission
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
