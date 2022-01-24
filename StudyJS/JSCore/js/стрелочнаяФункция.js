const myFunction = (a, b) => {
    let c
    a += 1
    c = a + b
    return c
}

console.log(myFunction(4, 2))
console.log('---------------------')

const multByFactor = (value, multiplier = 2) => value * multiplier;

console.log(multByFactor(21, 4))
console.log(multByFactor(3))
console.log('---------------------')

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Vladimir',
}

console.table(newPost(firstPost))

