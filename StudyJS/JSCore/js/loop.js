const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject) {
    console.log(key, myObject[key])
}
console.log('-------------------------------')

Object.keys(myObject).forEach(key => {
    console.log(key, myObject[key])
})
console.log('-------------------------------')

Object.values(myObject).forEach(value => {
    console.log(value, myObject[value])
})
console.log('--------------------------------')

const myString = 'Hello'

for (const letter of myString) { // нельзя использовать для объектов
    console.log(letter)
}