console.log("Alarm clock");

setInterval(()=> {
    let date = new Date();

    let hours = date.getHours();
    if(hours<10) document.querySelector("#hours").innerHTML = `0`+hours;
    else document.querySelector("#hours").innerHTML = hours;

    let minutes = date.getMinutes();
    if(minutes<10) document.querySelector("#minutes").innerHTML = `0`+minutes;
    else document.querySelector("#minutes").innerHTML = minutes;

    let seconds = date.getSeconds();
    if(seconds<10) document.querySelector("#seconds").innerHTML = `0`+seconds;
    else document.querySelector("#seconds").innerHTML = seconds;
}, 1000);


document.querySelector('.setAlarm').style.display = "none";
document.querySelector('.alarm').addEventListener('click', ()=> document.querySelector('.setAlarm').style.display = "inline");

let checkHours = false;
let alarmHours = document.querySelector('#alarmHours');
alarmHours.addEventListener('blur', ()=> {
    let regex = /^([0-9]){0,2}$/;
    if(regex.test(alarmHours.value) && alarmHours.value<24) {
        alarmHours.classList.remove('is-invalid');
        alarmHours.classList.add('is-valid');
        checkHours = true;
    }
    else {
        alarmHours.classList.add('is-invalid');
        setTimeout(()=> alarmHours.classList.remove('is-invalid'),3000);
    }
});

let checkMinutes = false;
let alarmMinutes = document.querySelector('#alarmMinutes');
alarmMinutes.addEventListener('blur', ()=> {
    let regex = /^([0-9]){0,2}$/;
    if(regex.test(alarmMinutes.value) && alarmMinutes.value<60) {
        alarmMinutes.classList.remove('is-invalid');
        alarmMinutes.classList.add('is-valid');
        checkMinutes = true;
    }
    else {
        alarmMinutes.classList.add('is-invalid');
        setTimeout(()=> alarmMinutes.classList.remove('is-invalid'),3000);
    }
});

let checkSeconds = false;
let alarmSeconds = document.querySelector('#alarmSeconds');
alarmSeconds.addEventListener('blur', ()=> {
    let regex = /^([0-9]){0,2}$/;
    if(regex.test(alarmSeconds.value) && alarmSeconds.value<24) {
        alarmSeconds.classList.remove('is-invalid');
        alarmSeconds.classList.add('is-valid');
        checkSeconds = true;
    }
    else {
        alarmSeconds.classList.add('is-invalid');
        setTimeout(()=> alarmSeconds.classList.remove('is-invalid'),3000);
    }
});


document.querySelector('#setBtn').addEventListener('click', ()=> {
    if(checkHours && checkMinutes && checkSeconds) {
        
    }

    console.log(`${alarmHours.value} : ${alarmMinutes.value} : ${alarmSeconds.value}`);
    alarmHours.value = alarmMinutes.value = alarmSeconds.value = "";
    document.querySelector('.setAlarm').style.display = "none";
});