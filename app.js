 var screen=document.getElementById("screen");
 var validKeyboard=['0','1','2','3','4','5','6','7','8','9','/','*','+','-'];
 var validOperands=['x','/','+','-','*','.','='];
 function clearScreen(){
     screen.innerText="";
 }
 function operandToScreen(op){
     if(!validOperands.includes(screen.innerText.slice(-1))||screen.innerText.slice(-1)===""){
         screen.insertAdjacentText("beforeend",op);
     }
 }
 function numberToScreen(num){
     screen.insertAdjacentText("beforeend",num);
 }
  document.addEventListener("keyup",keyboardListener);
  function keyboardListener(key){
     if(validKeyboard.includes(key.key)){
         if(!validOperands.includes(key.key)||!validOperands.includes(screen.innerText.slice(-1))){
             screen.insertAdjacentText("beforeend",key.key);
         }
     }
     else if(key.key==='Backspace'){
         screen.innerText=screen.innerText.slice(0,-1);
      }
      if(key.key==='Enter'){
        calculatorBack();
      }
 }
 function calculatorBack(){
    let calculation=screen.innerText;
    if(validOperands.includes(calculation.slice(-1))){
        calculation=calculation.slice(0,-1);
    }
    if(validOperands.includes(calculation[0])&&calculation[0]!='-'){
        calculation=calculation.slice(1);
    }
    console.log(calculation);
    screen.innerText=eval(calculation);
 }