let mainValue = document.getElementById("main-value")

//delcares the number
let displayValue = 20

//displays the number
mainValue.textContent = displayValue


// LENGTH

let lengthCalc = document.getElementById("length-calc")

let feetValue = displayValue * 3.2808
let meterValue = displayValue * 0.3048

lengthCalc.textContent = displayValue + " meters = " + feetValue + " feet | " + displayValue + " feet = " + meterValue + " meters"


// // VOLUME

let volumeCalc = document.getElementById("volume-calc")

let gallonValue = displayValue * 0.2641 
let literValue = displayValue * 3.7854

volumeCalc.textContent = displayValue + " liters = " + gallonValue + " gallons | " + displayValue + " gallons = " + literValue + " liters"


// // MASS

let massCalc = document.getElementById("mass-calc")

let kiloValue = displayValue * 0.4535
let poundValue = displayValue * 2.2046

massCalc.textContent = displayValue + " kilograms = " + poundValue + " pounds | " + displayValue + " pounds = " + kiloValue + " kilograms"