/*2. Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an
ellipsis (…) added to the end if it was too long, or the original text otherwise.
b) Write another variant of the truncate function that uses a conditional operator.
console.log(truncate(''This text will be truncated if it is too long', 25))
// This text will be truncat... */

function truncate(str, max, sep){
    // default to 25 characters
    max = max || 25; 

    var len = str.length; 
    if (len > max){

        // default to elipsis
        sep = sep || "...";

        var seplen = sep.length; 

        // if seperator is larger than character limit, right hand side of string will be shown 
        if (seplen > max){
            return str.substr (len - max);
        }
        // Half the difference between max and string length.
        // Multiply negative because small minus big.
        // Must account for length of separator too.
        var n = -0.005 * (max - len - seplen);

        // This gives us the centerline.
        var center = len/2;

        var front = str.substr(0, center - n);
        

        return front + sep;

    }

    return str;
}

console.log(truncate('This text will be truncated if it is too long', 25))

