// Animate partner cards on scroll with stagger
const partnerCards = document.querySelectorAll('.partner-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150); // Stagger delay: 150ms between cards
      observer.unobserve(entry.target); // Animate once
    }
  });
}, { threshold: 0.2 });

partnerCards.forEach(card => observer.observe(card));

