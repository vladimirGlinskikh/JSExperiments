class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second){
        return `${first} ${second}`
    }
}

console.log(Comment.mergeComments('First comment.', 'Second comment.'))

const firstComment = new Comment('First comment')
const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

console.log(firstComment instanceof Comment)
console.log(firstComment instanceof Object)

firstComment.upvote()
console.log(firstComment.votesQty)
firstComment.upvote()
console.log(firstComment.votesQty)
firstComment.upvote()
console.log(firstComment.votesQty)
console.log('--------------------------')

console.log(firstComment.hasOwnProperty('text'))
console.log(firstComment.hasOwnProperty('votesQty'))
console.log(firstComment.hasOwnProperty('upvote'))
console.log(firstComment.hasOwnProperty('hasOwnProperty'))
console.log('----------------------------')

console.dir(Comment)
