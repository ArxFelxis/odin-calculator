// DOM Elements

/*
let clear = document.querySelector("clear")
let zero = document.querySelector("num-0")
let one = document.querySelector("num-1")
let two = document.querySelector("num-2")
let three = document.querySelector("num-3")
let four = document.querySelector("num-4")
let five = document.querySelector("num-5")
let six = document.querySelector("num-6")
let seven = document.querySelector("num-7")
let eight = document.querySelector("num-8")
let nine = document.querySelector("num-9")
let plus = document.querySelector("add")
let minus = document.querySelector("subtract")
let times = document.querySelector("multiply")
let divide = document.querySelector("divide")
let equals = document.querySelector("equals")
*/

let numberBtns = document.querySelector(".number-btns")
let operatorBtns = document.querySelector(".operators")
let display = document.querySelector("#display")

// Variables to store user keyed numbers and operator

let firstNum
let secondNum
let mathOp

// Basic mathematical operations 

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function divide(a, b) {
    return a / b
}

function multiply(a, b) {
    return a * b
}

// Calculate function 

function operate(a, b, op) {
    if (op === "+") {
        return add(a, b)
    } else if (op === "-") {
        return subtract(a-b)
    } else if (op === "/") {
        return divide(a, b)
    } else {
        return multiply(a, b)
    }
}

// Make number buttons display

numberBtns.addEventListener("click", (event) => {
    let target = event.target

    switch(target.id) {
        case "zero":
            display.value += 0
            break
        case "one":
            display.value += 1
            break
        case "two":
            display.value += 2
            break
        case "three":
            display.value += 3
            break
        case "four":
            display.value += 4
            break
        case "five":
            display.value += 5
            break
        case "six":
            display.value += 6
            break
        case "seven":
            display.value += 7
            break
        case "eight":
            display.value += 8
            break
        case "nine":
            display.value += 9
            break
    }
})

// Make operator buttons display

operatorBtns.addEventListener("click", (event) => {
    let target = event.target

    switch(target.id) {
        case "add":
            display.value = "+"
            break
        case "subtract":
            display.value = "-"
            break
        case "multiply":
            display.value = "x"
            break
        case "divide":
            display.value = "÷"
            break
    }
})