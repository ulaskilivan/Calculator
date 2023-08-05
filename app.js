var screen=document.getElementById("screen");
var validKeyboard=['0','1','2','3','4','5','6','7','8','9','/','*','+','-'];
function clearScreen(){
    screen.innerText="";
}
function operandToScreen(op){
    screen.insertAdjacentText("beforeend",op);
}
function numberToScreen(num){
    screen.insertAdjacentText("beforeend",num);
}

 document.addEventListener("keyup",keyboardListener);
 function keyboardListener(key){
    if(validKeyboard.includes(key.key)){
        screen.insertAdjacentText("beforeend",key.key);
    }
}