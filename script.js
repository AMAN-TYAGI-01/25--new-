// For Each Loop
let text="<ul>";
const num=[23,43,11,40,30];
num.forEach(plus);
function plus(y){
    text+=`<li>${y*2}</li>`;
    document.getElementById("demo").innerHTML=text;
}
text+="</ul>";

// map 

const cars=["audi","honda","aura","audi","honda","aura","audi","honda","aura"];
let text2="";
cars.map((v)=>{
text2+=v+"<Br>";
document.getElementById("demo1").innerHTML=text2;
});

// math function

let output= Math.PI;
document.getElementById("demo2").innerHTML=output;

let round=Math.round(45.54);
document.getElementById("demo2").innerHTML=round;

let ceil=Math.ceil(32);
document.getElementById("demo2").innerHTML=ceil;

let floor=Math.floor(434.6334);
document.getElementById("demo2").innerHTML=floor;

let sign=Math.sign(-60);
document.getElementById("demo2").innerHTML=sign;

let power=Math.pow(3,2);
document.getElementById("demo2").innerHTML=power;
let trunc=Math.trunc(34.54);
document.getElementById("demo2").innerHTML=trunc;

let squr=Math.sqrt(9);
document.getElementById("demo2").innerHTML=squr;

let min=Math.min(560,33,42,554,32.6);
document.getElementById("demo2").innerHTML=min;

let max=Math.max(560,33,42,554,32.6);
document.getElementById("demo2").innerHTML=max;

let random=Math.random()*20+1;
document.getElementById("demo2").innerHTML=random;

let num1=Math.floor(Math.random()*6+1);
document.getElementById("demo2").innerHTML=num1;


const num2=[43,43,23,54,65,66];
let text5="<ol>";
num2.map((a)=>{
text5+=`<li>${a}</li>`;
document.getElementById("demo2").innerHTML=text5;
});
text5+="</ol>";

let text3="";
num2.forEach(cal);
function cal(r){
    text3+=r+"<br>";
    document.getElementById("demo3").innerHTML=text3;
}


var age=21;
var newAge=age.toString();
document.getElementById("demo4").innerHTML=newAge;
console.log(newAge);

var data="aman";
var newData=data.length;
document.getElementById("demo4").innerHTML=newData;

var concat=data.concat(age);
document.getElementById("demo4").innerHTML=concat;

var char="amantyagi";
var charr=char.charAt(3);
document.getElementById("demo4").innerHTML=charr;

var low=char.toLowerCase();
document.getElementById("demo4").innerHTML=low;

var upper=char.toUpperCase();
document.getElementById("demo4").innerHTML=upper;

var value="aman";
var newChar=value.charCodeAt(3);
document.getElementById("demo4").innerHTML=newChar;
