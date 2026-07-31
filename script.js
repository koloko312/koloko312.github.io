// Wait for the HTML document to fully load before running code
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab the button element from the HTML using its ID
    const colorBtn = document.getElementById('colorBtn');

    // Array of fun background colors to cycle through
    const colors = ['#f0f2f5', '#e0f2fe', '#fce7f3', '#fef3c7', '#dcfce7'];
    
    let colorIndex = 0;

    // Listen for a "click" event on the button
    colorBtn.addEventListener('click', () => {
        // Move to the next color in the array, looping back to the start if needed
        colorIndex = (colorIndex + 1) % colors.length;
        
        // Change the background color of the body
        document.body.style.backgroundColor = colors[colorIndex];
        
        console.log("Button was clicked! Background color changed.");
    });
});
