var object = {
    a: 3,
    b: 'JavaScript',
    c: false,
    d: {
        e: 11,
        f: 12
    },
    z: [1, 2, 3, 4]
};
console.log(object);

var array = [1, 2, 'JavaScript', true, {a: 1, b: 2, c: 3}, ['a', 'b']];
console.log(array);

function printConsole(a, b, c, d) {
    console.log(a + b + c + d);
}

printConsole(11, 12, 13, 14);