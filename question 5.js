/*5. Decimal number operations in JavaScript can lead to unexpected results, as in the
following:
let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?
a) Explain why the above code returns the wrong answer
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns
the correct float result. https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Statements/switch may be useful.
d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.
HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below:
console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true*/

//a
let twentyCents = 0.20
let tenCents = 0.10

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen) //why is this not working? not the usual numerical expressions rather than use strings

//b
function currencyAddition(float1, float2){
    let wholeNumber1 =float1 * 100;
    let wholeNumber2 =float2 * 100;;
    
    return (wholeNumber1 + wholeNumber2) / 100;
}

//c 
function currencyOperation (float1, float2, operation){
    let wholeNumber1 = float1 * 100;
    let wholeNumber2 = float2 * 100;
    let wholeResult = 0;
    switch (operation){
        case "+":
        wholeResult = wholeNumber1 + wholeNumber2;
        break;
        case "*":
         wholeResult = wholeNumber1 * wholeNumber2;
        break;
        default: 
        wholeResult = wholeNumber1 + wholeNumber2;
    }
}

//d 

function currencyOperation (float1, float2, numDecimals){
    let factor = 10 ** numDecimals; //exponential for numDecimals=2 would be 10 to the power of 2, or 10*10
    let wholeNumber1 = float1 * factor;
    let wholeNumber2 = float2 * factor;
    let wholeResult = 0;
    switch (operation){
        case "+":
        wholeResult = wholeNumber1 + wholeNumber2;
        break;
        case "*":
         wholeResult = wholeNumber1 * wholeNumber2;
        break;
        case "/":
         wholeResult = wholeNumber1 / wholeNumber2;
        break;
        case "-":
        wholeResult = wholeNumber1 - wholeNumber2;
        break;
        default: 
        wholeResult = wholeNumber1 + wholeNumber2;
    }
    // rounds off any remainining decimals and divid by the factor multiplied by above
    return Math.round(wholeResult) / factor;
}