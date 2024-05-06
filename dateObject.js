let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);


// let createDate=new Date(2024, 4, 1)//(YYYY,MM,DD)
// console.log(createDate.toDateString());


// let createDate=new Date(2024, 4, 1,12,4)//(YYYY,MM,DD,hour,Minutes)
// console.log(createDate.toLocaleString());


let createDate=new Date("2024-05-02")//(YYYY-MM-DD)
createDate=new Date("05-02-2024")//(MM-DD-YYYY)
console.log(createDate.toLocaleString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(createDate.getTime());
console.log(Date.now()/1000);


let text = myDate.toLocaleTimeString();
console.log(text);