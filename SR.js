function splitAndReverse()
{
let a= text.split("");
console.log(a);
let reversedChars = [];
for(let i= text.length -1; i>=0; i--)
{
    reversedChars.push(text[i]);
}
console.log("Reverese Characters:" + reversedChars);

}
let text ="Test Leaf";
splitAndReverse();


