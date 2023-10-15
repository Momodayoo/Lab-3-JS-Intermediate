
//let salaries = {
//"Timothy" : 35000,
//"David" : 25000,
//"Mary" : 55000,
//"Christina" : 75000,
//"James" : 43000
//};


//a

function sumSalaries(salaries) {
    let total =0;

    for (const person in salaries){
        total += salaries[person]; //plus equal another way  of writring +-
    }
    return total
}
const salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
  };

  const totalSalaries = sumSalaries(salaries);
  console.log ("Total salaries:", totalSalaries)

//b
function topEarner(salaries) {
  let maxSalary = -Infinity;
  let topEarnerName = "";

  for (const person in salaries) {
    if (salaries[person] > maxSalary) {
      maxSalary = salaries[person];
      topEarnerName = person;
    }
  }

  return topEarnerName;
}

const topEarnerName = topEarner(salaries);
console.log("The top earner is:", topEarnerName);

