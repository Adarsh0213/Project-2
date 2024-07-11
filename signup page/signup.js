
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
      
      // Fetch input field values
      const userID = document.querySelector('input[type="text"][placeholder="UserID"]').value.trim();
      const name = document.querySelector('input[type="text"][placeholder="Name"]').value.trim();
      const email = document.querySelector('input[type="text"][placeholder="Email"]').value.trim();
      const password = document.querySelector('input[type="password"][placeholder="Password"]').value.trim();

      // Store in localStorage (for demonstration purposes)
     const userData = {
      userID,
      name,
      email,
      password,

    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Optionally, redirect to another page after signup
    alert('Sign up successful! Redirecting to login page.');
    window.location.href = '../index.html';
  });
});



