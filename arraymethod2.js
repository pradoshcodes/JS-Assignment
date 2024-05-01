let arr=new Array(10);
for(let i=0;i<arr.length;i++){
     arr[i]=prompt("Enter your number:")
}

document.write("<ul>")
for(let j=0;j<arr.length;j++){
    document.write("<li>"+arr[j]+"</li>"); 

}
document.write("</ul>")