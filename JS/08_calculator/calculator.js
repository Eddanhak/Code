const add = function(numb, numbTwo) {

    return numb + numbTwo;
};

const subtract = function(numb, numbTwo) {
  
  return numb - numbTwo;
	
};

const sum = function(arr) {

  if(arr.length !== 0){
    return arr.reduce(function(accumulator, initVal){
      return accumulator + initVal;
    },0)
  }
  else {
    return 0;
  }
}


const multiply = function(arr) {
  return arr.reduce(function(accumulator, initVal) {
    return accumulator * initVal;
  }, 1);

}
const power = function(numb, numbTwo) {
  return numb ** numbTwo;
	
};

const factorial = function(numb) {
  if(numb !== 0){
    factArr = [];
    for(let i = 1; i < numb +1; i++){
      factArr[i-1] = i;
    }
    return factArr.reduce(function(accumulator, currVal) {
      return accumulator * currVal;
    }, 1);
  }
  else{
    return 1;
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
