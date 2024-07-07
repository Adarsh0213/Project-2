document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const userID = document.getElementById('userID').value;
    const password = document.getElementById('password').value;
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    // Store in localStorage (for demonstration purposes)
    const userData = {
      userID,
      password,
      fullName,
      email
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Optionally, redirect to another page after signup
    alert('Sign up successful! Redirecting to login page.');
    window.location.href = '../login page/login.html';
  });
});


