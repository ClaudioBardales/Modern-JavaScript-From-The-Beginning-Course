const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 45,
    email: 'claudio@aol.com',
    hobbies: ['music', 'sports', 'gaming'],
    address: {
        city: 'Miami',
        state: "FL"
    },
    getBirthYear: function() {
        return 2017 - this.age;
    }
}

let val;

val = person;

// GET SPECIFIC VALUE

val = person.firstName;
val = person["lastName"]
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.address['city'];
val = person.getBirthYear();



console.log(val);

const people = [
    { name: 'John', age: 30 },
    { name: 'Mike', age: 23 },
    { name: 'Nancy', age: 23 }
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}