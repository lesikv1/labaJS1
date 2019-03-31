class Exp {
  constructor(x) {
    this.x = x
  }
  action () {
    return Math.exp(this.x)
  }
}

export default Exp