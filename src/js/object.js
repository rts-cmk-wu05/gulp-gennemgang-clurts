let person = {
    name: "Carsten",
    age: 27,
    password:"1234"
}

let specific = person?.password;
console.log(specific)


/*if (person) {
    console.log(person.password)
} else {
    console.log("object does not exist!!")
}*/

// ternary operator
person ? console.log(person.password) : console.log("object does not exist!!");