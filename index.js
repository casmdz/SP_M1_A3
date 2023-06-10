// Number of posts to replicate
const numPosts = 3;

// Get the post container element
const postContainer = document.getElementById("post-container");

// HTML template for a single post
const postTemplate = `
<div class="show-post">

<div class="show-image"><img src="/images/raisin_cap.jpg" alt="Raisin still" style="width: auto;height: 200px;">
</div>

<div class="show-info">
  <h2>A Raisin in the Sun</h2>
  <h5 style="margin: 0;">April 6, 2020 - March 20, 2020</h5>
  <p style="color:#444444">Griot Theatre 233 State St Chicago,IL</p>
  <sub>$75</sub>
</div>

<div class="show-button">
<a href="/raisin.html" class="button">Read More</a>
</div>
</div>
`;

// Replicate the posts
for (let i = 0; i < numPosts; i++) {
  // Create a new div element
  const postElement = document.createElement("div");
  
  // Assign the post template as the inner HTML of the new div
  postElement.innerHTML = postTemplate;
  
  // Append the new post to the post container
  postContainer.appendChild(postElement);
}
