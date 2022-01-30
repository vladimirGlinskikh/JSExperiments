
const asyncFn = async () => {
    throw new Error('There was an error')
    // return 'Success'
}

console.log(asyncFn())

asyncFn()
    .then(value => console.log(value))
    .catch(error => console.log(error.message))
