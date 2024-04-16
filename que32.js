let goToGoa=(success,failure)=>{
    let acc_Bal=20000
    if(acc_Bal>50000){
        success('Go to Goa and enjoy')
}else{
    failure('go to prostack sit and practice')
}
}
goToGoa((msg)=>{
    console.log(msg);
},
(err)=>{
    console.log(err);
})
