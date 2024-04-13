//to get the extension of a filename

let filename=(str)=> str.slice(str.lastIndexOf(".") );

console.log(filename('index.html'));
console.log(filename('index.js'));
console.log(filename('index.java'));
console.log(filename('index.css'));