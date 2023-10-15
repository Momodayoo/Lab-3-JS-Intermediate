/* Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own.*/ 

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

function unique (duplicatesArray){
    const uniqueSet = new Set (duplicatesArray);
    const uniques = Array.from(uniqueSet);

    return uniques;
}

console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]

{ 
const birds = ['crow', 'flamingo', 'swallow', 'swallow', 'crane', 'seagulls']
const food = ['flan', 'steak', 'roast', 'pizza', 'pasta', 'pasta']

function unique (duplicatesArray){
    const uniqueSet = new Set (duplicatesArray);
    const uniques = Array.from(uniqueSet);
    
    return uniques;
}
console.log (unique(birds))
console.log (unique(food))
}
