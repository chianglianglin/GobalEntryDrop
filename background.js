// let data = {
//     "event" : "onStop/onStart",
//     "prefs" : {
//         "locationId": "123",
//         "startDate": "2039-03-03",
//         "endDate": "2044-04-05"
//     }
// }


chrome.runtime.onMessage.addListener(data => {
    const {event , prefs} = data
    switch(event) {
        case "onStop":
            onStopEvent()
            break;

        case "onStart":
            onStartEvent(prefs)
            break;
        default:
            break;
    }
})

const onStopEvent = () => {
    console.log("On stop in background")
}

const onStartEvent = (prefs) => {
    console.log("On start in background")
    console.log("prefs received", prefs)
    chrome.storage.local.set(prefs)
}