const add = function(num1, num2) {
	addition = num1 + num2;
  return addition;
};

const subtract = function(num1, num2) {
	subtraction = num1 - num2;
  return subtraction;
};

const sum = function(array) {
  total = 0;
  for(var i in array){
    total += array[i]
  }
 return total;
};

const multiply = function(array) {
  var times = 1;
  for(var i = 0; i < array.length; i ++){
    times = times * array[i]
  }
 return times;

};

const power = function(num1, num2) {
  /*
  toThePower = num1**num2;
  return toThePower;
  */

  //or Math.pow()
  result = Math.pow(num1,num2);
  return result;
	
};

const factorial = function(number) {
  if(number < 0){
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return (number * factorial(number - 1));
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
