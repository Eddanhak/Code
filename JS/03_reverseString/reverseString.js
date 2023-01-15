
/*
Function that return given string reversed.
Convert string to array.
for loop on the array length.



*/

const reverseString = function(string) {
    let stringArray = string.slice();
    let revString = " ";
    const arrLen = stringArray.length;
    
    for (let i = (arrLen -1); i > -1; i--) {
        revString += stringArray[i];
    }
    revString = revString.trimStart();
    return revString;


};

// Do not edit below this line
module.exports = reverseString;
