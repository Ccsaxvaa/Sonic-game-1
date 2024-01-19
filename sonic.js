
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    const scoreDisplay = document.getElementById('score');
    const usernameInput = document.getElementById('username');
const submitButton = document.getElementById('submitButton');
    let score = 0

    function jump() {
      if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
          dino.classList.remove("jump");
        }, 300);
      }
    }

    let isAlive = setInterval(function () {
      // get current dino Y position
      let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

      // get current cactus X position
      let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
      );

      // detect collision
      if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
        // collision
        alert(`Game Over! Your Score: ${score}`);
        score = 0; // Reset the score
        
        scoreDisplay.textContent = score;
      } else if (cactusLeft <= 0) {
        // dinosaur successfully jumped over the cactus
        updateScore();
      }
    }, 10);

    document.addEventListener("keydown", function (event) {
      jump();
    });

    function updateScore() {
      score += 5; // You can adjust the scoring logic as needed
      scoreDisplay.textContent = `Score: ${score}`;
    }
    
    
    
    document.addEventListener("DOMContentLoaded", function() {
      var link = document.getElementById('tamashi');
  
      // Check if the link exists on the page
      if (link) {
          link.addEventListener('click', function(e) {
              e.preventDefault(); // Prevent the default link behavior
  
              // Remove the background image when navigating to another page
              document.querySelector('body').style.display = 'none';
  
              // Navigate to the next page
              window.location.href = this.href;
          });
      }
  });
  function startGame() {
    const username = usernameInput.value.trim();

    if (username !== '') {
        // Enable the play button
        document.getElementById('ghilaki').disabled = false;

        // Add event listener to the play button
        document.getElementById('ghilaki').addEventListener('click', function () {
            // Redirect to the game page
            window.location.href = 'index1.html';
        });

        // Remove the background image when navigating to another page
        document.querySelector('body').style.display = 'none';

        // Navigate to the next page if the username is provided
        window.location.href = 'index1.html';
    } else {
        alert('Please enter your username to start the game.');
    }
}

  