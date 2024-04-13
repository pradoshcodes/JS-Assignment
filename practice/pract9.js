const addNew=(str)=>
    str.indexOf('New!') ===0 ?str: 'New! not available' ; 

console.log('New!Hello World'); // New!Hello World
console.log(addNew("Hello World"));// Hello WorldNew!Hello World</s