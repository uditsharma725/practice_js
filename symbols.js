console.log('Symbols');

const sym1 = Symbol('My Identifier');
const sym2 = Symbol('My Identifier');
console.log(sym1 === sym2);                 //output = false

const a = 'this is';
const b = 'this is';
console.log(a === b);                       //output = true

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k2');

let myObj = {};
myObj[k1] = 'Harry';
myObj[k2] = 'Rohan';
myObj["name"] = 'Good Boy';


console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2);          //can not use this to get Rohan as it is same as myObj["k2"];

console.log("");
for(el in myObj) console.log(el, ":", myObj[el]);       //for in loop ignores symbols hence will only print name


console.log(JSON.stringify(myObj));