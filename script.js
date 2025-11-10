// Get DOM Elements
let numbers = document.querySelector("#numbers-container")
let operators = document.querySelector("#operators-container")
let display = document.querySelector("#display")

// Create functions for math operations 
function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply  (a, b) {
    return a * b
}

function divide(a, b) {
  if (a === 0 && b === 0) {     
    return "Indeterminate"
  } else if (b === 0) {        
    return "Undefined"
  }
    return a / b
}

function operate(op, a, b) {
     if (operator === "+") {
        return add(a, b)
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "x") {
        return multiply(a, b)
    } else {
        return divide(a, b)
    }
}

// Display current number 
let currentValue = ""
let waitingForSecondNumber = false
let startNewCalculation = false

numbers.addEventListener("click", (event) => {
    if (event.target.classList.contains("num-btn")) {
        const digit = event.target.textContent
        if (startNewCalculation) {
        currentValue = ''           
        startNewCalculation = false
        }
        if (waitingForSecondNumber) {
            currentValue = digit      
            waitingForSecondNumber = false
        } else {
            currentValue += digit       
        }
        display.value = currentValue
    }
})

// Create clear button functionality
document.querySelector("#clear").addEventListener("click", () => {
    currentValue = ""
    display.value = ""
})

// Store first number and create second number
let previousValue = ""

operators.addEventListener("click", (event) => {
    if (event.target.classList.contains("op-btn")) {
        waitingForSecondNumber = true
        if (waitingForSecondNumber && previousValue !== '' && currentValue !== '') {
            const result = operate(operator, Number(previousValue), Number(currentValue))
            display.value = result
            previousValue = result.toString()
            } else {
            previousValue = currentValue
            }
        currentValue = ""
        operator = event.target.textContent
    }
})

let operator = ""

document.querySelector("#equals").addEventListener("click", () => {
    let num1 = Number(previousValue)
    let num2 = Number(currentValue)
    let firstResult
    
    if (operator === "+") {
        firstResult = add(num1, num2)
    } else if (operator === "-") {
        firstResult = subtract(num1, num2)
    } else if (operator === "x") {
        firstResult = multiply(num1, num2)
    } else {
        firstResult = divide(num1, num2)  
    }

    if (firstResult === "Indeterminate" || firstResult === "Undefined") {
    display.value = firstResult
    currentValue = "" 
    previousValue = "" 
    operator = ""
    startNewCalculation = true 
    waitingForSecondNumber = false
    return 
    }

    if (Number.isInteger(firstResult)) {
    display.value = firstResult
    } else {
    display.value = Number(firstResult.toFixed(8))
    }

    currentValue = display.value
    previousValue = ""
    operator = ""
    startNewCalculation = true
    waitingForSecondNumber = false
})

