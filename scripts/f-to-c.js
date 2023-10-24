"use strict"

let fahrenheit;
let celsius;

window.onload = init;

function init()
{
    document.getElementById("convertButton").onclick = convertButton;
    document.getElementById("clearButton").onclick = clearButton;
}

function convertButton()
{
    fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    celsius = (fahrenheit - 32) * (5 / 9);

    document.getElementById("celsius").value = celsius.toFixed(2);
}

function clearButton()
{
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
}