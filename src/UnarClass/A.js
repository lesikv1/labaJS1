import Polinom from '../OtherClass/Polinom'

class A {
  constructor(first, second) {
    this.first = first
    this.second = second
  }
  action () {
    return new Polinom(this.first, this.second).action()
  }
}

export default A