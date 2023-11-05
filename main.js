document.write("math methods"+"<br>");

document.write("--------------------"+"<br>");
document.write("1.Math.ceil"+"<br>");
document.write("Math.ceil() rounds a number UP to the nearest integer:"+"<br>");
var a=prompt("Enter a value:");
let x=Math.ceil(a);
document.write("the round value "+ a +" is :"+x+"<br><br>");

document.write("2.Math.abs"+"<br>");
document.write("Math.abs() returns the absolute value of a number:"+"<br>");
let b=Math.abs(2-3);
document.write("the round value  is :"+b+"<br><br>");

document.write("3.Math.floor"+"<br>");
document.write("Math.floor() rounds a number DOWN to the nearest integer:"+"<br>");
let c = Math.floor(0.60);
let d = Math.floor(0.40);
let e = Math.floor(5);
let f = Math.floor(5.1);
let g = Math.floor(-5.1);
let h = Math.floor(-5.9);
document.write(c + "<br>" + d+ "<br>" + e + "<br>" + f + "<br>" + g + "<br>" + h+"<br><br>");

document.write("4.Math.max"+"<br>");
document.write("Return the numbers with the highest value:"+"<br>");
let i = Math.max(1.5, 2.5);
document.write("the highest  is :"+i+"<br><br>");


document.write("5.Math.min"+"<br>");
document.write("Return the numbers with the lowest value:"+"<br>");
let j = Math.min(1.5, 2.5);
document.write("the lowest  is :"+j+"<br><br>");


document.write("6.Math.round"+"<br>");
document.write("Math.round() rounds a number to the nearest integer:"+"<br>");
let k = Math.round(2.44);
document.write("the nearest integer  is :"+k+"<br><br>");


document.write("7.Math.sign"+"<br>");
document.write("Math.sign() retuns whether a number is negative, positive or zero:"+"<br>");
let l = Math.sign(-2.3);
document.write("the whether  is :"+l+"<br><br>");

document.write("8.Math.sqrt"+"<br>");
document.write("Math.sqrt() returns the square root of a numbe:"+"<br>");
let m = Math.sqrt(-2.3);
document.write("the square root value is :"+m+"<br><br>");



document.write("9.Math.random"+"<br>");
document.write("The Math.random() method returns a random number from 0 (inclusive) up to but not including 1 (exclusive).:"+"<br>");
let n = Math.random(-2.3);
document.write("the random value is :"+n+"<br><br>");
