// var enames=["vigor","kanha", "shukraa", "suryaa"]


// enames.reduce((enames)=>{
//     console.log(enames);
// })



// var ids=[1,2,3,4,5,6,7]
// ids.forEach((id) => {
//     console.log((ids)); 
// })


let employee=[
    {id:1 , name:"John",salary:100},
    {id:2 ,name:"Rohit", salary:80 },
    { id : 3 , name :"Alice" , salary :90},
    { id : 3 , name :"Alice" , salary :90},
    { id : 3 , name :"Alice" , salary :90},
    { id : 3 , name :"Alice" , salary :90},
    { id : 3 , name :"Alice" , salary :90},
    { id : 3 , name :"Alice" , salary :90},
    { id : 3 , name :"Alice" , salary :90},
    { id : 3 , name :"Alice" , salary :90},
    { id : 3 , name :"Alice" , salary :90}

]

function displayemployee(){
   let row=""
   employee.forEach((emp) =>{
     row=row+`<tr>
     <td>${emp.id}</td> 
     <td>${emp.name}</td> 
     <td> ${emp.salary} </td>
     </tr>`
     
   });
  
    document.getElementById( 't-data' ).innerHTML = row
}