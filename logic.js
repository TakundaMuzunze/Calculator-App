const defaultDisplay = document.getElementById('screen');

function defaultScreen () {
    if (defaultDisplay.value === ""){
        defaultDisplay.value = '0';
    }   
}
defaultScreen();

function buttonClick (button){
    defaultDisplay.value += button.value;
}

function clearDisplay (button) {
    if (defaultDisplay !== '0'){
        defaultDisplay.value = '0';
    }
}