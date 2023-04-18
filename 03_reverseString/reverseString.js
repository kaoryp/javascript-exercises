const reverseString = function(string) {

    //split string into array with split()
    let splitString = string.split("");

    //reverse the splitted string with reverse()
    let reverseArray = splitString.reverse();

    //join reversed array into string with join()
    let joinArray = reverseArray.join("");

    //return reversed string
    return joinArray;

};

// Do not edit below this line
module.exports = reverseString;
