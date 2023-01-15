
// Function to remove one or more items from given array.
// 1 argument for the array. then atleast one argument for what to remove.

//  [1, 2, 3 ,4], 3 , 2.
// Checks index 0(1). False on both ifs.
// Checks index 1(2). True on second if.'

// A check for if the given arg is a integer in string form.
//  Check if the arg is string. > if string, check if string is NaN. > if string is NaN > splice.

const removeFromArray = function(arr, arg,...optArgs) {
    for (let i = 0; i < arr.length; i++) {
            if (arr[i] == arg) {
                if (typeof arg === "string") {
                    if (isNaN(arg)) {
                        arr.splice(i, 1);
                        i--;
                    }else {
                        continue;
                    }
                } else {
                    arr.splice(i, 1);
                    i--;
                }
            }

        if (optArgs.length > 1) {
            for (x = 0; x < optArgs.length; x++) {
                if (arr[i] == optArgs[x]) {
                    if (typeof optArgs[x] === "string") {
                        if (isNaN(optArgs[x])) {
                            arr.splice(i, 1);
                        }else {
                            continue;
                        }
                    } else {
                        arr.splice(i, 1);
                        i--;
                    }
                }
            }
            
        } else {
            if (arr[i] == optArgs[0]) {
                if (typeof optArgs[0] === "string") {
                    if (isNaN(optArgs[0])) {
                        arr.splice(i, 1);
                    }else {
                        continue;
                    }
                } else {
                    arr.splice(i, 1);
                    i--;
                }
            }
        }
    }
    return arr;
};


/*
function removeFromArray(arr, args, ...optArgs) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == args){
            arr.splice(i, args);
        }
        if (optArgs.length > 0) {
            for (let x = 0; x < optArgs.length; x++) {
                if (arr[i] == optArgs[x]) {
                    arr.splice(i, optArgs[x]);
                }
            }
        }
    }
    return arr;
}
*/
// Do not edit below this line
module.exports = removeFromArray;
