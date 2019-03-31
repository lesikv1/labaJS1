class Simpson {
  constructor(a, b) {
    this.a = a
    this.b = b
  }
  action () {
    return (((this.b - this.a) / 6) * (4 * ((this.a + this.b) / 2)))
  }
}

export default Simpson