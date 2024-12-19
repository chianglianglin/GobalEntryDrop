// ElEMENTS
const locationIdElement = document.getElementById("locationId")
const startDateIdElement = document.getElementById("startDateId")
const endDateIdElement = document.getElementById("endDateId")


//button elements
const startButton = document.getElementById("startButtonId")
const endButton = document.getElementById("stopButtonId")


startButton.onclick = function() {
    console.log("startDate",startDateIdElement.value);
}

endButton.onclick = function() {
    console.log("endDate", endDateIdElement.value);
}

