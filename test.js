const n = 1.23456; // primitive floating point number
console.log(n.toFixed(2)) // 1.23 - fixed to 2 decimal places
console.log(n.toPrecision(10)) // 1.234560000 - fills or rounds to the exact number of digits
const hello = 'hello world' // primitive string
console.log(hello.toUpperCase()) // HELLO WORLD
console.log(hello.endsWith('world')) // true
//String like object
const user = {
        name: 'Momo',
        toString() {
            return this.name
        }
}
console.log("User: " + user )
// number like object 
const apple = {
    name : 'Apple',
    category: 'Golden',
    price : 1.2,
    valueOf() {
        return this.price
    }
}

console.log (apple * 5 ) // 6

// base conversion 
const ff = 255
const ee = 238
const dd = 221
console.log(ff.toString(16)) // ff
//convert from rgb colour code to hexadecimal
console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`) // #ffeedd

// imprecise calculations //
const point1 = 0.1; const point2 = 0.2;
console.log(`${point1} + ${point2} = ${point1 + point2}`) // 0.1 + 0.2 = 0.30000000000000004

// parse inT and parseFloat

console.log( parseInt("150px") ) // 150 - stops at 'px'
console.log( parseFloat("2.5em") ) // 2.5 - stops at 'em'
console.log( parseFloat("12.34.56") ) // 12.34 - stops at second invalid decimal
console.log( parseInt("a123") ) // NaN - can't parse the 'a' so stops

// string line break
// \n\r denotes a line break, \t tab space, \',\"" single or double quote

const guestList = `Guests: \n\t- John \n\t- Pete \n\t- Mary`
console.log(guestList)
//

// comparing string from code point 
console.log( 'Z'.codePointAt(0) ) // 90 <-- numeric code char from pos 
console.log( String.fromCodePoint(90) ) // Z <-- char code from numeric pos

// Manipulate string 

const string = 'I could be anything you like'
console.log(string.length) // 28 - string is 28 characters long
console.log(string.indexOf('anything')) // 11 - starting at 0 for 'I'
console.log(string.substring(20)) // 'you like' - substring starting at position 20
console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
console.log(string + ' plus more') // I could be anything you like plus more

///
const sentence = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence.startsWith('The')) // true - case sensitive
console.log(sentence.endsWith('dog')) // false - needs the full stop
console.log(sentence.split(' ')) // splits into multiple strings using the given separator
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
console.log(sentence.slice(4, 10)) // quick - gets the section between chars 4 and 10
console.log(sentence.replace('quick', 'slow')) // The slow brown fox jumps over the lazy dog.
console.log(" extra spaces ".trim()) // extra spaces - trims whitespace from start and end

/// Array declaration 
const arr1 = new Array(1,2,3) // constructor, not often used
const arr2 = [1,2,3] // array literal, much more common
console.log(arr1) // [ 1, 2, 3 ] - both do the same
console.log(arr2) // [ 1, 2, 3 ] - both do the same
{// console.log lastFruit
const fruits = ['Apple', 'Orange', 'Pear']
const lastFruit = fruits.pop() // removes and returns the last item
console.log(lastFruit); // Pear
console.log(fruits); // [ 'Apple', 'Orange' ]
fruits.push('Banana') // adds to the end of the array
console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]
}
////
{// const firstFruit
const fruits = ['Apple', 'Orange', 'Pear']
const firstFruit = fruits.shift() // removes and returns the first item
console.log(firstFruit) // Apple
console.log(fruits) // [ 'Orange', 'Pear' ]
fruits.unshift('Banana') // adds to the beginning of the array
console.log(fruits) // [ 'Banana', 'Orange', 'Pear' ]
}

/// internal arrays 
const fruits1 = ['Apple', 'Orange', 'Pear']
const fruits2 = fruits1 // refers to same memory location
fruits1.push('Banana') // add new item to the end of fruits1
console.log(fruits2) // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// fruits2 reflects the same change made to fruits1 since they are both references to the same place
console.log('fruit at index 0: '+fruits1[0]) // Apple
console.log('fruit at index 1: '+fruits1[1]) // Orange

// multidimensional arrays 
const matrix = [ // 3x3 matrix
[1, 2, 3], // row 0
[4, 5, 6], // row 1
[7, 8, 9] // row 2
]
console.log(matrix[1][1]) // 5, the value in the middle

const numbers = [1, 2, 3]
const strings = ["one", "two", "three"]
const empty = []
console.log('Numbers: ' + numbers) // Numbers: 1,2,3
console.log('Strings: ' + strings) // Strings: one,two,three
console.log('Empty: ' + empty) // Empty:

//Arrays splice method

const spliceArray = ["I", "study", "JavaScript", "right", "now"]
const removed = spliceArray.splice(0, 3, "Let's", "dance")
console.log(removed) // [ 'I', 'study', 'JavaScript' ]
console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ]

///////////

const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const sliced = sliceArray.slice(0, 3) // start at the beginning, get items up to index 3
const endSliced = sliceArray.slice(-3) // start at the end, get last 3 items
console.log(sliced) // [ 'red', 'orange', 'yellow' ]
console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]
console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


/////////////////// concat method
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [7,8,9]
const combined = array1.concat(array2, array3)
console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

/// forEach method 

const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
hobbits.forEach((hobbit, index) => { // usually we use an arrow function here
console.log(`#${index}: ${hobbit}`) // runs once for every item in array
})

//// indexOf method

