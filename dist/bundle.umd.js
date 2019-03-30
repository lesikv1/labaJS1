(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(function () { 'use strict';

  class Main {
    lol () {
      console.log('m');
    }
  }

  class Class {
    lol () {
      console.log('le');
    }
  }

  let a = new Class;
  let b = new Main;

  a.lol();
  b.lol();

}));
