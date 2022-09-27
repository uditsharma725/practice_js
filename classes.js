console.log("ES6 Classes");

class employee {
    constructor(givenName, givenExperience, givenDivsion) {   //constructor only runs when a object is created
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivsion;
    }

    slogan() {                      //function that would return something
        return `I am ${this.name} and this is the best company`;
    }

    joiningYear() {
        return 2019 - this.experience;
    }

    static add(a, b) {              //can use without create a class object
        return a+b;
    }
}

let harry = new employee("Harry", 5, "Coder");          //creating a object
console.log(harry);
console.log(harry.slogan());                            //running the function slogan
console.log(harry.joiningYear());
console.log(employee.add(2,3));                         //static-> can be used without creating an object


//INHERITANCE:
class programmer extends employee{                      //inheriting form employee
    constructor(givenName, givenExperience, givenDivsion, givenLanguage) {
        super(givenName, givenExperience, givenDivsion);        //call the contructor of the from which it is being inherited
        this.language = givenLanguage;                          //super would call the constructor of class 'employee'
    }

    favouriteLan() {
        if(this.language == "javascript") return "excellent language selected";
        else return "good language selected";
    }

    static multiply(a,b) {
        return a*b;
    }
}

let rohan = new programmer("Rohan", 3, "Coder", "javascript");
console.log(rohan);
console.log(rohan.slogan());
console.log(rohan.favouriteLan());
console.log(programmer.multiply(3,2));
console.log(programmer.add(3,2));