const newString=(str)=>
str.length < 3 ? str : str.slice(0,3)+str.slice(-3);

console.log(newString('Hello World')); //Hell Wrld</