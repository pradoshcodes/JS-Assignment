let employee=[
    {"id":295,"name":"Lodovico","email":"lbrant86@google.cn","gender":"Male"},
     {"id":297,"name":"Sandra","email":"sgerrelt88@biblegateway.com","gender":"Female"},
     {"id":298,"name":"Rodney","email":"rscoterbosh89@discovery.com","gender":"Male"},
     {"id":300,"name":"Lonee","email":"lwalkingshaw8b@mayoclinic.com","gender":"Female"},
     {"id":301,"name":"Bartlet","email":"bbaxter8c@naver.com","gender":"Male"}
]

let createemployee=(emp)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let flag=true
            flag ? resolve('go to Goa') : reject('work in prostack')
            employee.push(emp)
        },4000)
    })
}

let displayemployee=()=>{
    setTimeout(()=>{
        let rows=""
        employee.forEach((emp)=>{
          rows+=`<tr><td>${emp.id}</td><td>${emp.name}</td><td>${emp.email}</td><td>${emp.gender}</td></tr>`; 
          })
          document.getElementById("data").innerHTML=rows
    },2000)
}
createemployee( {"id":299,"name":"Wendel","email":"whussell8a@cnet.com","gender":"Male"})
.then((msg)=>{
    console.log(msg);
    displayemployee();
})
.catch((err)=>{
    console.log(err);
})