import { add } from "./math.js";


let age = 25;

age = 35;

console.log(age);

var firstName = "John";
firstName="Jane";

console.log("My Name is "+ firstName + " and the age is " + age);

console.log(`My Name is ${firstName} and the age is ${age}`);

function greet(){
    console.log("Hello World");
}

function sum (a, b){
    return a + b;
}

greet();
let addition = sum(1, 2);
console.log(addition);

const square = (num) => num * num;

console.log(square(5));

function test(num){

    if(num > 5){
       var result = "Greater than 5"; 
       
    }
    console.log(result);
}

test(6);

console.log(add(100, 200));