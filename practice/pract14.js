let arr=[10,23,34,23,5,89,67,89];
let n=((val,index,self)=>{
     self.indexOf(val) !== index
})
console.log(arr.filter(n));//[10, 34,  89]