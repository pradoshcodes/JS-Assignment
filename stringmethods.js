//length()
//---------------

let text="hello";
console.log(text.length);


//toUpperCase() & toLowerCase()
//----------------------------------
let a="hello";
let b="JAVASCRIPT";
console.log(a.toUpperCase());
console.log(b.toLowerCase());


//includes()
//------------
let c= "Hello, how are you?";
console.log(c.includes("you"));  
console.log(c.includes("why"));  

//startsWith(), endsWith() 
//-------------------------
let d = "Hello, I am John Doe.";
console.log(d.startsWith("Hello"));    //true
console.log(d.endsWith("."));         //true

//search()
//----------
let e = "Please locate where 'locate' occurs!";
console.log(e.search("locate"));

//match()
//--------
let f = "The rain in SPAIN stays mainly in the plain";
console.log(f.match(/plain/));//regular expression

//indexOf()
//--------
let g = "Please locate where 'locate' occurs!";
console.log( g.indexOf("locate"));

//lastIndexOf()
//--------------
let h = "Hello planet earth, you are a great planet.";
console.log( h.lastIndexOf("planet"));

//trim()
//----------
let i = "\n\t Hello world \n\t ";
console.log(i);
console.log(i.trim());

//chartAt()
//-----------
let j = "Hello World";
console.log(j.charAt(0));     

//charCodeAt()
//---------------
let k = "HELLO WORLD";
console.log(k.charCodeAt(0));

//fromCharCode()
//-----------------
let char = String.fromCharCode(65);
let l = String.fromCharCode(72, 69, 76, 76, 79);


//Concat()
//----------
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);

//split()
//-------
let m = "I have two apples and three oranges";
console.log(m.split("oranges"));

//slice()
//------
let n = "Hello world!";
console.log( n.slice(0, 5));

//substring()
//-----------
let o = "Hello world!";
console.log( o.substring(1, 4));

//substr()
//---------
let p = "Hello world!";
 p.substr(1, 4);

 //tostring()
 //-----------
 let q = "Hello World!";
 console.log(q.toString());

 //valueOf()
 //---------
 let r = "Hello World!";
 console.log(r.toString());