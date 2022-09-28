console.log(`AJAX`);

let fetchBtn = document.querySelector('#fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    //GET REQUEST:
    const xhr = new XMLHttpRequest();       //creating(instantiate) new xhr object

    //xhr.open('request(get/post)', from where the data would come, async(true/false));
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);       //true--> asynchronous,  false--> synchronous

    //POST REQUEST:
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    //what to on progress(optional):
    xhr.onprogress = function () {
        //can place a spinner/loader here
        console.log('on progress');
    }

    //what to do when response is ready
    xhr.onload = function () {
        //remove the spinner/loader here, when the response is loadeds
        if (this.status == 200) console.log(this.responseText);        //responseText--> inbuild function
        else {
            console.log("some error occured");
            console.log("try changing the name");
        }
    }

    let params = `{"name":"TEST07","salary":"123","age":"23"}`;
    //send request:
    xhr.send(params);

    //this would be executed before everything
    //console.log("we are done");       //because async is true it did not block the code     

}

let popBtn = document.querySelector("#popBtn");
popBtn.addEventListener('click', popHandler);

function popHandler() {
    //GET REQUEST:
    const xhr = new XMLHttpRequest();       //creating(instantiate) new xhr object

    //xhr.open('request(get/post)', from where the data would come, async(true/false));
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);      


    //what to do when response is ready
    xhr.onload = function () {
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.querySelector("#list");
            let str = "";
            list.innerHTML = str;
        }
        else console.log("some error occured");
    }
    //send request:
    xhr.send();        
}