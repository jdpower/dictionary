/* https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/menus/create */
browser.menus.create( {
    id: "log-selection",
    title: "Meaning of '%s'",
    contexts: ["selection"]
})

browser.menus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "log-selection") {
        console.log(tab)
        console.log(info)
        let selectedText = info.selectionText.split(" ")
        if (selectedText.length > 1) {
            // find a way to display message to user
            console.error("Please select one word")
        } else {
            console.log(selectedText)

            // browser.tabs.query({
            //     currentWindow: true,
            //     active: true
            // }).then(tabs => {
            //     console.log(tabs[0].id)
            //     browser.tabs.sendMessage(tabs[0].id, { word: selectedText })
            //         .then(response => { 
            //             console.log("Response from content: ")
            //             console.log(response.message)
            //         })
            // })

            let tabId = tab.id
            console.log(tabId)
            browser.tabs.sendMessage(tabId, { word: "selectedText" })
                .then(response => {
                    console.log("Response from content: ")
                    console.log(response.message)
                }).catch(error => {
                    console.error(error)
                })
        }
    }
})

