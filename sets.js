console.log("Sets");
//set stores unique values

const mySet = new Set();    //initialize an empty
console.log(mySet);

//adding values to mySet:
mySet.add('This');
mySet.add('My name');
mySet.add(11);
mySet.add(34);
mySet.add(false);
console.log(mySet);
console.log((mySet.size).toString());

// const mySet2 = new Set([1, 45, 'this', false, {a:4, b:8}, 'this']);
// console.log(mySet2);

console.log(mySet.has(34));             //'true' if present else 'false'

console.log("before removing", mySet.has('This'));
mySet.delete('This');
console.log("After removing", mySet.has('This'));


//iterating a set:
console.log("");
mySet.forEach((item)=> console.log(item));

//converting in array:
console.log("");
let myArr = Array.from(mySet);
console.log(myArr);