//check two numbers and return true if one of the number is 100 or if the sum  of both numbers is equal to 100

let equal =(a,b) =>
   a===100 || b===100 || (a+b) ===100 ?   true : false ;


console.log(equal(200,100));
console.log(equal(100,300));
console.log(equal(500,20));
console.log(equal(2,50));
console.log(equal(80,300));