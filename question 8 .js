/*8. The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.

a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book*/


const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a
const phoneBookDEF = new Map ([
//b
['David','0400000079'],
['Popo', '0400040404'],
['Nana', '0497483939'],
['Lora', '0349400022'],
]); 

function printPhoneBook (contacts) {
    for (let entry of contacts) {
        console.log(entry);
    }
    printPhoneBook (phoneBookABC);
}
phoneBookABC.set ('Caroline', '911'); // replace 'new number'

console.log (phoneBookABC, phoneBookDEF)

const phoneBook = new Map(
    
    [...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]) 
);
console.log([...phoneBook.keys()]);//