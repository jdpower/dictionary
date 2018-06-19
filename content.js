// document.body.textContent = "";

// var header = document.createElement('h1');
// header.textContent = "This page has been eaten";
// document.body.appendChild(header);

browser.runtime.onMessage.addListener(request => {
    console.log("Message from the background script:")
    console.log(request)
    return Promise.resolve({message: "Hi from content script"})
})
