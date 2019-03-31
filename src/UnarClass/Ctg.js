import Cos from "./Cos";
import Sin from './Sin'

class Ctg {
  constructor(x) {
    this.x = x
  }
  action () {
    return new Cos(this.x).action() / new Sin(this.x).action()
  }
}

export default Ctg