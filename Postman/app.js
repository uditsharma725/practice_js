console.log("Postman API");

//declaring variables:
let paramsCnt = 1;
let data = {};

//hiding parameters, json and response box initially
document.querySelector('#params').style.display = 'none';
document.querySelector('#jsonRequestBox').style.display = 'none';
// document.querySelector('#response').style.display = 'none';
document.querySelector('#content').style.display = 'none';

//if clicked on 'POST' radio:
document.querySelector('#post').addEventListener('click', ()=> {
    document.querySelector('#content').style.display = 'block';
});

//if clicked on 'GET' radio:
document.querySelector('#get').addEventListener('click', ()=> {
    document.querySelector('#content').style.display = 'none';
    document.querySelector('#params').style.display = 'none';
    document.querySelector('#jsonRequestBox').style.display = 'none';
    document.querySelector('input[name="contentType"]:checked').checked = false;
});


//if clicked on 'custom parameters' radio:
document.querySelector('#custom').addEventListener('click', ()=> {
    document.querySelector('#params').style.display = 'block';
    document.querySelector('#jsonRequestBox').style.display = 'none';
});

//if clicked on 'JSON' radio:
document.querySelector('#json').addEventListener('click', ()=> {
    document.querySelector('#jsonRequestBox').style.display = 'block';
    document.querySelector('#params').style.display = 'none';
});

//Adding parameters:
document.querySelector('.addParams').addEventListener('click', ()=> {
    let newParams = document.querySelector('.addParamsHere');
    let div = document.createElement('div');
    div.setAttribute("id",`newParam${paramsCnt+1}`);
    let str = `<div class="row" id="param${paramsCnt+1}"><div class="col"><input type="text" class="form-control" id="paraKey${paramsCnt+1}" style="margin-bottom: 10px" placeholder="Parameter ${paramsCnt+1} key"></div>
    <div class="col"><input type="text" class="form-control" id="paraValue${paramsCnt+1}" style="margin-bottom: 10px" placeholder="Prameter ${paramsCnt+1} value"></div></div>`;
    
    paramsCnt++;
    div.innerHTML += str;
    newParams.appendChild(div);
});

//Removing parameters:
document.querySelector('.removeParams').addEventListener('click', ()=> {
    let node = document.querySelector(`#newParam${paramsCnt}`);
    node.parentElement.removeChild(node);
    paramsCnt--;
});


//submit button:
document.querySelector('#submit').addEventListener('click', ()=> {
    let url = document.querySelector('#url');
    let requestType = document.querySelector('input[name="requestType"]:checked');
    let contentType;
    if(requestType != null) {
        if(requestType.value == 'GET') contentType = true;
        else {
            let content = document.querySelector('input[name="contentType"]:checked');
            contentType = content.value;
        }
    }
    
    if(url.value && requestType.value && contentType) {
        // document.querySelector('#response').style.display = 'block';
        
        if(contentType.value == 'CUSTOM'){
            for(let i=1; i<=paramsCnt; i++) {
                let key = document.querySelector(`#paraKey${i}`).value;
                let value = document.querySelector(`#paraValue${i}`).value;
                data[key] = value;
            }
            data = JSON.stringify(data);
        }
        else data = document.querySelector('#jsonRequestText').value;
        
        //content type:
        if(contentType.value == 'CUSTOM') {
            for(let i=paramsCnt; i>1; i--) {
                let node = document.querySelector(`#newParam${paramsCnt}`);
                node.parentElement.removeChild(node);
                paramsCnt--;
            }
            document.querySelector('#params').style.display = 'none';
        }
        else {
            document.querySelector('#jsonRequestText').value = "";
            document.querySelector('#jsonRequestBox').style.display = 'none';
        }
        
        //request type:
        if(requestType.value == 'GET') {
            fetch(url.value, {
                method: 'GET',
            }) 
            .then(response=> response.text())
            .then((text)=> {
                document.querySelector('#responseText').innerHTML = text;
            });
        }
        else {
            fetch(url.value, {
                method: 'POST',
                body: data,
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response=> response.text())
            .then((text)=> {
                document.querySelector('#responseText').innerHTML = text;
            })
        }
        
        //clearing the display after successfullin getting response:
        document.querySelector('#url').value = "";
        document.querySelector('#paraKey1').value = "";
        document.querySelector('#paraValue1').value = "";
        document.querySelector('#params').style.display = 'none';
        document.querySelector('#content').style.display = 'none';
        document.querySelector('#jsonRequestBox').style.display = 'none';
        document.querySelector('input[name="requestType"]:checked').checked = false;
        if(requestType.value == 'POST') document.querySelector('input[name="contentType"]:checked').checked = false;
        data = {};
    }
    else {
        //adding error message:
        document.querySelector('#message').innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">   <strong>Error!</strong> Please fill all the feilds correctly
        </div>`;
        
        setTimeout(()=> {
            document.querySelector('#message').innerHTML = "";
        },3000);
    }
});  