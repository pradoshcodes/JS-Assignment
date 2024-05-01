// Write a JavaScript program to calculate the factorial of a given number. 

let num=-5;
function fun(){
    let fact=1
    if(num<0) 
    return "undefined";
    else if(num==0 || num==1)
        return 1;
    
        else
        
        for(let i=2;i<=num;i++)
            fact *= i;
        return fact;
    

}
console.log("The factorial of "+num+" is: "+fun());