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
animals.unshift ('Snake, Lion')
console.log (animals)
//c

let animal = [ 'Snake', 'Lion', 'Tiger', 'Giraffe', 'Whale', 'Dolphin' ]
animal.sort (function (a, b) {
    return a.length - b.length;
});
console.log( animal);
//d 
function replaceMiddleAnimal(newValue) {

    const list = [
        "Snake",
        "Lion",
        "Tiger",
        "Giraffe",
        'Whale',
        "Dolphin"
    ];

    list.splice (2, 1, "Turtle");

    console.log (list);
}
replaceMiddleAnimal();

//e  

function findMatchingAnimal(beginsWith) {
    
    const list = [
        { id: 1, Animal: 'Snake', type: 'reptile', limb: 0 },
        { id: 2, Animal: 'Lion', type: 'mammal', limb: 4 }, 
        { id: 3, Animal: 'Tiger', type: 'mammal', limb: 4 },
        { id: 4, Animal: 'Giraffe', type: 'mammal', limb: 4},
        { id: 5, Animal: 'Whale', type: 'mammal', limb: 0},
        { id: 6, Animal: 'Dolphin', type: 'mammal', limb: 0}]
    }
       const object = list.find (obj => obj.id === 3);
console.log (object)