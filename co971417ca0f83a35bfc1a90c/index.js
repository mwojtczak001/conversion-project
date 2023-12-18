/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtnEl = document.querySelector('.convert-button');
const inputFieldEl = document.querySelector('.input-field');
const lengthParagraphEl = document.querySelector('.length-conversion-paragraph');
const volumeParagraphEl = document.querySelector('.volume-conversion-paragraph');
const massParagraphEl = document.querySelector('.mass-conversion-paragraph');

convertBtnEl.addEventListener('click', function() {
    convertUnits('length');
    convertUnits('volume');
    convertUnits('mass');
    inputFieldEl.value = '';
})

let meterToFeet = 3.281 
let feetToMeter = 1 / 3.281
let literToGallon = 0.264
let gallonToLiter = 1 / 0.264
let kilogramToPound = 2.204
let poundToKilogram = 1 / 2.204



function convertUnits(type) {
    if (type === 'length') {
        let meterToFeetValue = inputFieldEl.value * meterToFeet;
        let feetToMeterValue = inputFieldEl.value * feetToMeter;
        lengthParagraphEl.innerHTML = `${inputFieldEl.value} meters = ${meterToFeetValue.toFixed(3)} feet | ${inputFieldEl.value} feet = ${feetToMeterValue.toFixed(3)} meters`
    } else if (type === 'volume') {
        let literToGallonValue = inputFieldEl.value * literToGallon;
        let gallonToLiterValue = inputFieldEl.value * gallonToLiter;
        volumeParagraphEl.innerHTML = `${inputFieldEl.value} liters = ${literToGallonValue.toFixed(3)} gallons | ${inputFieldEl.value} gallons = ${gallonToLiterValue.toFixed(3)} liters`
    } else if (type === 'mass') {
        let kilogramToPoundValue = inputFieldEl.value * kilogramToPound;
        let poundToKilogramValue = inputFieldEl.value * poundToKilogram;
        massParagraphEl.innerHTML = `${inputFieldEl.value} kilos = ${kilogramToPoundValue.toFixed(3)} pounds | ${inputFieldEl.value} pounds = ${poundToKilogramValue.toFixed(3)} kilos`
    }
}



