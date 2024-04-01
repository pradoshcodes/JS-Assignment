// function leapyear(year){
   
//     return (year%100 == 0) ? (year % 400 == 0) : (year % 4 ==0)
// }

// console.log(leapyear(2000)); // true
// console.log(leapyear(1900)); // false
// console.log(leapyear(2008)); // true
// console.log(leapyear(2007)); // false
// console.log(leapyear(2012)); // false
// console.log(leapyear(2016)); // false
// console.log(leapyear(2018)); // false
// console.log(leapyear(2020)); // false
// console.log(leapyear(2022)); // false
// console.log(leapyear(2024)); // false

// Alter solution 


  const leapyear= year => new Date(year,1,29).getMonth() == 1; 
  
console.log(leapyear(2000)); // true
console.log(leapyear(1900)); // false
console.log(leapyear(2008)); // true
console.log(leapyear(2007)); // false
console.log(leapyear(2012)); // false
console.log(leapyear(2016)); // false
console.log(leapyear(2018)); // false
console.log(leapyear(2020)); // false
console.log(leapyear(2022)); // false
console.log(leapyear(2024)); // false