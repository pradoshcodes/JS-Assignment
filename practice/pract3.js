let num = Math.ceil(Math.random()*10)
 console.log(num);

 let gnum = prompt('Guess one  number between  1 to 10')

 if(num==gnum){
    console.log("Matched");
 }
 else{
    console.log("Not match");
 }