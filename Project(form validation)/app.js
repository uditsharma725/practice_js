console.log(`Form Validation`);

const username = document.querySelector('.username');
const email = document.querySelector('.email');
const phone = document.querySelector('.number');
const car = document.querySelector('.car');

let infoObj;
let html = `
<ul>
    <li style="font-size:20px; font-weight:bold;">Name</li>
    <li style="font-size:20px; font-weight:bold;">Car</li>
    <li style="font-size:20px; font-weight:bold;">Contact</li>
</ul>`;
let info_display = document.querySelector('.info_display');
let details = document.querySelector('.details');
info_display.style.display = 'none';
details.style.display = 'none';

details.addEventListener('click',()=> {
    document.querySelector('.info_submit').style.display = 'none';
    info_display.style.display = 'block';
});
//'blur'meaning-> select and click outside
let check_username; let check_email; let check_phone;
username.addEventListener('blur', ()=> {
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){4,20}$/;      
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
        <li>Your username must be 4 to 10 character long</li>`;
        check_username = false;
    }
    setTimeout(()=> username.classList.remove('is-valid'),2000);
});
email.addEventListener('blur', ()=> {
    check_email = true;
});
phone.addEventListener('blur', ()=> {
    let regex = /([0-9]){10}/;
    let number = phone.value;
    if(regex.test(number)) {
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        check_phone = true;
    }
    else {
        phone.classList.add('is-invalid');
        check_phone = false;
    }
    setTimeout(()=> {
        phone.classList.remove('is-valid');
        phone.classList.remove('is-invalid');
    },2000);
});

document.querySelector('.submit').addEventListener('click', ()=> {

    let message = document.querySelector('.successmessage');
    if(check_email==true && check_phone==true && check_username==true){
        details.style.display = 'block';
        message.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <div style="text-align: center;">
                <strong>Success!</strong> You have successfully submitted the from
            </div>
        </div>`;
        html += `<ul>
        <li>${username.value}</li>
        <li>${car.value}</li>
        <li>${phone.value}</li>
        </ul>`;
        info_display.innerHTML = html;
        username.value = "";
        email.value = "";
        phone.value = "";
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