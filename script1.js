let add=document.getElementById("add");
let sub=document.getElementById("sub");
let div=document.getElementById("div");
let mod=document.getElementById("mod");

add.addEventListener('click',function(){
    let value1=document.getElementById("num1").value;
    let value2=document.getElementById("num2").value;
    let num1=parseInt(value1);
    let num2=parseInt(value2);
    const result=num1+num2; 
    document.getElementById("ans").innerHTML ="The result is :"+result;
});

sub.addEventListener('click',function(){
    let value1=document.getElementById("num1").value;
    let value2=document.getElementById("num2").value;
    let num1=parseInt(value1);
    let num2=parseInt(value2);
    const result=num1-num2; 
    document.getElementById("ans").innerHTML="The result is :"+result;
});

div.addEventListener('click',function(){
    let value1=document.getElementById("num1").value;
    let value2=document.getElementById("num2").value;
    let num1=parseInt(value1);
    let num2=parseInt(value2);
    const result=num1/num2;
    document.getElementById("ans").innerHTML="The result is :"+result;
});

mod.addEventListener('click',function(){
    let value1=document.getElementById("num1").value;
    let value2=document.getElementById("num2").value;
    let num1=parseInt(value1);
    let num2=parseInt(value2);
    const result=num1%num2; 
    document.getElementById("ans").innerHTML="The result is :"+result;
});
// function add(){
//     document.write("Addition of two numbers are "+(num1+num2));
// }

// function sub(){
//     document.write("Subtraction of two numbers are "+(num1-num2));
// }

// function div(){
//     document.write("Division of two numbers are "+(num1/num2));
// }

// function mod(){
//     document.write("Modulus of two numbers are "+(num1%num2));
// }