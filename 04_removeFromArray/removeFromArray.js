/*```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```*/
//filter array method
    const removeFromArray = function(arr, ...theArgs) {
        
        arr = arr.filter(arg => !theArgs.includes(arg));
        return arr;
    };

    

// Do not edit below this line
module.exports = removeFromArray;
