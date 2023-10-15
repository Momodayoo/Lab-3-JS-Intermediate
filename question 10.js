const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

 

// Current time is 11:05:15 AM

//a
const currentMinutes = today.getHours() * 60 + today.getMinutes();
console.log(today.getMinutes() + ' minutes have passed so far today')

//b

const currentSeconds = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log(currentSeconds + ' seconds have passed so far today');


//c

const birthDate = new Date('1994-07-04'); // Replace 'YYYY-MM-DD' with birthdate in the format 'YYYY-MM-DD'


const ageInMilliseconds = today - birthDate;
const ageInSeconds = ageInMilliseconds / 1000;
const ageInMinutes = ageInSeconds / 60;
const ageInHours = ageInMinutes / 60;
const ageInDays = ageInHours / 24;
const ageInYears = Math.floor(ageInDays / 365);
const ageInMonths = Math.floor((ageInDays % 365) / 30); // Assuming an average month length of 30 days
const ageInDaysLeft = Math.floor(ageInDays % 30);

console.log(`I am ${ageInYears} years, ${ageInMonths} months, and ${ageInDaysLeft} days old`);

//d

function daysInBetween(date1, date2) {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    const daysDifference = Math.round(Math.abs((date2 - date1) / oneDay));
    return daysDifference;
  }
  
  const date1 = new Date('1994-07-04'); // Replace with the first date
  const date2 = new Date('2023-10-15'); // Replace with the second date
  
  const daysBetween = daysInBetween(date1, date2);
  console.log('Days in between:', daysBetween);
  