document.addEventListener('DOMContentLoaded', function() {
  const addPostForm = document.getElementById('addPostForm');
  const postList = document.getElementById('postList');
  const imageUpload = document.getElementById('imageUpload');
  const profileImage = document.getElementById('profileImage');

  // Load posts and profile picture from local storage on page load
  loadPosts();
  loadProfilePicture();

  addPostForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const postImage = document.getElementById('postImage').files[0];
      const postCaption = document.getElementById('postCaption').value.trim();

      if (!postCaption) {
          alert('Please enter a caption or text for your post');
          return;
      }

      // Get the current date and time
      const currentDate = new Date();
      const dateTimeString = currentDate.toLocaleString();

      // Create a new post object
      const postObject = {
          image: postImage ? URL.createObjectURL(postImage) : null,
          caption: postCaption,
          dateTime: dateTimeString
      };

      // Save post to local storage
      savePost(postObject);

      // Create a new post element
      const postElement = createPostElement(postObject);

      // Add the new post to the beginning of the post list
      postList.insertBefore(postElement, postList.firstChild);

      // Clear the form
      addPostForm.reset();
  });

  // Handle profile picture upload
  imageUpload.addEventListener('change', function(event) {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
              const imageUrl = e.target.result;
              profileImage.src = imageUrl;
              localStorage.setItem('profilePicture', imageUrl);
          };
          reader.readAsDataURL(file);
      }
  });

  // Function to create a new post element with optional image and caption/text
  function createPostElement(post) {
      const postElement = document.createElement('div');
      postElement.className = 'post';

      if (post.image) {
          // Create image element if imageFile is provided
          const imageElement = document.createElement('img');
          imageElement.src = post.image;
          imageElement.alt = 'Posted Image';
          postElement.appendChild(imageElement);
      }

      // Create caption element
      const captionElement = document.createElement('div');
      captionElement.className = 'caption';
      captionElement.textContent = post.caption;
      postElement.appendChild(captionElement);

      // Create date and time element
      const dateTimeElement = document.createElement('p');
      dateTimeElement.className = 'date-time';
      dateTimeElement.textContent = `Posted on: ${post.dateTime}`;
      postElement.appendChild(dateTimeElement);

      return postElement;
  }

  // Function to save a post to local storage
  function savePost(post) {
      let posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.unshift(post); // Add the new post to the beginning of the array
      localStorage.setItem('posts', JSON.stringify(posts));
  }

  // Function to load posts from local storage
  function loadPosts() {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.forEach(post => {
          const postElement = createPostElement(post);
          postList.appendChild(postElement);
      });
  }

  // Function to load profile picture from local storage
  function loadProfilePicture() {
      const profilePicture = localStorage.getItem('profilePicture');
      if (profilePicture) {
          profileImage.src = profilePicture;
      }
  }

  // Example: Load user profile details (replace with your own logic)
  const fullName = 'John Doe';
  const userID = 'johndoe123';
  const email = 'john.doe@example.com';

  document.getElementById('fullName').textContent = fullName;
  document.getElementById('userID').textContent = userID;
  document.getElementById('email').textContent = email;
});


function logout() {
  localStorage.removeItem('username');
  alert('Logged out successfully.');
  window.location.href = '../index.html';
}