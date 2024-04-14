let employees=[{id:101,name:"Rahul Gandhi",salary:45000},
{id:102,name:"sonia Gandhi",salary:55000},
]
let createEmployee=(emp)=>{//execute will 3 sec
    setTimeout(()=>{
        employees.push(emp)
    },3000)
}

let getEmployees=()=>{// execute will 1 sec
    setTimeout(()=>{
      let rows=""
      employees.forEach((employees)=>{
        rows+=`<tr><td>${employees.id}</td><td>${employees.name}</td><td>${employees.salary}</td></tr>`; 
        })
        document.getElementById("data").innerHTML=rows
    },1000);
};
createEmployee({id:103,name:"priyanka gandhi",salary:65000});
getEmployees()