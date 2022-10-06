console.log(`Short Hand Character Classes`);

//CHARACTER CLASSES:
let regx = /\wrry/;            //word character-> '-', '_', alphabet or a number
regx = /\w+ai/;                //more than 1 word character(no limit)
regx = /\Wbhai/;               //non word character-> '$', '%', '#',.....etc
regx = /W\+bhai/;              //for more than 1 non word character(no limit) 
regx = /\d4321/;               //'\d'-> a digit, followed by 4321
regx = /number h \d+/;         //more than one digit
regx = /number h \D/;          //match non digit character
regx = /number h \D+/;         //match more than one non digit character
regx = /\ska number/;          //match whitespace character
regx = /\s+ka number/;         //match more than one whitespace character
regx = /\Ska number/;          //match non whitespace character
regx = /\S+ka number/;         //match more than one non whitespace character
regx = /number\b/              //word boundary


//ASSERTIONS:
regx = /h(?=a)/;                //match where 'a' is present after 'h'
regx = /h(?!=a)/;               //match where 'a' is not present after 'h'



let str = "harry bhai ka number h 987654321";

let result = regx.exec(str);
if(regx.test(str))  console.log(`MATHCES ${regx.source}`);
else console.log(`DOES NOT MATCH ${regx.source}`);