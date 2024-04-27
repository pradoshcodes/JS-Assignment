const score =100
const scoreValue=100.3

const loggedin=false
const outside=null

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);//both are not same,value are same but return value is different.

const bignumber=3453235667432345543n

const arr=["vigor","is","awesome"]
let obj={
    name:"vigor",
    age:28,
}
const myfun=function(){
    console.log("hello world");
}

console.log(typeof bignumber);
console.log(typeof outside);
console.log(typeof loggedin);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof myfun)
console.log(typeof scoreValue);
console.log(typeof  score);