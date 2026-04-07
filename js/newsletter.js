document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletterForm");
  const confirmation = document.getElementById("confirmationMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop page reload

    // simple feedback for now
    confirmation.style.display = "block";
    form.reset();
  });
});
