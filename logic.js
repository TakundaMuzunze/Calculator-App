const currentDisplay = document.getElementById('screen');
let resultDisplay = " ";

function defaultScreen (){
    if (currentDisplay.value === " "){
        currentDisplay.value = '0';
    }   
}
 defaultScreen();
