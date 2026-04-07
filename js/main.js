// js/main.js
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('primaryNav');
  const toggle = document.getElementById('navToggle');

  // Toggle mobile nav open/close
  toggle.addEventListener('click', function () {
    const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
    toggle.classList.toggle('open');
  });

  // Close mobile nav when a link is clicked
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('open');
    }
  });

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ===== Newsletter Form =====
  const form = document.getElementById("newsletterForm");
  const message = document.getElementById("confirmationMessage");

  if (form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // stop page reload
      form.style.display = "none"; // hide form
      if (message) message.style.display = "block"; // show success
    });
  }
});

