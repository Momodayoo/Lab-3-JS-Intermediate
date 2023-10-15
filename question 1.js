/*1. Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.*/

console.log(ucFirstLetters("los angeles")) // Los Angeles

function ucFirstLetters(str) {
    // Split the string into words based on spaces
    const words = str.split(' ');
  
    // Capitalize the first character of each word and join them back
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word; // Handle empty words if any
      }
    });
  
    // Join the words back into a single string
    return capitalizedWords.join(' ');
  }
  
  const result = ucFirstLetters("los angeles");
  console.log(result); // Output: "Los Angeles"