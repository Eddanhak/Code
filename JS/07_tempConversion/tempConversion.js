
// Function to convert fahrenheit temperature to celsius.
// formula: (50F - 32) * 0.5556


const convertToCelsius = function(tempFahr) {

  let tempCelsius = ((tempFahr - 32) * 0.5556);
  tempCelsius = Math.ceil(tempCelsius * 10) / 10;
  return tempCelsius;

};


// Function to convert Celsius to Fahrenheit.
// Formula: (30C * 1,8) + 32 



const convertToFahrenheit = function(tempCels) {

  let tempFahrenheit = ((tempCels * 1.8) + 32);
  tempFahrenheit = Math.ceil(tempFahrenheit * 10) / 10;
  return tempFahrenheit;


};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
