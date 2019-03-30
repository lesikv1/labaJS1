class Minus {
  constructor(first, second) {
    this.first = first
    this.second = second
  }
  action () {
    return this.first - this.second
  }
}

export default Minus