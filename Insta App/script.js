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
  window.location.href = '../Insta App/login page/login.html';
}






function openChat(friendName) {
  const chatWindow = document.getElementById('chatWindow');
  chatWindow.innerHTML = `<h3>Chat with ${friendName}</h3>`;
  loadMessages(friendName);
}


function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  const message = chatInput.value;
  const chatWindow = document.getElementById('chatWindow');

  if (message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message sent';
    messageElement.textContent = message;
    chatWindow.appendChild(messageElement);
    chatInput.value = '';
    
    // Simulate receiving a reply after 1 second
    setTimeout(() => {
      const replyElement = document.createElement('div');
      replyElement.className = 'message received';
      replyElement.textContent = 'This is a reply message.';
      chatWindow.appendChild(replyElement);
    }, 1000);
  }
}

function loadMessages(friendName) {
  // This function can be used to load previous chat messages with the friend from a database
  // For now, it's a placeholder function
  console.log(`Loading messages with ${friendName}`);
}