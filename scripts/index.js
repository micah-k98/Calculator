"use strict"

let number1Field;
let number2Field;
let answerField = 0;

window.onload = init;

function init() {
    number1Field = document.getElementById("number1Field");
    number2Field = document.getElementById("number2Field");

    // let addButton = document.getElementById("addButton");
    addButton.onclick = onAddButtonClicked;

    // let subtractButton = document.getElementById("subtractButton");
    subtractButton.onclick = onSubtractButtonClicked;

    // let multiplyButton = document.getElementById("multiplyButton");
    multiplyButton.onclick = onMultiplyButtonClicked;

    // let divideButton = document.getElementById("divideButton");
    divideButton.onclick = onDivideButtonClicked;

    clearButton.onclick = onClearButtonClicked;
    
}

function onAddButtonClicked() {
    answerField = parseInt(number1Field.value) + parseInt(number2Field.value); 
    document.getElementById("answerField").value = answerField;
}

function onSubtractButtonClicked() {
    answerField = parseInt(number1Field.value) - parseInt(number2Field.value); 
    document.getElementById("answerField").value = answerField;
}

function onMultiplyButtonClicked() {
    answerField = parseInt(number1Field.value) * parseInt(number2Field.value); 
    document.getElementById("answerField").value = answerField;
}

function onDivideButtonClicked() {
    answerField = parseInt(number1Field.value) / parseInt(number2Field.value); 
    document.getElementById("answerField").value = answerField.toFixed(2);
}

function onClearButtonClicked() {
    document.getElementById("number1Field").value = "";
    document.getElementById("number2Field").value = "";
    document.getElementById("answerField").value = "";
}




