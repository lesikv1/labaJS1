class Const {
  constructor(result) {
    this.result = result
  }
  action (value) {
    return this.result = value
  }
  toString () {
    return this.result + ''
  }
}

export default Const