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
regardless of upper/lower case. */

const animals = ['Tiger', 'Giraffe']
console.log(animals)

//a
animals.push ('Whale, Dolphin')
console.log (animals)

//b 
animals.unshift ('Snake');
animals.unshift ('Lion');
console.log (animals)
//c

animals.sort ();
console.log( animals);
//d 
function replaceMiddleAnimal(newValue) {
       
    let halfway = animals.length/2;
    animals [halfway] = newValue
 }
replaceMiddleAnimal ("Turtle");
console.log (animals);

//e  

function findMatchingAnimal(beginsWith) {
    return animals.filter ((animals) => 
        animals.toLowerCase().startswith(beginsWith.toLowerCase())
    );
}
    console.log (findMatchingAnimal("s"));