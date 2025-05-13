const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  validateForm();
});

function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
  input.classList.add('error');
}

function clearError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = '';
  input.classList.remove('error');
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}

function validateForm() {
  let valid = true;

  // Name
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    valid = false;
  } else {
    clearError(nameInput);
  }

  // Phone
  if (phoneInput.value.trim() === '') {
    showError(phoneInput, 'Phone number is required');
    valid = false;
  } else if (!/^\d{10}$/.test(phoneInput.value.trim())) {
    showError(phoneInput, 'Phone must be 10 digits');
    valid = false;
  } else {
    clearError(phoneInput);
  }

  // Email
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'Invalid email format');
    valid = false;
  } else {
    clearError(emailInput);
  }

  // Redirect if valid
  if (valid) {
    window.open('submit.html','_blank');
  }
}
