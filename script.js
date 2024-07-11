document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const userID = document.getElementById('UserID').value; // Corrected to match input id
    const password = document.getElementById('password').value;

    // Retrieve stored user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && userID === storedUserData.userID && password === storedUserData.password) {
      alert('Login successful!');
      window.location.href = './Dashboard page/Dashboard.html'; // Redirect to dashboard on success
    } else {
      alert('Invalid user ID or password. Please try again.');
    }
  });
});
