// function printMyName(){
//     console.log('Finish')
// }
//
// console.log('Start')
//
// setTimeout(printMyName, 5_000)

const buttonInfo = {
    text: 'yes'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle
}

console.table(button)