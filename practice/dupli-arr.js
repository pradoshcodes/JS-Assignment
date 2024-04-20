let arr=[10,23,34,23,5,89,67,89];
let n=arr.filter((val,index,self)=>{
    return self.indexOf(val) !== index
})
console.log(arr);
console.log(n);