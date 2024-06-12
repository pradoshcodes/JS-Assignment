let score="33"
console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);//"33"=>33
//"3abc"=>NAN
//true =>1;false=>0

let check="3abc"
console.log(typeof check);
let convert=String(check)
console.log(convert);
console.log(typeof convert);
let num=Number(check)
console.log(typeof num);
console.log(num);

let isloggedIn=true
let booleansIsLoggedIn=Boolean(isloggedIn)
console.log(booleansIsLoggedIn);
//1=>true;0=>false
//""=>false
//"hitesh"=>true

let someNumber=33
let StringNumber=String(someNumber)
console.log(StringNumber);
console.log(typeof StringNumber);



// operation //
let value=3
let neg=-value
console.log(neg);

let str="hello"
let str1="vigor"
let str2=str+str1
console.log(str2);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");
// console.log(((3+4)*5%3));
console.log(+true)
console.log(+"");


let gamecounter=100
++gamecounter;
console.log(gamecounter);
gamecounter++;
console.log(gamecounter);