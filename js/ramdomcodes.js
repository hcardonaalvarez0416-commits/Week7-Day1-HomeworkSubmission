/* ------ RANDOM CODES ------ */

// Function to generate combination of characters
function generateCode() {
    // Create variables to store generated codes and allowed characters
    var code = ''; // Initialize to an empty string (no space inside)
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    // Generate characters using a loop
    for (var i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random() * str.length); // Get an integer index
        code += str.charAt(char); // Accumulate character
    }
    return code;
}

// Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

// Activate function
disableButton();

