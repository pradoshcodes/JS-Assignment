const moveCharsForward =(str)=>
str.split('').map(char =>String.fromCharCode(char.charCodeAt()+1)).join(''); 
console.log(moveCharsForward('Hello'));