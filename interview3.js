// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// Interviewers are looking for candidates who can not only clearly explain the solution along with the code, but also show the ability to think logically and articulate their thought processes. 

// Sample answer: By using the filter method on the array, I can check if each element is even or not by using the modulus operator (%) with 2. The element is even if the result is 0. This can be included in the new array. 

function filterEvenNumbers(numbers) { 

  return numbers.filter(num => num % 2 === 0); 

}