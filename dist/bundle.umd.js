(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  class Add {
    constructor(first, second) {
      this.first = first;
      this.second = second;
    }
    action () {
      return this.first + this.second
    }
  }

  class Minus {
    constructor(first, second) {
      this.first = first;
      this.second = second;
    }
    action () {
      return this.first - this.second
    }
  }

  class Multiply {
    constructor(first, second) {
      this.first = first;
      this.second = second;
    }
    action () {
      return this.first * this.second
    }
  }

  class Share {
    constructor(first, second) {
      this.first = first;
      this.second = second;
    }
    action () {
      return this.first / this.second
    }
  }

  class Const {
    constructor(result) {
      this.result = result;
    }
    action (value) {
      return this.result = value
    }
    toString () {
      return this.result + ''
    }
  }

  class X {
    constructor(X) {
      this.X = X;
    }
    cnt () {
      return this.X
    }
    newCnt (X) {
      return this.X = X
    }
  }

  class Polinom {
    constructor(first, second) {
      this.first = first;
      this.second = second;
    }
    action () {
      let res = this.first;
      for (let i = 0; i <= this.second; i++) {
        res *= this.first;
      }
      return res
    }
  }

  class Sin {
    constructor(x) {
      this.x = x;
    }
    action () {
      return Math.sin(this.x)
    }
  }

  class Cos {
    constructor(x) {
      this.x = x;
    }
    action () {
      return Math.cos(this.x)
    }
  }

  class Ctg {
    constructor(x) {
      this.x = x;
    }
    action () {
      return new Cos(this.x).action() / new Sin(this.x).action()
    }
  }

  class Tg {
    constructor(x) {
      this.x = x;
    }
    action () {
      return Math.tan(this.x)
    }
  }

  class Exp {
    constructor(x) {
      this.x = x;
    }
    action () {
      return Math.exp(this.x)
    }
  }

  class Ln {
    constructor(x) {
      this.x = x;
    }
    action () {
      return Math.log(this.x)
    }
  }

  class E {
    constructor(x) {
      this.x = x;
      this.e = 2.71828182846;
    }
    action () {
      let res = this.e;
      for (let i = 0; i <= this.x; i++) {
        res *= this.e;
      }
      return res
    }
  }

  class A {
    constructor(first, second) {
      this.first = first;
      this.second = second;
    }
    action () {
      return new Polinom(this.first, this.second).action()
    }
  }

  class Simpson {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
    action () {
      return (((this.b - this.a) / 6) * (4 * ((this.a + this.b) / 2)))
    }
  }

  let XMLWriter = require('xml-writer');
  let fs = require('fs');

  let add = new Add(2, 5);
  let minus = new Minus(2, 5);
  let multiply = new Multiply(2, 5);
  let share = new Share(2, 5);
  let constant = new Const(5);
  let polinom = new Polinom(2, 5);
  let simpson = new Simpson(2, 5);
  let x = new X(5);
  let sin = new Sin(2);
  let cos = new Cos(2);
  let ctn = new Ctg(2);
  let tg = new Tg(2);
  let exp = new Exp(2);
  let ln = new Ln(2);
  let e = new E(2);
  let a = new A(2);

  console.log(add.action());
  console.log(minus.action());
  console.log(multiply.action());
  console.log(share.action());
  console.log(constant.toString());
  console.log(x.cnt());
  console.log(polinom.action());
  console.log(sin.action());
  console.log(cos.action());
  console.log(ctn.action());
  console.log(tg.action());
  console.log(exp.action());
  console.log(ln.action());
  console.log(e.action());
  console.log(a.action());
  console.log(simpson.action());

  const ws = fs.createWriteStream('foo.xml');

  ws.on('close', () => {
    console.log(fs.readFileSync('foo.xml', 'UTF-8'));
  });

  xw = new XMLWriter(false, (string, encoding) => {
    ws.write(string, encoding);
  });

  xw
    .startDocument()
    .startElement('root')
    .writeAttribute('label', 'laba1');

  ws.write('\n');
  xw.writeElement('Add', `result ${add.action()}`);

  ws.write('\n');
  xw.writeElement('Minus', `result ${minus.action()}`);

  ws.write('\n');
  xw.writeElement('Multiply', `result ${multiply.action()}`);

  ws.write('\n');
  xw.writeElement('Share', `result ${share.action()}`);

  ws.write('\n');
  xw.writeElement('Const', `result ${constant.toString()}`);

  ws.write('\n');
  xw.writeElement('Polinom', `result ${polinom.action()}`);

  ws.write('\n');
  xw.writeElement('Simpson', `result ${simpson.action()}`);

  ws.write('\n');
  xw.writeElement('X', `result ${x.cnt()}`);

  ws.write('\n');
  xw.writeElement('Sin', `result ${sin.action()}`);

  ws.write('\n');
  xw.writeElement('Cos', `result ${cos.action()}`);

  ws.write('\n');
  xw.writeElement('Ctn', `result ${ctn.action()}`);

  ws.write('\n');
  xw.writeElement('Tg', `result ${tg.action()}`);

  ws.write('\n');
  xw.writeElement('Exp', `result ${exp.action()}`);

  ws.write('\n');
  xw.writeElement('Exp', `result ${exp.action()}`);

  ws.write('\n');
  xw.writeElement('Ln', `result ${ln.action()}`);

  ws.write('\n');
  xw.writeElement('E', `result ${e.action()}`);

  ws.write('\n');
  xw.writeElement('A', `result ${a.action()}`);

  ws.write('\n');
  xw.endElement();

  ws.write('\n');
  xw.endDocument();

  ws.end();

}));
