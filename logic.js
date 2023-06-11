const defaultDisplay = document.getElementById('screen');
let isDefaultDisplayed = false;
let resultDisplay = '';

function defaultScreen() { //Default Display Function
    if (!isDefaultDisplayed) {
      defaultDisplay.value = '0';
      isDefaultDisplayed = true;
    }
}

defaultScreen(); 

function buttonClick(button) { // Display value when clicked
    if (defaultDisplay.value === '0') {
      defaultDisplay.value = ''; 
    }
    defaultDisplay.value += button.value;
    button.blur();
}

function sumOfValue (){ //Display result of 2 or more values. CODE HERE
    const expression = defaultDisplay.value;
    const sumResult = eval(expression);

    defaultDisplay.value = sumResult;
}

function clearDisplay (button) { //Clear display input when clear button is clicked
    if (defaultDisplay !== '0'){
        defaultDisplay.value = '0';
    }
}