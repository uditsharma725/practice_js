console.log("call backs");

//assume this server is comming from the server:
const students = [
    {name: "harry", subject: "javascript"},
    {name: "rohan", subject: "pyhton"}
]

function enrolStudent() {   
    let name = document.querySelector("#name");
    let subject = document.querySelector("#subject");
    if(name.value == "" || subject.value == "") console.log("error");
    else {
        let student = {name: `${name.value}`, subject: `${subject.value}`};   
        setTimeout(()=> {
            students.push(student);
        },1000)
        getStudents();
    }
}

function getStudents() {
    setTimeout(()=> {
        let str = "";
        students.forEach((student)=> {
            str += `<li>${student.name}</li>`
        });
        document.querySelector("#list").innerHTML = str;
    },2000)
}