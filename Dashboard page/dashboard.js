function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.style.display = (sidebar.style.display === 'block' || sidebar.style.display === '') ? 'none' : 'block';
}


function logout() {
  localStorage.removeItem('username');
  alert('Logged out successfully.');
  window.location.href = '../index.html';
}









// Function to upload a new post with text and optional image
function uploadPost() {
  const caption = document.getElementById("caption").value;
  const image = document.getElementById("imageUpload").files[0];

  // Validate if caption is not empty
  if (caption.trim() !== '') {
    // Create post container
    const postContainer = document.createElement("div");
    postContainer.classList.add("post");

    // Create caption element
    const captionElement = document.createElement("p");
    captionElement.textContent = caption;
    postContainer.appendChild(captionElement);

    // Check if image file is selected
    if (image) {
      // Create image element
      const imageElement = document.createElement("img");
      imageElement.classList.add("post-image");
      const reader = new FileReader();
      reader.onload = function(e) {
        imageElement.src = e.target.result;
      };
      reader.readAsDataURL(image);
      postContainer.appendChild(imageElement);
    }

    // Add  date and time element
    const date = new Date();
    const dateTimeElement = document.createElement("div");
    dateTimeElement.classList.add("post-datetime");
    dateTimeElement.textContent = `Posted on: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    postContainer.appendChild(dateTimeElement);


    // Append new post to the beginning of posts section
    const postsSection = document.getElementById("posts");
    if (postsSection.firstChild) {
      postsSection.insertBefore(postContainer, postsSection.firstChild);
    } else {
      postsSection.appendChild(postContainer); // If no posts exist, add as first child
    }

    

    // Clear input fields after posting
    document.getElementById("caption").value = "";
    document.getElementById("imageUpload").value = "";
  } else {
    alert("Please enter a caption before posting.");
  }
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







