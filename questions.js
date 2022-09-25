let text = document.getElementById('text');
text.innerHTML = 'HELLO';

console.log(`practice set 1`);

//create a string and try to add a number to it:
let vr = 'hello';
let num = 7;

let add = vr + num;
console.log(add);


//use type of operator:
console.log(typeof (add));


//create an object, can we change it to hold a number later:
const a = {
    name: 'udit',
    section: 'A',
    isPrincipal: false
};

// a = 54;         //gives error 
// a = {}          //cannot add another object


//try to add a new key:
a['friend'] = 'shubham';
a['name'] = 'jd';
// console.log(a);


//word meaning dictionary:
const d = {
    word1: "meaning of word1",
    word2: "meaning of word2",
    word3: "meaning of word3",
    word4: "meaning of word4",
    word5: "meaning of word5"
}
// console.log(d);





// console.log(`practice set 2`);
// console.log('nothing special only basic if and switch statements');





console.log(`practice set 3`);

//marks of students:
console.log('normal for loop:');
let marks = {
    student1: 7,
    student2: 8,
    student3: 9,
}
for(let i=0; i<Object.keys(marks).length; i++) {
    console.log(`The marks of ${Object.keys(marks)[i]} are-> ${marks[Object.keys(marks)[i]]}`);
}

//for in loop:
console.log('for in loop:');
for(let i in marks) {
    console.log(`The marks of ${i} are-> ${marks[i]}`);
}


//mean of four numbers(arrow function):
const mean = (a,b,c,d)=> {
    return ((a+b+c+d)/4);
};
console.log(`${mean(1,2,4,5)}`);




console.log(`practice set 4(strings)`);
console.log("har\" -> "+"har\"".length);        //'\"-> js sees it as a single character so output = 4


const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
//.inlcudes return true if present and false if not present.
//(code ? if output is true : if output is false)


//explore the functions-> 'starts with' and 'ends with':
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
console.log(str1.startsWith('Sat', 3));


//conver string to lower case:
const upperCasStr = "THIS IS THE STRING";
const lowerCaseStr = upperCasStr.toLocaleLowerCase();
console.log(lowerCaseStr);


/*
#IMPORTANT
extract the amout out of a string
    "PLease give Rs 1000"
*/
const amtStr = "Please give Rs 1000";
let amt = Number.parseInt(amtStr.slice(15));
console.log(`${amt} ${typeof amt}`);


//change any character of a string:
let cStr = "helloooo";
cStr[2] = "i";              //would not work as strings are immutalbe
console.log(cStr);





console.log(`practice set 6`);

// let numbeR = prompt('enter any number');
// if(numbeR > 5) location.href = "https://google.com";





console.log(`practice set 7`);

//set the color of first element of a nav bar to red:
document.getElementsByTagName("ul")[0].firstElementChild.style.color = "red";


//inspect-> shows what is actually being rendered(autocorrection).
//view page source-> raw code is shown.


//change the background-color of first and last element of nav to green:
document.getElementsByTagName("ul")[0].firstElementChild.setAttribute("style","background-color:green;");
document.getElementsByTagName("ul")[0].lastElementChild.setAttribute("style","background-color:green;");


//change the backgourd-color of all li tags to cyan:
Array.from(document.getElementsByTagName("li")).forEach( (element)=> {
    element.setAttribute("style","background-color:cyan;");
});


//furthest ansestor that matches a given 'css selector':