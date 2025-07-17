// Wait for the DOM to load before attaching the event listener
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get form field values
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const termsAccepted = document.getElementById("terms").checked;

    // Clear previous messages
    message.style.color = "red";
    message.textContent = "";

    // Password match check
    if (password !== confirmPassword) {
      message.textContent = "❌ Passwords do not match!";
      return;
    }

    // Terms checkbox check
    if (!termsAccepted) {
      message.textContent = "❌ You must agree to the terms and conditions.";
      return;
    }

    // Everything valid
    message.style.color = "green";
    message.textContent = "✅ Registration successful!";

    // Optionally clear the form after success
    form.reset();
  });
});
