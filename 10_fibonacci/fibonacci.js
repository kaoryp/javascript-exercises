const fibonacci = function(number) {
    number = parseInt(number);
let num1 = 0, num2 = 1, nextNum = number;
if(number < 0){
    return "OOPS"
}

for(let i=2; i <= number; i++){
    nextNum = num1 + num2;
    num1 = num2;
    num2 = nextNum;
   
} return nextNum;
};

// Do not edit below this line
module.exports = fibonacci;
