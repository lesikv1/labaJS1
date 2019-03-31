class Polinom {
  constructor(first, second) {
    this.first = first
    this.second = second
  }
  action () {
    let res = this.first
    for (let i = 0; i <= this.second; i++) {
      res *= this.first
    }
    return res
  }
}

export default Polinom