console.log("Alarm clock");

let hours, minutes, seconds;
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



let checkHours;
let alarmHours = document.querySelector('#alarmHours');
alarmHours.addEventListener('blur', ()=> {
    let regex = /^([0-9]){0,2}$/;
    if(alarmHours.value == "00"){
        alarmHours.classList.remove('is-invalid');
        alarmHours.classList.add('is-valid');
        checkHours = true;
    }
    else if((regex.test(alarmHours.value) && alarmHours.value<24) && alarmHours.value != "") {
        alarmHours.classList.remove('is-invalid');
        alarmHours.classList.add('is-valid');
        checkHours = true;
    }
    else {
        checkHours = false;
        alarmHours.classList.add('is-invalid');
    }
});

let checkMinutes;
let alarmMinutes = document.querySelector('#alarmMinutes');
alarmMinutes.addEventListener('blur', ()=> {
    let regex = /^([0-9]){0,2}$/;
    if(alarmMinutes.value == "00"){
        alarmMinutes.classList.remove('is-invalid');
        alarmMinutes.classList.add('is-valid');
        checkMinutes = true;
    }
    else if((regex.test(alarmMinutes.value) && alarmMinutes.value<60) && alarmMinutes.value != "") {
        alarmMinutes.classList.remove('is-invalid');
        alarmMinutes.classList.add('is-valid');
        checkMinutes = true;
    }
    else {
        checkMinutes = false;
        alarmMinutes.classList.add('is-invalid');
    }
});


document.querySelector('.setAlarm').style.display = "none";
document.querySelector('.alarm').addEventListener('click', ()=> {
    document.querySelector('.setAlarm').style.display = "inline";
    document.querySelector('.alarmMessage').innerHTML = "";
    alarmHours.value = "";
    alarmMinutes.value = "";
});

let checkAlarm = false;
document.querySelector('#setBtn').addEventListener('click', ()=> {
    if(checkHours && checkMinutes) {
        let alarms = `Alarm ${alarmHours.value} : ${alarmMinutes.value} <br />`;
        document.querySelector('.alarmMessage').innerHTML += alarms;
        alarmHours.classList.remove('is-valid');
        alarmMinutes.classList.remove('is-valid');
        
        setInterval(()=> {
            let date = new Date();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            // console.log(hours, minutes);
            // console.log(alarmHours.value, alarmMinutes.value);  
            if(hours == alarmHours.value && minutes == alarmMinutes.value) checkAlarm = true;
        }, 1000);
        
        document.querySelector('.setAlarm').style.display = "none";
    }
    else {
        document.querySelector('.warningMessage').innerHTML = `
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Please enter a valid time!!!
        </div>`;
        setTimeout(()=> document.querySelector('.warningMessage').innerHTML = "", 3500);
    }
});

let turnOff = document.querySelector('.turnOff');
turnOff.style.display = 'none';
setInterval(()=> {
    if(checkAlarm) {
        turnOff.style.display = 'inline';
        document.querySelector('#alarmAudio').play();
    }
}, 1000);

turnOff.addEventListener('click', ()=> {
    document.querySelector('.alarmMessage').innerHTML = "";
    alarmHours.value = "";
    alarmMinutes.value = "";
    turnOff.style.display = 'none';
    document.querySelector('#alarmAudio').pause();
    checkAlarm = false;
});