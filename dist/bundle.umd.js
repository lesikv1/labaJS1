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

  let add = new Add(2, 5);
  let minus = new Minus(2, 5);

  console.log(add.action());
  console.log(minus.action());

}));