const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-']
let bIndex = marks.indexOf('B-')
let eIndex = marks.indexOf('E')
// first index is always 0
console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index: 2
console.log(eIndex) // -1, since E is not found 

///////////// lastIndexOf method

let bIndexFirst = marks.indexOf('B-')
let bIndexLast = marks.lastIndexOf('B-')
console.log(marks[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is first at: 2
console.log(marks[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at: 6

////// find method 
const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' },
    { id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts' }
    ]
    //we usually use an arrow function - runs once for each array element until condition is true
    let jeans = products.find(product => product.title == 'Denim Jeans') //returns matching item
    let shirt = products.find(product => product.category == 'Shirts') //returns matching item
    console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
    console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
/////// filter method 
// we usually use an arrow function - runs once for each element, returns array of matches
let shirts = products.filter(product => product.category == 'Shirts')
let under50 = products.filter(product => product.price < 50)
console.log(shirts) // 2 matching items in shirts array
console.log(under50) // 3 matching items in under50 array


///// combined arrays 

    //get the titles of all products over $25:
    const over25Titles = products.filter(prod => prod.price > 25).map(prod => prod.title)
    console.log(over25Titles) // [ "Men's Hoodie", 'Denim Jeans' ]
    //list product ids and titles in descending order of price:
    const hiloProducts = [...products].sort((p1, p2) => p1.price - p2.price).reverse()
    .map(prod => ({id: prod.id, title: prod.title}))
    console.log(hiloProducts)
    // [ {id: 2, title: "Men's Hoodie"}, {id: 3, title: 'Denim Jeans'}, {id: 1, title: 'Sleeveless Tee'} ]


/////////// mapMethod

let titles = products.map(product => product.title)
let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>DenimJeans</h2>', '<h2>Ladies Tee</h2>' ]
console.log(raisedPrices) // all prices increased by $5

/////sortMethod
{
products.sort( (product1, product2) => product1.price - product2.price )
console.log(products) // original array is modified to new low-high price sorting order: 1,4,3,2
products.sort( (p1, p2) => p1.title > p2.title ? 1 : -1 )
console.log(products) // original array is modified to new title sorting order: 3,4,2,1
const numbers = [4,8,1,5,66,23,41]
console.log( numbers.sort() ) // [ 1, 23, 4, 41, 5, 66, 8 ] : string comparisons
console.log( numbers.sort((num1, num2) => num1 - num2) ) // [ 1, 4, 5, 8, 23, 41, 66 ]
}
///// sortMethod comparison 

const stringNums = ["1", "81", "41", "102", "35", "1004"]
const sortedNums = [...stringNums].sort()
console.log( stringNums.sort() ) // [ '1', '1004', '102', '35', '41', '81' ] : string comparisons
console.log( stringNums.sort((a, b) => a - b) ) // [ '1', '35', '41', '81', '102', '1004' ]

///// reverseMethod

const elements = ['Wind', 'Water', 'Fire', 'Air']
const reversed1 = elements.reverse() // modifies the original
const reversed2 = [...elements].reverse() // clone first to preserve the original
console.log(elements) // [ 'Air', 'Fire', 'Water', 'Wind' ]
console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] (reversed twice)

///// joinMethod 

console.log (elements.join() ) // Air,Fire,Water,Wind
console.log ( elements.join (' ')) // Air Fire Water Wind
console.log (elements.join ('; ') ) // Air; Fire; Water; Wind


/// reduceMethod

const products2 = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2 },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3 },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5 }
    ] // initial (below) should be 0 for reliability in calculating totals
    const totalPrice = products2.reduce((currentTotal, currentProduct2) => currentTotal + currentProduct2.price, 0)
    const totalQty = products2.reduce((currentQty, currentProduct2) => currentQty + currentProduct2.quantity, 0)
    console.log(totalPrice) // 128.85000000000002
    console.log(totalQty) // 10

/// Iterable object 

const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
for (let animal of animalsArr) { console.log(animal); } // prints each animal in turn
//const animalObj = { name: 'tiger', genus: 'panthera', class: 'mammal'}
//for (let property of animalObj) { console.log(property); } // TypeError: animalObj is not iterable

//// create new  map 

const exampleMap = new Map() // create new empty map object
exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
exampleMap.set('1', 'string one') // maps support keys of different types
exampleMap.set(true, 'true') // can have boolean keys
exampleMap.set({name: 'John'}, {phone: '0412345678'}) // object keys also valid
exampleMap.set('1', 'second string one') // overwrites previous value if key exists
console.log(exampleMap.size) // 4 - number of items in the map
console.log(exampleMap)
// Map(4) { 1 => 'number one','1' => 'second string one', true => 'true',{ name: 'John' } => { phone: '0412345678' } }

/// Map iteration 
const recipeMap = new Map([
    ['flour', '1 cup'],
    ['milk', '1/2 cup'],
    ['eggs', 2],
    ['butter', '50g']
    ])
    for (let ingredient of recipeMap.keys()) {
    console.log(ingredient ) // flour, milk, eggs, butter
    }
    for (let quantity of recipeMap.values()) {
    console.log(quantity) // 1 cup, 1/2 cup, 2, 50g
    }
    for (let item of recipeMap) { // same as recipeMap.entries()
    console.log(item) // ['flour', '1 cup'], (and so on)
    }

//// destructuring assignment or arrays

const mj = ['Michael', 'Jordan']
const [mjFirst, mjLast] = mj //destructure (unpack) array on right into separate variables on left
console.log(mjFirst, mjLast) // Michael Jordan

