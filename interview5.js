// let num=5
// function fun(){
//     return (num>1 || num%num==0 || num%1==0) ? console.log("The number is a prime number") :console.log("The number is not a prime number");
// }
// fun();

// function isPrime(num) {
//     // Immediate false if num is 1 or less
//     if (num <= 1) return false;
  
//     // Only check up to the square root of num
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         // num is divisible by some number other than 1 and itself
//         return false;
//       }
//     }
  
//     // If no divisors were found, num is prime
//     return true;
//   }

//   console.log(isPrime(2));  // true
// console.log(isPrime(3));  // true
// console.log(isPrime(4));  // false
// console.log(isPrime(11)); // true
// console.log(isPrime(121)); // false
// console.log(isPrime(17)); // true

  let num=5
  let sqrt=Math.sqrt(num)
  console.log(sqrt);