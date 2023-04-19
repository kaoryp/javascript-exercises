const convertToCelsius = function(temp) {
  let conversion = (temp - 32) * 0.5556;
  return Math.round(conversion * 10)/10;
};

const convertToFahrenheit = function(temp) {
  let conversion = (temp * 1.8) + 32;
  return Math.round(conversion * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
