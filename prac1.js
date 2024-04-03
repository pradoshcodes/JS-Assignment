// class Account{
//     acc_id;
//     acc_name;
//     acc_bal;
//     constructor(id,name,amount){
//       this.acc_id = id;
//       this.acc_name= name; 
//       this.acc_bal = amount;
//     }
// }
// let a1=new Account(101,"vigor",1000000);
// let a2=new Account(102,"pradosh",1202303)
// console.log(a1);
// console.log(a2);
// a1=new Account(108,"haris",10000086);
// console.log(a1);



class Account{
    acc_id;
    acc_name;
    acc_bal=0
    constructor(id,name,amount){
      this.acc_id=id;
      this.acc_name=name;
      this.acc_bal=amount;
    }
    open_Acc(){
        console.log("account open succesfully");
    }
    deposite_Acc(amount){
        this.acc_bal+=amount;
    }
    withdrawal_Acc(amount){
        this.acc_bal-=amount;
    }
    get_Bal(){
        return `${this.acc_bal}`
    }
    close_Acc(){}
}

let a1=new Account(101,"vigor",1000000);
 let a2=new Account(102,"pradosh",1202303)

 console.log(a1);
 console.log(a2);
 a1.deposite_Amount(122222);
 console.log(a1);
 a1.withdraw_Amount(7655)
 console.log(a2);