// Person constructor

function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob)
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}



// const brad = new Person('Brad', 36);
// const claudio = new Person('Claudio', 30);


// console.log(claudio.age)


const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());


// 1. What is the now() method?
// 2. In what instances do you need contructors over regular functions?