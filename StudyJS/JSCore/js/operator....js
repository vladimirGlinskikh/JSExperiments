const button = {
    width: 200,
    text: "Yes" // в данном случае это значение будет перезаписано
}

const redButton = {
    ...button,
    color: 'red'
}

const newButton = {
    // ...button, // в таком случае свойство text перезапишется
    ...redButton,
    context: 'this new button',
    text: 'new text',
    ...button // в таком случае свойство text не перезапишется
}

const consolidationObjects = {
    ...button,
    ...redButton,
    ...newButton
}

console.table(consolidationObjects)
