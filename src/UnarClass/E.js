class E {
  constructor(x) {
    this.x = x
    this.e = 2.71828182846
  }
  action () {
    let res = this.e
    for (let i = 0; i <= this.x; i++) {
      res *= this.e
    }
    return res
  }
}

export default E