let a = 10
// true и true = true, второй операнд
// true и false = false, второй операнд
// false и false = false, первый операнд
// false и true = false, первый операнд
console.log(a && '')
a && console.log('Executed!')

console.log('--------------------------')

let b = 0
// true или true = true, первый операнд
// true или false = true, первый операнд
// false или false = false, второй операнд
// false или true = true, второй операнд
console.log(b || 9)
b || console.log('Executed!')

console.log('--------------------------')

// a && b && c && d найти первое ложное значение и возвратить его
// a || b || c || d найти первое правдивое значение и вернуть его