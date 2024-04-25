// 3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

// The interviewer is looking for the candidate’s familiarity with loop constructs, JavaScript string methods, and other basic JavaScript syntax. They will evaluate the candidate’s skills based on the approach used to solve the palindrome problem. 

// Sample answer: 


function isPalindrome(user) { 
  return user === user.split("").reverse().join(""); 
}

let user = prompt("Enter a number");
let result = isPalindrome(user);
console.log(`This is ${result}`);
