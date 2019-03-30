import Add from './BinarClass/Add'
import Minus from './BinarClass/Minus'
import Multiply from './BinarClass/Multiply'

let add = new Add(2, 5)
let minus = new Minus(2, 5)
let multiply = new Multiply(2, 5)

console.log(add.action())
console.log(minus.action())
console.log(multiply.action())