console.log(`Metacharacter Symbols`);

let regx = /udit/;
let str = "udit is a good coder and learnig web development";

//metacharacter symbols:
// regx = /^u/;                   //'^'meaining-> starts with

// regx = /ent$/;                  //'$'meaning-> ends with

// regx = /go.d/;                  //'.'meaning-> one character can come at that position                          
// regx = /g*d/;                   //matches any 0 or more characters

// regx = /ud?it?/                   //'character?' meaninng-> optional character
    //'d' maybe or maynot be present after 'u' same for 't'

// regx = /ud\*t/                     //here we are taking the actual '*' not the metacharacter




let result = regx.exec(str);
console.log(`The result from exec is "${result}"`);

if(regx.test(str)){                     //test() return true/false
    console.log(`The string "${str}" contains the expression "${regx.source}"`);
} 
else console.log(`The string "${str}" does not contains the expression "${regx.source}"`);
 