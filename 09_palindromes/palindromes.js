const palindromes = function (str) {
//all lower case and remove unwanted characters
var re = /[\W_]/g;

var lowRegStr = str.toLowerCase().replace(re, '');

//chaining method from freecodecamp article
var reverseStr = lowRegStr.split('').reverse().join(''); 

//check if reverseStr equal lowRegStr
return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
