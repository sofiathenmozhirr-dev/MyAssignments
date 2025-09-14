function launchbrowser() {
    var BrowserName = "edge";   // change this to "firefox" or "edge"

    if (BrowserName === "chrome") {
        console.log("The Browser Launched " + BrowserName);
    } else if (BrowserName === "firefox") {
        console.log("The Browser Launched " + BrowserName);
    } else if (BrowserName === "edge") {
        console.log("The Browser Launched " + BrowserName);
    } else {
        console.log("Unsupported browser");
    }
}

// call the function
launchbrowser();
