// js/programs.js

document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".learn-more-btn");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const card = button.closest(".program-card");
      const details = card.querySelector(".extra-details");

      const isOpen = details.classList.toggle("open");

      button.textContent = isOpen ? "Show Less" : "Learn More";

    });

  });

});
