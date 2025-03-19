const display = document.getElementById("display");

function ClickToDisplay(input){
 display.value += input;

}

function Calculate(){
  display.value = eval(display.value);
}

function ClearDisplay(){
  display.value = "";
}