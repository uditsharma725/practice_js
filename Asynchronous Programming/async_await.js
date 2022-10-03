console.log("Async/Await");

// let harry = ()=> "harry";
// console.log(harry());


//using Async:
console.log('before calling harry');
async function harry() {                    //async allways returnss a promise
    console.log('inside harry function');
    const response = await fetch('https://api.github.com/users');   //wait for this promise
    console.log('before response');
    const users = await response.json();        //wait for it to complete and until then execute other js code
    console.log('users resolved');
    return users;
}
let a = harry();
console.log('after calling harry');
console.log(a);           //would return 'promise pending' as the promise is yet to be resolved 
a.then(data => console.log(data));      //'.then'-> when promise is resolved
console.log('last line of code');       //after executing this line it would go back to function('harry()')