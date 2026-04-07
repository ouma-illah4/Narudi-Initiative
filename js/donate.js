// Get modal and elements
const modal = document.getElementById("donateModal");
const donateButtons = document.querySelectorAll("[data-modal='donateModal']");
const closeBtn = document.querySelector(".close-btn");
const paymentMethod = document.getElementById("paymentMethod");
const paymentDetails = document.getElementById("paymentDetails");

// Open modal
donateButtons.forEach(btn => {
  btn.addEventListener("click", () => modal.style.display = "block");
});

// Close modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Show payment instructions dynamically
paymentMethod.addEventListener("change", () => {
  const val = paymentMethod.value;
  if(val === "mpesa") {
    paymentDetails.innerHTML = `
      <h3>M-PESA Paybill</h3>
      <p>Paybill Number: <strong>8031411</strong></p>
      <ol>
        <li>Open M-PESA on your phone</li>
        <li>Select <strong>Lipa na M-Pesa</strong></li>
        <li>Select <strong>Paybill</strong></li>
        <li>Enter Paybill: <strong>8031411</strong></li>
        <li>Enter amount</li>
        <li>Confirm the payment</li>
      </ol>`;
  } else if(val === "bank") {
    paymentDetails.innerHTML = `
      <h3>Bank Transfer</h3>
      <p>Account Number: <strong>1345663110</strong></p>
      <p>Bank: Narudi Initiative Account</p>`;
  } else if(val === "card") {
    paymentDetails.innerHTML = `<p>You will be redirected to a secure card payment gateway after submitting the form.</p>`;
  } else if(val === "paypal") {
    paymentDetails.innerHTML = `<p>You will be redirected to PayPal to complete your donation.</p>`;
  } else {
    paymentDetails.innerHTML = "";
  }
});

// Form submission feedback
document.getElementById("donationForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you! Please follow the instructions above to complete your donation.");
  modal.style.display = "none";
});

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
   .then(() => console.log("Service Worker Registered"));
}
