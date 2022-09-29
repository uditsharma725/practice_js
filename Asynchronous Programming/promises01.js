console.log('Promises');

/*
    promise-> resolve
           -> reject
           -> pending
*/

function func1() {
    return new Promise(function(resolve, reject) {          //promise is an object
        setTimeout(()=> {
            const error = true;             //http status code = 200 then 'error=false' 
            if(!error) {
                console.log("Function-> your promise has been resolved");
                resolve();
            }
            else {
                console.log("Function-> your promise has been rejected");
                reject('sorry not fulfilled');              //it would run the function inside catch
            }
        }, 2000);
    });           
}

//if func1 gets resolved 'then' what would i do:
func1().then(function() {                           //if resolved 'resolve function'
    console.log("Harry-> thanks for resolving")
}).catch(function(error) {                               //if not resolved 'reject function'
    console.log(`Harry-> very bad bro, Error-> ${error}`);
});