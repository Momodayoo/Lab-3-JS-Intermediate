/* 4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.*/

//a 
function camelCase(cssProp) { 
    return cssProp.toLowerCase().replace(/-(.)/, function(match, group1) {
        return group1.toUpperCase();
    });
}
//b 

const camelCase2 = (cssProp) => {
    let camelString = "";
    for (let word of cssProp.split("-")){
        camelString+=
        camelString.length == 0
        ? word
        : word.charAt(0).toUpperCase() + word.substring (1);
    }
    return camelString;
    };

    console.log(camelCase('margin-left')) // marginLeft
    console.log(camelCase('background-image')) // backgroundImage
    console.log(camelCase('display')) // display

