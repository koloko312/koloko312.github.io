// Wait for the HTML document to fully load before running code
document.addEventListener('DOMContentLoaded', () => {
    
    // --- PART 1: Original Skeleton Code (Background Color Changer) ---
    const colorBtn = document.getElementById('colorBtn');

    // Array of fun background colors to cycle through
    const colors = ['#f0f2f5', '#e0f2fe', '#fce7f3', '#fef3c7', '#dcfce7'];
    let colorIndex = 0;

    // Listen for a "click" event on the original button
    colorBtn.addEventListener('click', () => {
        // Move to the next color in the array
        colorIndex = (colorIndex + 1) % colors.length;
        
        // Change the background color of the body
        document.body.style.backgroundColor = colors[colorIndex];
        
        console.log("Original button clicked! Background color changed.");
    });


    // --- PART 2: Video Game Code (Added Below) ---
    const gameBtn = document.getElementById('gameBtn');
    const scoreDisplay = document.getElementById('score');
    
    let score = 0; // Track the player's game score

    // Listen for clicks on the game button to increase score
    gameBtn.addEventListener('click', () => {
        score++; // Increment score by 1
        scoreDisplay.textContent = score; // Update the HTML counter text
        
        console.log(`Game score updated: ${score}`);
    });
});
