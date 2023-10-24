"use strict"

let celsius;
let fahrenheit;

window.onload = init;

function init()
{
    document.getElementById("convertButton").onclick = convertButton;
    document.getElementById("clearButton").onclick = clearButton;
}

function convertButton()
{
    celsius = parseFloat(document.getElementById("celsius").value);
    fahrenheit = (9 / 5) * celsius + 32;

    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

function clearButton()
{
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
}