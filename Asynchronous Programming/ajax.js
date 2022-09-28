console.log(`AJAX`);

let fetchBtn = document.querySelector('#fetchBtn');
fetchBtn.addEventListener('click', ()=> {
    //GET REQUEST:
    const xhr = new XMLHttpRequest();       //creating(instantiate) new xhr object
    
    //xhr.open('request(get/post)', from where the data would come, async(true/false));
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);       //true--> asynchronous,  false--> synchronous
    
    //what to on progress(optional):
    xhr.onprogress = function() {
        //can place a spinner/loader here
        console.log('on progress');
    }   
    
    //what to do when response is ready
    xhr.onload = function() {
        //remove the spinner/loader here, when the response is loadeds
        if(this.status == 200) console.log(this.responseText);        //responseText--> inbuild function
        else console.log("some error occured");
    }
    
    //send request:
    xhr.send();
    
    //this would be executed before everything
    console.log("we are done");       //because async is true it did not block the code     
});