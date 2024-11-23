// Uppercase conversion
document.getElementById("convertUpperButton").addEventListener("click", function () {
    const inputText = document.getElementById("textInputUpper").value;
    const upperCaseText = inputText.toUpperCase();
    document.getElementById("outputUpperText").textContent = upperCaseText;
  });
  
  // Lowercase conversion
  document.getElementById("convertLowerButton").addEventListener("click", function () {
    const inputText = document.getElementById("textInputLower").value;
    const lowerCaseText = inputText.toLowerCase();
    document.getElementById("outputLowerText").textContent = lowerCaseText;
  });
  
  // Scroll to reveal images
  window.addEventListener('scroll', function () {
    const images = document.querySelectorAll('.fade-in-image');
    images.forEach((image) => {
      const position = image.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        image.classList.add('visible');
      }
    });
  });
  
  // Dynamic Content Loading (AJAX Simulation)
  document.getElementById('loadMore').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const contentDiv = document.getElementById('content');
        contentDiv.classList.add('show');
        data.slice(0, 4).forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('flip-card');
          postElement.innerHTML = `
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <h2>${post.title}</h2>
              </div>
              <div class="flip-card-back">
                <p>${post.body}</p>
              </div>
            </div>
          `;
          contentDiv.appendChild(postElement);
        });
      });
  });
  