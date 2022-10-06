console.log(`Character Set`);

//CHARACTER SETS:
let regx = /u*[a-z]it/;       //'[a-z]'-> any letter between a to z (#only one character *for more than one)
regx = /u[ryu]it/             //'[ryu]'-> any letter r,y or u will match (#only one character *for more than one)
regx = /u[^abc]it/            //'^ (not)'-> inside '[]' means does not contain
regx = /u[^abc]i[abct]/       //using multiple character set
regx = /u[a-zA-Z]it/;         //matching from a to z and A to Z
regx = /u[a-z0-9]it/;         //matching from a to z and 0 to 9
let str = "udit sharma";      




//QUANTIFIERS-> to specify quantity of any character:
regx = /udi{2}t/;           //i(2)-> i can occur exactly twice
regx = /udi{1,3}t/;         //i(1,3)-> i can occur 1 - 3 times (1,2,3 times)




//GROUPING-> we use paranthesis for grouping ():
regx = /(udit){2}/              //'udit' should occur exactly 2 times we grouped 'udit' together using '()'
regx = /udit([0-9]){5}/         //0 to 9 any number should occur 5 times
//udit12345, udit77777, ..... these all will match
// str = "udit12345";





if(regx.test(str)) console.log(`This string "${str}" contains "${regx.source}"`);
else console.log(`This string "${str}" does not contain "${regx.source}"`);