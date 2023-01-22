
/*

Calculator.

Requirements:
. Global sum variable.(init value 0). Array? More functionality?
. Global user input variable? Array?
. Add function. 
. Subtract function.
. Divide function.
. Multiply function.
. Equals function.
. Clear function.
. Dot(float/decimal) function.


*/
const operatorContainer = document.querySelector("#container-functions"); 
const buttonContainer = document.querySelector("#container-buttons");
const buttons = buttonContainer.querySelectorAll(".btn");





const Calculator = {

 totalSum: 0,
 currentNumber: "",
 expression: [],
 decimalCheck: false,
 output: document.querySelector("#p-output"),


checkIfExists: function(exp){
if(/[+*/-]/.test(exp[exp.length-1])){
    return true; 
  }
}
,
 add: function(){
  /*
    Checks if "+" already exists with Array.from(arr[1]).
    If not, adds "+" to expression, and sets this.currentNumber value to "".
  */
 if(!this.checkIfExists(this.expression) && this.expression.length > 0){
  this.expression.push("+");
 }

}
 ,

 subtract: function(){
if (!this.checkIfExists(this.expression) && this.expression.length > 0) {
	  this.expression.push("-");

}
  
}
 ,
 divide: function(){
if (!this.checkIfExists(this.expression) && this.expression.length > 0) {
	  this.expression.push("/");

}
}
 ,
 multiply: function(){
if (!this.checkIfExists(this.expression) && this.expression.length > 0) {
	  this.expression.push("*");
}

 }
 ,
 decimal: function(exp, btnVal){
  if(exp[exp.length-1].includes(".")){
    return;
  }
  else{
    exp[exp.length-1] += btnVal;
    this.output.textContent += btnVal;


  }
}
 ,

 getOperators: function(exp){
  let arr = [];
  for(let i = 1; i < exp.length; i += 2){
    arr.push(exp[i]);
  }
  return arr;
 }
 ,
 equals: function() {
   // Show  as text on screen.
   /*
  Takes Array of expression, and converts to a expression and evaluates.

  Operators is always on every odd index. 
  Add every operator in expression array to new array.
  Always evaluate index 0 and 2 first. Add value to sum variable.
  if more than one operator, go through if statements on all operators
  and evalutate the sum var with corrent if.
  */

  let expLength = this.expression.length;
  let express = this.expression;
  let intOne = parseFloat(express[0]);
  let intTwo = parseFloat(express[2]);
  let operatorArr = this.getOperators(express);
  console.log(operatorArr);

  if(expLength < 3){
    return;
  }
    if(operatorArr[0] === "+"){
      this.totalSum = intOne + intTwo;
      this.expression = [];
      this.expression.push(`${this.totalSum}`);
      this.output.textContent = this.totalSum;
    }
    if(operatorArr[0] === "-"){
      this.totalSum = intOne - intTwo;
      this.expression = [];
      this.expression.push(`${this.totalSum}`);
      this.output.textContent = this.totalSum;

    }
    if(operatorArr[0] === "*"){
      this.totalSum = intOne * intTwo;
      this.expression = [];
      this.expression.push(`${this.totalSum}`);
      this.output.textContent = this.totalSum;

    }
    if(operatorArr[0] === "/"){
      this.totalSum = intOne / intTwo;
      this.expression = [];
      this.expression.push(`${this.totalSum}`);
      this.output.textContent = this.totalSum;

    }


 }
 ,

 clear: function(event) {
   this.expression = [];
   this.totalSum = 0;
   this.decimalCheck = false;
   this.currentNumber = "";
   this.output.textContent = "";
   console.log("Cleared.")
   console.log(this.expression);
 }
 ,

 undo: function(exp){
  let textLen = this.output.textContent.length;
  let lastElement = exp.length -1;
  if(exp.length > 0){
    if(exp[lastElement].length > 1){
      let lastChar = exp[lastElement].length -1;
      exp[lastElement] = exp[lastElement].substring(0, lastChar);
    }
    else{
      exp.splice(lastElement, 1);
      console.log(exp);
    }
  }
  this.output.textContent = this.output.textContent.substring(0, textLen-1);

}
 ,
 numbClick: function(event){
  let btnValue = event.target.innerText; // Shorter variable name for the button "text".
  let expressionLen = this.expression.length;

  if(event.target.tagName === "BUTTON"){
    if(btnValue !== "=" && btnValue !== "."){
    this.addNumber(this.expression, btnValue);
    this.output.textContent += btnValue;

      }
    else if(btnValue === "="){
      this.equals();
    }
    else if(btnValue === "."){
      this.decimal(this.expression, btnValue);
      }
    }
    }
,

 operatorClick: function(event){
  let expLength = this.expression.length;
  let operator = event.target.innerText;
  if(event.target.tagName === "BUTTON"){
    if(operator === "C"){
      this.clear(event);
      return;
    }if(operator === "↺"){
      this.undo(this.expression); 
    }
    if(operator === "+"){
      this.add();
    }
    if(operator === "-"){
      this.subtract();
    }
    if(operator === "*"){
      this.multiply();
    }
    if(operator === "/"){
      this.divide();
    }
  }
  if(this.expression[expLength-1] > 0 && operator !== "↺" && /[+*/-]/.test(this.expression[expLength-1]) != true){
    this.output.textContent += operator;
  }

}

 ,
 addNumber: function(exp, btnVal){
  expLen = exp.length;
    if(expLen > 0){
    if(/[+*/-]/.test(exp[expLen-1])){
        exp.push(btnVal);
      }
      else{
        exp[expLen-1] += btnVal;
      }
    }
    else {
      exp.push(btnVal);
    }
  }
,

keyPress: function(event,btnCont, exp){
  btnCont.forEach(function(btn){
    let btnVal = event.key; 
    if(btn.getAttribute("data-key") == event.keyCode){
      Calculator.addNumber(exp, btnVal);
      Calculator.output.textContent += btnVal;
    }
  })
  let textContArr = Array.from(Calculator.output.textContent)
  if(/[+*/=-]/.test(event.key)){
    if(event.key === "="){
      Calculator.equals();
    }
    if(event.key === "-"){
      Calculator.subtract();
      if(!textContArr.includes(event.key)){
        Calculator.output.textContent += event.key;
      }
    }
    if(event.key === "/"){
      Calculator.divide();
      if(!textContArr.includes(event.key)){
        Calculator.output.textContent += event.key;
      }

    }
    if(event.key === "+"){
      Calculator.add();
      if(!textContArr.includes(event.key)){
        Calculator.output.textContent += event.key;
      }
    }
    if(event.key === "*"){
      Calculator.multiply();
      if(!textContArr.includes(event.key)){
        Calculator.output.textContent += event.key;
      }
      
    }
  }
}

}



buttonContainer.addEventListener("click", (event) => Calculator.numbClick(event));
operatorContainer.addEventListener("click", (event) => Calculator.operatorClick(event));
document.body.addEventListener("keypress", (event) => Calculator.keyPress(event, buttons, Calculator.expression));
