// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// Interviewers are looking for candidates who can not only clearly explain the solution along with the code, but also show the ability to think logically and articulate their thought processes. 

// Sample answer: By using the filter method on the array, I can check if each element is even or not by using the modulus operator (%) with 2. The element is even if the result is 0. This can be included in the new array. 


let number=[10,12,35,46,78,80,100,29,97];
let even=number.filter(check);
function check(num){
  return num=> num%2==0 ? console.log("The even numbers are : "+even) :console.log("The odd numbers are: "+num);
}
console.log("The even numbers are : "+even)
// The numbers are : 10,12,46,80
