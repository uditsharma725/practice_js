console.log(`Form Validation`);

const username = document.querySelector('.username');
const email = document.querySelector('.email');
const phone = document.querySelector('.number');
const car = document.querySelector('.car');

//'blur'meaning-> select and click outside
let check_username; let check_email; let check_phone;
username.addEventListener('blur', ()=> {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,20}$/;      
    let str = username.value;
    if(regex.test(str)) {
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
        check_username = true;
    }    
    else {
        username.classList.add('is-invalid');
        document.querySelector('#list_name').innerHTML = `
        <li>Your username should not start with a number</li>
        <li>Your username must be 4 to 10 character long</li>
        <li>Your username should not contain any special characters or spaces`;
        check_username = false;
    }
});


email.addEventListener('blur', ()=> {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;      
    let str = email.value;
    if(regex.test(str)) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        check_email = true;
    }    
    else {
        email.classList.add('is-invalid');
        document.querySelector('#list_email').innerHTML = `
        <li>Please add an valid email</li>`;
        check_email = false;
    }
});


phone.addEventListener('blur', ()=> {
    let regex = /^([0-9]){10}$/;
    let number = phone.value;
    if(regex.test(number)) {
        phone.classList.add('is-valid');
        phone.classList.remove('is-invalid');
        check_phone = true;
    }
    else {
        phone.classList.add('is-invalid');
        document.querySelector('#list_phone').innerHTML = `
        <li>Your phone number should be 10-digits long</li>
        <li>Your number should not contain any aplhabets or symbols</li>`;
        check_phone = false;
    }
});


document.querySelector('.submit').addEventListener('click', ()=> {

    let message = document.querySelector('.successmessage');
    if(check_email && check_phone && check_username){
        message.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <div style="text-align: center;">
                <strong>Success!</strong> You have successfully submitted the from
            </div>
        </div>`;
        let obj = {name: username.value, email: email.value, phone: phone.value};
        console.log(obj);
        username.value = "";
        email.value = "";
        phone.value = "";
        check_email = check_phone = check_username = false;
        username.classList.remove('is-valid');
        email.classList.remove('is-valid');
        phone.classList.remove('is-valid');
        setTimeout(()=>{
            message.innerHTML = "";
        }, 2500);
    }
    else {
        message.innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <div style="text-align: center;">
                <strong>Error!</strong> All feilds must be filled correctly
            </div>
        </div>`;
        setTimeout(()=>{
            message.innerHTML = "";
        }, 2500);
    }
});