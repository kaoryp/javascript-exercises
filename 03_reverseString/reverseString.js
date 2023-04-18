const reverseString = function(string) {

    /* simplre solution
    //split string into array with split()
    let splitString = string.split("");

    //reverse the splitted string with reverse()
    let reverseArray = splitString.reverse();

    //join reversed array into string with join()
    let joinArray = reverseArray.join("");

    //return reversed string
    return joinArray;
    */

    /*solution with for loop */

    //create empty string to host new one
    let newString = "";

    //FOR loop
    for (let i = string.length - 1; i>= 0; i--) {
        newString += string[i];
    }
    return newString;



    

};

// Do not edit below this line
module.exports = reverseString;
