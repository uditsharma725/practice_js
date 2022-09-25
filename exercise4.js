console.log("exrcise 4 (digital clock)");


setInterval(()=> {
    let date = new Date();

    let hours = date.getHours();
    if(hours>12) hours = hours-12;
    if(hours<10) document.querySelector("#hours").innerHTML = `0`+hours;
    else document.querySelector("#hours").innerHTML = hours;

    let minutes = date.getMinutes();
    if(minutes<10) document.querySelector("#minutes").innerHTML = `0`+minutes;
    else document.querySelector("#minutes").innerHTML = minutes;

    let seconds = date.getSeconds();
    if(seconds<10) document.querySelector("#seconds").innerHTML = `0`+seconds;
    else document.querySelector("#seconds").innerHTML = seconds;

    let sup = "";
    let day = date.getDate();
    if(day == 1 || day == 21 || day == 31) sup = "st";
    if(day == 1 || day == 22) sup = "nd";
    else if(day == 3 || day == 23) sup = "rd";
    else sup = "th"
    if(day<10) document.querySelector("#day").innerHTML = `0`+day+`<sup>${sup}</sup>`;
    else document.querySelector("#day").innerHTML = day+`<sup>${sup}</sup>`;

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[date.getMonth()];
    document.querySelector("#month").innerHTML = name;

    let year = date.getFullYear();
    document.querySelector("#year").innerHTML = year;
}, 1000);