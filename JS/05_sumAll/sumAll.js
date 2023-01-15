
// Function that takes 2 integers.(args).
// loops through from and to both integers.
// EX: 3, 10. 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10. 52.
// Works with the larger number first.
// Throws error with negative numbers, and non integer parameters. Strings, arrays and so on.




const sumAll = function(intOne, intTwo) {
    let finalSum = 0;

    if (typeof intOne === "number" && typeof intTwo === "number") {
        if (intOne >= 0 && intTwo >= 0) {
            if (intOne < intTwo) {
                finalSum += intOne
                for (let i = intOne; i < intTwo; i++) {
                    finalSum += (i+1);

                }
            } else {
                finalSum += intTwo;
                for (let i = intTwo; i < intOne; i++) {
                    finalSum += (i+1);
                }
            }


        }
        else  {
            return "ERROR";
        }

    } else {
        return "ERROR";
    }
    return finalSum;



};

// Do not edit below this line
module.exports = sumAll;
