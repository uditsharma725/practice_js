console.log('Error Handling');

//pretend this is coming as a response from the server:
let a = "dj bhai";
a = undefined;
if(a != undefined) {        //syntax is correct works same as you see
    throw new Error('this is not undefined, throwing an error here');
}
else console.log(`this is undefined`);


// hatela()     //would throw normal(reference) error as outsisde try block
try {           //try-> koshish kro isko run krne ki
    // asdasda
    console.log(`we are inside try block`); //if it works it would run it and will not throw error
    functionHarry();        //if this is outide try it would throw error else it would run catch function
} catch(error) {
    console.log(`Are you ok?`);
    console.log(error);         //this would print the error occuring in the try block
    console.log(error.name);
    console.log(error.message);
} finally {
    console.log(`finally we will run this`);    //this would always be executed irrespective of try and catch
}