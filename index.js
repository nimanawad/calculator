

num1 = 8;
num2 = 2;
let nump1ra = document.getElementById("num1pra");
let num2pra = document.getElementById("num2pra")

let display = document.getElementById("display");
let sym = document.getElementById("symbols")
let show = document.getElementById("show");
function add(){
    let sum = num1 + num2;
    display.textContent = sum
    num1pra.textContent = num1
    sym.textContent = "+"
    num2pra.textContent = num2
    
    show.textContent =num1 + " + " + num2 + " = "+" The sum is : " + sum;
}   

function substract(){
    let sum = num1 - num2;
    display.textContent = sum
    num1pra.textContent = num1
    sym.textContent = "-"
    num2pra.textContent = num2
    show.textContent =num1 + " - " + num2 + " = "+" The Substract is : " + sum;
}

function divide(){
    let sum = num1 / num2;
    display.textContent = sum
    num1pra.textContent = num1
    sym.textContent = "/"
    num2pra.textContent = num2

    show.textContent =num1 + " / " + num2 + " = "+" The divide is : " + sum;
}

function multiply(){
    let sum = num1 * num2;
    display.textContent = sum
    num1pra.textContent = num1
    sym.textContent = "*"
    num2pra.textContent = num2
    show.textContent =num1 + " * " + num2 + " = "+" The Multiply is : " + sum;
}

