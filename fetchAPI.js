console.log("Fetch API");

let content = document.querySelector("#content");
let fetchBtn = document.querySelector("#fetch");


//GET REQUEST:
// const getdata = ()=> {
//     console.log("starting getData()")
//     let url = "jokes.txt";    
//     //fetch is a promise
//     fetch(url).then((response)=> {              //fetch is asynchronous
//         console.log("inside 1st then");     
//         return response.text();                 //.txt as it is returning text
//     }).then((data)=> {
//         console.log("inside 2st then");     
//         console.log(data + typeof data);
//     });
// }
// console.log("before getData()");
// getdata();
// console.log("after getData()");


const getData = ()=> {
    let url = "https://api.github.com/users";
    //.json to parse the data, data will go as an object:
    fetch(url).then(response => response.json()).then(data => console.log(data)); 
}
getData();


//POST DATA:
const postData = ()=> {
    let url = 'https://dummy.restapiexample.com/api/v1/create';
    let data = '{"name":"test005","salary":"123","age":"23"}';
    let params = {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: data                                      //use JSON.stringify if data is an object
    }
    fetch(url, params).then(response => response.json()).then(data => console.log(data));
}
postData();