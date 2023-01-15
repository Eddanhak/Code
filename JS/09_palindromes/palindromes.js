
const palindromes = function (stringy) {
    let stringArr = Array.from(stringy);
    let stringFiltered = stringArr.reduce(function(a, b){
        if(b !== "!" && b !== " " && b !== "." && b !== ","){
            return a + b;
        }
        else{
            return a;
        }
    })
    let reversedStr = ""; 
    for(let i = stringFiltered.length-1; i > -1; i--){
        reversedStr += stringFiltered[i];
    }
    return reversedStr.toLowerCase() === stringFiltered.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
