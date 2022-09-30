console.log("Arrow Function");

//simple function:
function simple() {
    console.log("this is a simple function");
}
simple();

//arrow function:
const arrow_1 = ()=> {
    console.log("this is simple arrow function");
}
const arrow_2 = ()=> {
    return "this is an arrow function with return statement";
}
const arrow_3 = ()=> "this is an arrow function without parathesis and return statement";     
//no paranthesis/return for one liners
arrow_1();
console.log(arrow_2());
console.log(arrow_3());

const greetings = name => `good morning ${name}`;        //no brackets required for single argument
console.log(greetings("udit"));

const add = (a,b) => a+b;
console.log(add(2,3));