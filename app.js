let output = '';
let numOne = '';
let numTwo = ''
let operator = '';

//not constants!! Cached elements
const display = document.querySelector(".display");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equals = document.querySelector('.equals');

// Functions

// Number click - how do we get the number to display and store?

const numClick = (event) => {
  if (numOne && operator) {
    display.innerText += event.target.innerText
    numTwo = display.innerText
  } else{
    display.innerText += event.target.innerText
    numOne = display.innerText
  }
///clear
  if(output) {
    clearClick()
  }
}

//Operator click - how do get an operator to display and store?

const operatorClick = (event) => {
  operator = event.target.innerText
  display.innerText = ''
}

// Equals click - how do we display a calculated value?


const equalsClick = (event) => {
  if (operator === '+') {
    output = numOne + numTwo
  } else if (operator === '-') {
    output = numOne - numTwo
  } else if (operator === '*') {
    output = numOne * numTwo
  } else if (operator === '/') {
    if (numTwo === '0') {
      output = "Error"
    } else {
      output = numOne / numTwo
    }
  }
  display.innerText = output
}

// Clear click - how do we clear the calculator?
const clearClick = (event) => {
  display.innerText = ''
  numOne = ''
  numTwo = ''
  operator = ''
  output = ''
}


//Event Listeners

numberBtns.forEach((btn) => {
  btn.addEventListener('click', numClick)
})
operatorBtns.forEach((btn) => {
  btn.addEventListener('click', operatorClick)
})
equals.addEventListener('click', equalsClick)
clear.addEventListener('click', clearClick)



// Step 1: When user clicks a number display it to the screen
//         If they click another number it should add on to the display
//         Store the number if no operator is clicked as numOne
// Step 2: If a user clicks an operator
//         Add operator to the display
//         If another operator is clicked, replace the existing one
// Step 3: If the user clicks another number start adding that to the display
//         Store value after operator as numTwo
// Step 4: If the user clicks = then calculate the numOne + operator + numTwo
//         Display the result
// Step 5: If a user clicks clear at any time, clear the display as well as numOne and numTwo
