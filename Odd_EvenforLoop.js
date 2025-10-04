
function checkOddEven(number) {
    if (number % 2 === 0) {
        console.log(number + " is Even");
    } else {
        console.log(number + " is Odd");
    }
}


for (let i = 1; i <= 10; i++) {
    checkOddEven(i); 
}
