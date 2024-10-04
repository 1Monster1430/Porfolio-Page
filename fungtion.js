// Function to handle the download button click
document.getElementById("play-button").addEventListener("click", function() {
    alert("You are about to download the Tetris Game by Alwen T. Casagan!");

    // Change button text after clicking
    this.innerHTML = 'Downloading...';

    // Disable the button after clicking
    this.disabled = true;
});
