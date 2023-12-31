"use strict"

let number1Field;
let number2Field;
let answerField = 0;

window.onload = init;

function init() {
    number1Field = document.getElementById("number1Field");
    number2Field = document.getElementById("number2Field");

    document.getElementById("addButton").onclick = onAddButtonClicked;
    // addButton.onclick = onAddButtonClicked;   --it works but older versions of web browsers might not read it
    
    document.getElementById("subtractButton").onclick = onSubtractButtonClicked;
   
    document.getElementById("multiplyButton").onclick = onMultiplyButtonClicked;

    document.getElementById("divideButton").onclick = onDivideButtonClicked;

    document.getElementById("clearButton").onclick = onClearButtonClicked;
    
}

function onAddButtonClicked() {
    answerField = parseFloat(number1Field.value) + parseFloat(number2Field.value); 
    document.getElementById("answerField").value = answerField;
}

function onSubtractButtonClicked() {
    answerField = parseFloat(number1Field.value) - parseFloat(number2Field.value); 
    document.getElementById("answerField").value = answerField;
}

function onMultiplyButtonClicked() {
    answerField = parseFloat(number1Field.value) * parseFloat(number2Field.value); 
    document.getElementById("answerField").value = answerField;
}

function onDivideButtonClicked() {
    answerField = parseFloat(number1Field.value) / parseFloat(number2Field.value); 
    document.getElementById("answerField").value = answerField.toFixed(2);
}

function onClearButtonClicked() {
    document.getElementById("number1Field").value = "";
    document.getElementById("number2Field").value = "";
    document.getElementById("answerField").value = "";
}




