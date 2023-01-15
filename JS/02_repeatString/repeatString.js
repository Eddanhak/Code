



const repeatString = function(string, num) {

    let counter = 0;
    let repeatedString = "";

    if (num < 0) {
        return "ERROR";
    } else {

        while (counter < num) {
            repeatedString += string;
            counter++;
        };
        return repeatedString

    };
};

// Do not edit below this line
module.exports = repeatString;
