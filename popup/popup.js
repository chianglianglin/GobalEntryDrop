// ElEMENTS
const locationIdElement = document.getElementById("locationId")
const startDateIdElement = document.getElementById("startDateId")
const endDateIdElement = document.getElementById("endDateId")


//button elements
const startButton = document.getElementById("startButtonId")
const endButton = document.getElementById("stopButtonId")


startButton.onclick = () => {
    const prefs = {
        locationId : locationIdElement.value ,
        startDate : startDateIdElement.value ,
        endDate : endDateIdElement.value 
    }
    chrome.runtime.sendMessage({event : "onStart" , prefs})
    // if (startDateIdElement.value){
    //     console.log("startDate is ",startDateIdElement.value);
    // }else{
    //     console.log("startDate is not valid? ");
    // }
    
}

endButton.onclick = () => {
    chrome.runtime.sendMessage({event : "onStop"})
    // console.log("endDate", endDateIdElement.value);
}
chrome.storage.local.get(["locationId","startDate","endDate"],(result) => {
    const{locationId, startDate,endDate} = result

    if (locationId){
        locationIdElement.value = locationId
    }

    if (startDate) {
        startDateIdElement.value = startDate
    }
    if (endDate) {
        endDateIdElement.value = endDate
    }
})

