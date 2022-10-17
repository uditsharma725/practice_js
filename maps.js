console.log("Maps in Js");
//we can use any type of key value pairs.

const myMap = new Map();        //creating a map

const key1 = 'mystr', key2 = {}, key3 = function() {};

//setting map values:
myMap.set(key1, 'this is a string');                    //set(name of the key, value assinged to that key)
myMap.set(key2, 'this is a blank object');
myMap.set(key3, 'this is an empty function');
console.log(myMap);

//getting values from myMap:
let value1 = myMap.get(key1);
console.log(value1);

console.log((myMap.size).toString());        //getting the size of the map


//we can use 'for of' loop to get keys and values from a map:
console.log("");
for(let [key, value] of myMap) console.log(key, value);

//getting only the keys:
console.log("");
for(keys of myMap.keys()) console.log('This is a key = ', keys);

//getting only values:
console.log("");
for(values of myMap.values()) console.log('This is a value = ', values);

//using for each loop:
console.log("");
myMap.forEach((value,key)=> {
    console.log('key is - ', key);
    console.log('value is', value);
});