let calculate =(a,b,operation)=>{
   if(operation == "sum"){
    result= a + b; 
   }
   if(operation=="sub"){
    result = a - b ;
}
return `The ${operation} of ${a} and ${b} is ${result}`;
}
let output=calculate(10,20,"sum");
console.log(output);