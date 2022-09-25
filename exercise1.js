console.log(" ");
console.log(`Exercise 1`);

let ranNumber = Math.floor(Math.random()*100);
if(ranNumber == 0) ranNumber = 1;
console.log(`Random number-> ${ranNumber}`);

let guess = document.getElementById('guessNum');
let message = document.getElementById('message');   
let chances = document.getElementById('chances');
chances.innerHTML = '100';
let score = 0, chance;

function guessType(type, display, val) {
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Messge:</strong> ${display}<br />
    <strong>Your number is ${val} 
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">×</span>
    </button>
    </div>`
    setTimeout( ()=> {
        message.innerHTML = "";
    }, 2000);
} 

let btn = document.getElementById('submit');
btn.addEventListener('click', function() {
    score++;
    let gNumber = Number.parseInt(guess.value);
    if(guess.value == "") {
        let type = 'danger';
        let display = 'PLEASE ENTER A NUMBER';
        let val = 'not entered'
        guessType(type,display,val);
    }
    else if(gNumber == ranNumber) {
        let type = 'success';
        let display = 'CONGRATULATION!!! Correct Guess';
        let val = 'equal to the random number'
        guessType(type,display,val);
    }
    else if(gNumber > ranNumber) {
        let type = 'danger';
        let display = 'WRONG GUESS!!! Try Again';
        let val = 'greater than the random number'
        guessType(type,display,val);
    }
    else {
        let type = 'danger';
        let display = 'WRONG GUESS!!! Try Again';
        let val = 'smaller than the random number'
        guessType(type,display,val);
    }
    guess.value = "";
});