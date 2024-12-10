"use strict";

let DEBUG = false;
if (!DEBUG) {
    console.log = function() {}
}

let counterValue;
function setCounterValue() {
    let savedCounterValue = localStorage.getItem("counterValue");
    if (!savedCounterValue) {
        counterValue = 0;
    } else {
        counterValue = parseInt(savedCounterValue)
    }
}
setCounterValue();

let $counterMessage = document.getElementById("counter-message")

function generateCounterMessage() {
    return `You said no ${counterValue} times.`;
}
function setCounterMessage() {
    let text;
    if (counterValue === 0) {
        text = `You did not start the game!`;
    } else {
        text = generateCounterMessage();
    }
    $counterMessage.textContent = text;
}

function sayNoAction() {
    console.log(`counterValue = ${counterValue}`);

    counterValue += 1;
    localStorage.setItem("counterValue", counterValue);

    setCounterMessage();
}
function startAgainAction() {
    localStorage.removeItem("counterValue");

    setCounterValue();
    setCounterMessage();
}
