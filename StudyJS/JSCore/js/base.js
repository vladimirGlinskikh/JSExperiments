const person = {
    name: 'Vladimir',
    age: 23,
}

function increasePersonAge(person) {
    const updatePerson = Object.assign({}, person)
    updatePerson.age += 2
    return updatePerson
}

function updatedPersonName(person) {
    const updatePersonName = Object.assign({}, person)
    updatePersonName.name = 'Alice'
    return updatePersonName
}

const updatePersonOne = increasePersonAge(person),
    updatePersonName = updatedPersonName(person);

console.log(person.name)
console.log(person.age)

console.log(updatePersonName.name)
console.log(updatePersonOne.age)