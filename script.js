// Wait for the DOM (Document Object Model) to fully load before running code
document.addEventListener("DOMContentLoaded", () => {
    
    // Select the button from our HTML document using its ID
    const colorButton = document.getElementById("colorButton");
    
    // Keep track of state for our click event
    let isOriginalColor = true;

    // Add an event listener to listen for a 'click' event on the button
    colorButton.addEventListener("click", () => {
        if (isOriginalColor) {
            // Change the body background color when clicked
            document.body.style.backgroundColor = "#dbeafe";
            colorButton.textContent = "Color Changed!";
        } else {
            // Revert back to the original background color
            document.body.style.backgroundColor = "#f0f2f5";
            colorButton.textContent = "Click Me!";
        }
        
        // Toggle the state flag
        isOriginalColor = !isOriginalColor;
    });
});
// Wait for the DOM (Document Object Model) to fully load before running code
document.addEventListener("DOMContentLoaded", () => {
    
    // --- Original Color Button Logic ---
    const colorButton = document.getElementById("colorButton");
    let isOriginalColor = true;

    colorButton.addEventListener("click", () => {
        if (isOriginalColor) {
            document.body.style.backgroundColor = "#dbeafe";
            colorButton.textContent = "Color Changed!";
        } else {
            document.body.style.backgroundColor = "#f0f2f5";
            colorButton.textContent = "Click Me!";
        }
        isOriginalColor = !isOriginalColor;
    });

    // --- Mini-Game Functionality ---
    const miniGameBtn = document.getElementById("miniGameBtn");
    const miniGameContainer = document.getElementById("miniGameContainer");
    const gameActionBtn = document.getElementById("gameActionBtn");
    const scoreDisplay = document.getElementById("score");
    const timeLeftDisplay = document.getElementById("timeLeft");

    let score = 0;
    let timeLeft = 5;
    let gameInterval = null;
    let isPlaying = false;

    // When the left side button is clicked, toggle the mini-game view and scroll to it
    miniGameBtn.addEventListener("click", () => {
        miniGameContainer.classList.toggle("hidden");
        miniGameContainer.scrollIntoView({ behavior: 'smooth' });
    });

    // Handle clicks inside the clicker mini-game
    gameActionBtn.addEventListener("click", () => {
        if (!isPlaying) {
            // Start a new round of the game
            isPlaying = true;
            score = 0;
            timeLeft = 5;
            scoreDisplay.textContent = score;
            timeLeftDisplay.textContent = timeLeft;
            gameActionBtn.textContent = "Click Fast!";
            gameActionBtn.style.backgroundColor = "#dc2626"; // Change button color to red for action

            // Start a 1-second countdown timer
            gameInterval = setInterval(() => {
                timeLeft--;
                timeLeftDisplay.textContent = timeLeft;

                // When time runs out
                if (timeLeft <= 0) {
                    clearInterval(gameInterval);
                    isPlaying = false;
                    gameActionBtn.textContent = "Play Again!";
                    gameActionBtn.style.backgroundColor = "#2563eb";
                    alert(`Time's up! Your final score is ${score} clicks! 🎉`);
                }
            }, 1000);
        } else {
            // Increment the player's score while the game is active
            score++;
            scoreDisplay.textContent = score;
        }
    });
});
