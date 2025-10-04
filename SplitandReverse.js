// Global variable
var text = "Learn Playwright";

// Function to split and reverse
function splitAndReverse() {
    // Split into characters
    var splitText = text.split(""); 
    console.log('The splitted characteers are ${text}');
    
    // Reverse the array
    var reversedText = splitText.reverse(); 
    
    // Join back into string
    var joinedText = reversedText.join(""); 
    
    // Print separately
    console.log("Original Text: " + text);
    console.log("After Split (Array): ", splitText);
    console.log("After Reverse (Array): ", reversedText);
    console.log("Final Reversed String: " + joinedText);
}

// Call the function
splitAndReverse();
