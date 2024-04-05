//Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.

function diff(x){
    return ((Math.abs(100-x)<=20) || (Math.abs(400-x)<=20)) 
}
console.log(diff(10));
console.log(diff(90));
console.log(diff(200));
console.log(diff(500));