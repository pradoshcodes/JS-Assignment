// 2. Write a JavaScript program to find the maximum number in an array. 

// A hiring manager asks this question to analyze the candidate’s ability to write clear and efficient code. It’s crucial for candidates to explain the code step-by-step while demonstrating bug-free code. 

// Sample answer: 


let arr=[40,20,200,100,30,39]
function findMaxNumber(arr) { 

  return Math.max(...arr); 

} 
console.log((findMaxNumber(arr)));