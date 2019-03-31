let XMLWriter = require('xml-writer')
let fs = require('fs')

import Add from './BinarClass/Add'
import Minus from './BinarClass/Minus'
import Multiply from './BinarClass/Multiply'
import Share from "./BinarClass/Share";
import Const from "./OtherClass/Const";
import X from "./OtherClass/X";
import Polinom from "./OtherClass/Polinom";
import Sin from "./UnarClass/Sin";
import Cos from "./UnarClass/Cos";
import Ctn from './UnarClass/Ctg'
import Tg from "./UnarClass/Tg";
import Exp from "./UnarClass/Exp";
import Ln from "./UnarClass/Ln";
import E from "./UnarClass/E";
import A from "./UnarClass/A";
import Simpson from "./OtherClass/Simpson";

let add = new Add(2, 5)
let minus = new Minus(2, 5)
let multiply = new Multiply(2, 5)
let share = new Share(2, 5)
let constant = new Const(5)
let polinom = new Polinom(2, 5)
let simpson = new Simpson(2, 5)
let x = new X(5)
let sin = new Sin(2)
let cos = new Cos(2)
let ctn = new Ctn(2)
let tg = new Tg(2)
let exp = new Exp(2)
let ln = new Ln(2)
let e = new E(2)
let a = new A(2)

console.log(add.action())
console.log(minus.action())
console.log(multiply.action())
console.log(share.action())
console.log(constant.toString())
console.log(x.cnt())
console.log(polinom.action())
console.log(sin.action())
console.log(cos.action())
console.log(ctn.action())
console.log(tg.action())
console.log(exp.action())
console.log(ln.action())
console.log(e.action())
console.log(a.action())
console.log(simpson.action())

const ws = fs.createWriteStream('foo.xml');

ws.on('close', () => {
  console.log(fs.readFileSync('foo.xml', 'UTF-8'));
})

xw = new XMLWriter(false, (string, encoding) => {
  ws.write(string, encoding)
})

xw
  .startDocument()
  .startElement('root')
  .writeAttribute('label', 'laba1')

ws.write('\n')
xw.writeElement('Add', `result ${add.action()}`)

ws.write('\n')
xw.writeElement('Minus', `result ${minus.action()}`)

ws.write('\n')
xw.writeElement('Multiply', `result ${multiply.action()}`)

ws.write('\n')
xw.writeElement('Share', `result ${share.action()}`)

ws.write('\n')
xw.writeElement('Const', `result ${constant.toString()}`)

ws.write('\n')
xw.writeElement('Polinom', `result ${polinom.action()}`)

ws.write('\n')
xw.writeElement('Simpson', `result ${simpson.action()}`)

ws.write('\n')
xw.writeElement('X', `result ${x.cnt()}`)

ws.write('\n')
xw.writeElement('Sin', `result ${sin.action()}`)

ws.write('\n')
xw.writeElement('Cos', `result ${cos.action()}`)

ws.write('\n')
xw.writeElement('Ctn', `result ${ctn.action()}`)

ws.write('\n')
xw.writeElement('Tg', `result ${tg.action()}`)

ws.write('\n')
xw.writeElement('Exp', `result ${exp.action()}`)

ws.write('\n')
xw.writeElement('Exp', `result ${exp.action()}`)

ws.write('\n')
xw.writeElement('Ln', `result ${ln.action()}`)

ws.write('\n')
xw.writeElement('E', `result ${e.action()}`)

ws.write('\n')
xw.writeElement('A', `result ${a.action()}`)

ws.write('\n')
xw.endElement()

ws.write('\n')
xw.endDocument()

ws.end();