function LB()
{

if (Engine === "chrome")
{
    console.log("The Browser Launched " +BrowserName);
}
else if(Engine === "firefox")
{
    console.log("The Browser Launched " +BrowserName);

}
else if(Engine === "edge")
{
    console.log("The Browser Launched " +BrowserName);
    
}
else
{
    console.log("The Browser Not Launched ");
}
}
let Engine = "safari"
LB();

