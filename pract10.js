let sum=(a,b)=>{
    return a+b
}

let multi=(a,b)=>{
    return a*b
}

let calculate =(a,b,callback)=>{
    return callback(a,b)
}

let result =calculate(5,2,sum);
console.log(`The sum of 5 and 2 is ${result}`);// The sum of 5 and 2 is 7

result=calculate(5,3,multi);
console.log(result)