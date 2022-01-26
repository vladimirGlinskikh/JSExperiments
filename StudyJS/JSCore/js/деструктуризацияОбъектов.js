const userProfile = {
    name: 'Vladimir',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const {name, commentsQty} = userProfile
const {hasSignedAgreement} = userProfile

console.log(name)
console.log(commentsQty)
console.log('---------------------------')

const fruits = ['Apple', 'Banana', 'Orange']
const [fruitOne, fruitTwo] = fruits
console.log(fruitOne)
console.log(fruitTwo)
console.log('---------------------------')

const userInfo = ({name, commentsQty}) => {
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(userProfile))