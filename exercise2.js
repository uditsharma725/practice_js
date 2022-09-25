console.log(`exercise 2`);


//NOT COMPLETED



let arr = ["S","W","G","S","W","G","S","W","G","S","W","G","S","W","G",];
let ran = Math.floor(Math.random()*15);
let random = arr[ran];
console.log(ran);
console.log(random);

document.querySelector("#textUser").setAttribute("style", "text-align: center; border-radius:7px; padding:10px; font-size:27px;width:70px;height:40px");
document.querySelector('#textUser').addEventListener('keypress', function(e) {
    if(e.key == 'Enter') {
        let textUser = document.getElementById("textUser");
        if(textUser.value == 's' || textUser.value == 'w' || textUser.value == 'g'){
            document.querySelector("#textComp").innerHTML = random;
            document.querySelector("#textComp").setAttribute("style", "text-align: center; border-radius:7px; padding:10px; font-size:27px;width:70px;height:40px");
            
        }
        else {
            document.querySelector("#message").innerHTML = 
            `<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Messge:ERROR!!!!!</strong> 
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">×</span>
            </button>
            </div>`;
            setTimeout( ()=> {
                document.querySelector("#message").innerHTML = ``;
            },2000)
        }
    }
});