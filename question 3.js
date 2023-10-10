/*3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:
https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array
a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.
const animals = ['Tiger', 'Giraffe']
console.log(animals) */

const animals = ['Tiger', 'Giraffe']
console.log(animals)
//a
animals.push ('Whale, Dolphin')
console.log (animals)
//b 
animals.unshift ('Snake, Lion')
console.log (animals)
//c
{const animals2 = [ 'Snake, Lion', 'Tiger', 'Giraffe', 'Whale, Dolphin' ]
console.log (animals2.sort() ) } //<-- check this one
//d 
