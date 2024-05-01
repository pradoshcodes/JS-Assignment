//Delete keyword
//==============================
const arr=["java","Js","Spring boot"]
delete arr[1];
console.log(`value: ${arr}`);
console.log(arr[1]);//it delete only value not delete an index.

//sort()
//========
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

//reverse()
//===========
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.reverse();
console.log(fruits1);

//push()
//==========
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.push("Kiwi");
console.log(fruits3);

//pop()
//==========
fruits4= ['apple', 'banana', 'cherry']
fruits4.pop(1)
console.log(fruits4);

//shift()
//=========
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.shift();
console.log(fruits5);

//unshift()
//============
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
fruits6.unshift();
console.log(fruits6);

//concat()
//==========
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
console.log(myGirls.concat(myBoys));

//join()
//============
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits7.join("+"));

//slice()
//========
const fruits8 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits8.slice(1,2)); //Returns Orange

//splice()
//===========
const fruits9 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits9.splice(1, 2)); 
console.log(fruits9.splice(1, 2,"Kiwi","Cherry"));

//isArray()
//==========
const fruit10 = ["Banana", "Orange", "Apple", "Mango"];
console.log(Array.isArray(fruit10))

//indexOf()
//=========
const numArr = [4, 3, 7, 1];
console.log(numArr.indexOf(3)); 


//lastindexOf()
//=================
let text = "Hello planet earth, you are a great planet.";
console.log(text.lastIndexOf("planet"));

//some()
//========
const ages = [3, 10, 18, 20];
console.log(ages.some(checkAdult));
function checkAdult(age) {
  return age > 18;
}


//every()
//=========
const ages1 = [32, 33, 16, 40];
console.log(ages1.every(checkAge));
function checkAge(age) {
  return age > 18;
}


//find()
//========
const ages2 = [3, 20, 24, 25];
function checkAge(age) {
  return age > 18;
}
console.log( ages2.find(checkAge));

//findIndex()
//=============
console.log(ages2.findIndex(checkAge));
function checkAge(age) {
  return age > 18;
}

//filter()
//=========
console.log(ages2.filter(checkAdult));

function checkAdult(age) {
  return age >= 18;
}


//valueOf()
//===========
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits2.valueOf());

//fill()
//=======
console.log(fruits.fill("Kiwi"));
console.log(fruits.fill("Kiwi", 2, 2));

//tostring
//==========
 console.log(fruits.toString());

 //forEach()
 //============
 let text2= "";
 fruits.forEach(function myFunction(item, index) {
    text2 += index + ": " + item + "<br>"; 
  })
  console.log("<p>"+text2+"</p>");
 