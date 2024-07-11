function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = (sidebar.style.display === 'block' || sidebar.style.display === '') ? 'none' : 'block';
}

function uploadPost() {
  const caption = document.getElementById('caption').value;
  const imageUpload = document.getElementById('imageUpload').files[0];

  if (caption && imageUpload) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const posts = document.getElementById('posts');

      const post = document.createElement('div');
      post.className = 'post';

      const img = document.createElement('img');
      img.src = e.target.result;
      post.appendChild(img);

      const captionElement = document.createElement('p');
      captionElement.textContent = caption;
      post.appendChild(captionElement);

      posts.insertBefore(post, posts.firstChild); // Add new post at the beginning

      // Clear input fields
      document.getElementById('caption').value = '';
      document.getElementById('imageUpload').value = '';
    };

    reader.readAsDataURL(imageUpload);
  } else {
    alert('Please enter a caption and select an image.');
  }
}





function logout() {
  localStorage.removeItem('username');
  alert('Logged out successfully.');
  window.location.href = '../index.html';
}





// Get references to DOM elements
const chatWindow = document.getElementById('chatWindow');
const chatInput = document.getElementById('chatInput');

// Function to send a message
function sendMessage() {
  const message = chatInput.value.trim(); // Trim removes leading/trailing whitespace

  if (message !== '') {
    displayMessage('You', message); // Display your message
    chatInput.value = ''; // Clear the input field

    // Simulate reply (for demonstration purposes)
    setTimeout(() => {
      displayMessage('Friend', 'Hello!'); // Simulated reply from friend
    }, 1000); // Delay for demonstration (1 second)
  }
}

// Function to display a message in the chat window
function displayMessage(sender, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatWindow.appendChild(messageElement);

  // Scroll to the bottom of the chat window
  chatWindow.scrollTop = chatWindow.scrollHeight;
}







