const students = [
    {name: "harry", subject: "java"},
    {name: "rohan", subject: "python"}
];

function enrollStudent(student) {
    return new Promise((resolve,reject)=> {
        const error = false;            //assume error never occurs
        setTimeout(()=> {
            document.querySelector("#header").innerHTML = `Student List:`
            students.push(student);
            console.log(`${student.name} has been enrolled`);
            if(!error) resolve();
            else reject();
        }, 5000);
    });
}

function getStudents() {
    setTimeout(()=> {
        let str = "";
        let list = document.querySelector("#list");
        students.forEach(student=> {
            str += `<li style="list-style-type:none; padding: 7px;">${student.name}- ${student.subject}</li>`;
        });
        list.innerHTML = str;
        console.log("students has been fetched");
    }, 1000)
}

let newStudent = {name: "udit", subject: "javscript"};
enrollStudent(newStudent).then(getStudents).catch(function() {
    console.log("some error occured");
});