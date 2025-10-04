let str = "JavaScript";

// Example 1: Basic usage
console.log(str.substring(0, 4));  
// Output: "Java"  (from index 0 to 3)

// Example 2: Without end index
console.log(str.substring(4));    
// Output: "Script" (from index 4 to end)

// Example 3: Swapping values
console.log(str.substring(4, 0)); 
// Output: "Java"  (JavaScript automatically swaps if start > end)

// Example 4: Whole string
console.log(str.substring(0, str.length)); 
// Output: "JavaScript"

// Example 5: Extract last 6 characters
console.log(str.substring(str.length - 6)); 
// Output: "Script"

