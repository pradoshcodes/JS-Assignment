class Account{

    // acc_Id;
    // acc_Name;
    acc_bal=0;
    // open_Account(){
    //     console.log("Account create successfully");
    // }
    deposite_Amount(amount){
        this.acc_bal += amount;
    }
    get_bal(){
      return this.acc_bal;  
    }
    withdraw_Amount(){
    this.acc_bal=this.acc_bal-amount; 
    }
    // close_Account(){
    //     console.log("close account  successfully");
    // }
}


let a1=new Account();
let a2=new Account();


console.log(a1);
a1.deposite_Amount(554)
console.log(a1);
console.log(a2);


//  a1.open_Account()
 a2.deposite_Amount(12981)
 console.log(a2);
//  a1.get_bal()
//  a1.withdraw_Amount()
//  a1.close_Account()


// we can ot invoked constructor method explicitly
// it automatically execute at the time of object creation

// purpose is to initialize value automatically