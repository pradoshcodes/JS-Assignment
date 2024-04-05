 //Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.

 function  startWithJava(str){
      if(str.length < 4){
        return false;
      }
      let front=str.substring(0,4);
      if(front == 'Java'){
        return  true;
      }else{
         return false;
       }
      }
      console.log(startWithJava("Java"));
      console.log(startWithJava("JavaScript"));
       console.log(startWithJava("Python"));
    