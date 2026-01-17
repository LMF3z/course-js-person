const persona = {
    name: "Raul",
    age: 20,
    isStudent: true,
    hobbies: ["reading", "gaming", "coding"],
    addreess: {
        street: "123 Main St",
    }
}

// v1
// key++ || key += 1
// for(let key = 0; key < persona.hobbies.length; key += 1) {
//     console.log("hobbie actual: ", persona.hobbies[key])
// }

// v2
// destructuring
const { addreess: { street } } = persona
// console.log("street: ", street)

// destructuring with rest operator
const { age, isStudent, ...rest } = persona
// console.log("age: ", age, " isStudent: ", isStudent)
// console.log("rest: ", rest, rest.name)

