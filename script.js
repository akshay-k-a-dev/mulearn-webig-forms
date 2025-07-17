document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting directly

  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();
  const termsAccepted = document.getElementById('terms').checked;
  const message = document.getElementById('message');

  if (password !== confirmPassword) {
    message.textContent = '❌ Passwords do not match!';
    return;
  }

  if (!termsAccepted) {
    message.textContent = '❌ You must accept the terms and conditions.';
    return;
  }

  message.style.color = 'green';
  message.textContent = '✅ Form submitted successfully!';

  
  this.reset();
});
