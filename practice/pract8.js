const format=(date=new  Date())=>{
let day=date.getDate() ;
let month=date.getMonth() + 1;
let year=date.getFullYear();
return `${day}/${month}/${year}`;
}
console.log(format());
