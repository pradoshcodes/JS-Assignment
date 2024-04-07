let today =  new Date();

let chris = new Date(today.getFullYear(),11,25);
if(today.getMonth()==11 && today.getDate() == 25){
    chris.setFullYear(today.getFullYear()+1)
}

let time = 1000 * 60 * 60 * 24; // Time in ms for o en day
console.log(Math.ceil((chris.getTime() - today.getTime()) / (time)) +
" days left until Christmas!"); 