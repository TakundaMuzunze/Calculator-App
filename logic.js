const defaultDisplay = document.getElementById('screen');
let isDefaultDisplayed = false;

function defaultScreen() {
    if (!isDefaultDisplayed) {
      defaultDisplay.value = '0';
      isDefaultDisplayed = true;
    }
}

defaultScreen();

function buttonClick(button) {
    if (defaultDisplay.value === '0') {
      defaultDisplay.value = ''; 
    }
    defaultDisplay.value += button.value;
    button.blur();
}

function clearDisplay (button) {
    if (defaultDisplay !== '0'){
        defaultDisplay.value = '0';
    }
}