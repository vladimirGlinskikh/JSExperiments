const myArray = [1, 3, 4]
myArray.push(9)
myArray.push(19)
myArray.unshift(129)
console.log(myArray)

// const result = myArray.forEach(el => console.log(el * 2))
// console.log(result)

const newArray = myArray.map(el => el * 2)
console.log(newArray)


// const removedElement = myArray.pop()
const removedElement = myArray.shift()
console.log(myArray)
console.log(removedElement)