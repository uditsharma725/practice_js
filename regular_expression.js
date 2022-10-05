console.log(`Regular Expression`);

let reg = /udit/;        //regular expression literal

console.log(reg);
console.log(reg.source);


//functions to match regular expression:

//1.exec()-> this will return array for match and null for no match
let s1 = "this is a good code udit";
let result = reg.exec(s1);         //tells where is the match
console.log(result);                //output index:20-> match at 20th index
console.log(result.input);
console.log(result.index);

let reg2 = /this/g;                 //g-> global flag and we can use multiple exec
let s2 = "this is a good code, this";

let result2 = reg2.exec(s2);
console.log(result2);
result2 = reg2.exec(s2);        //now it would match the second 'this' due to 'g' flag
console.log(result2);


let reg3 = /this/i;         //i->case insenstive
let s3 = "thIs is a good code"; //would match even if some letters are in upper/lower case
let result3 = reg3.exec(s3);
console.log(result3);


//2. test()-> returns true/false
let reg4 = /code/;
let s4 = "this is an awsome code";
let result4 = reg4.test(s4);
console.log(result4);   //would print true as 'reg4' is present in the string


//3. match()-> it will return an array of results or will return null (ulta lgate h isko)
// let result5 = reg.match(s)   this is wrong
// let result5 = s.match(reg)   this is right

let reg5 = /is/g;
let s5 = "this is a brilliant code, it really is";
let result5 = s5.match(reg5);           //it would return an array containing all the 'is' present in s5
console.log(result5);


//4. search()-> return index of first match else '-1'
let reg6 = /is/g;
let s6 = "this is a brilliant code, it is really good";
let result6 = s6.search(reg6);
console.log(result6);


//5. replace()-> returns new replaced string with all the replacements
let reg7 = / is /g;         //without 'g' only the first one would be replaced
let s7 = "this is a brilliant code, it is really good";
let result7 = s7.replace(reg7, ' was ');
console.log(result7);