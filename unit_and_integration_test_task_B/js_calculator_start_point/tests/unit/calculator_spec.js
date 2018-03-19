var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it should be able to add', function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5);
  })

  it('it should be able to subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3);
  })

  it('it should be able to multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15);
  })

  it('it should be able to divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3);
  })

});

// You need to write unit tests to ensure that the majority of functions in the calculator operate correctly:
//
// calculator.add()
// calculator.subtract()
// calculator.multiply()
// calculator.divide()
// calculator.numberClick()
// calculator.operatorClick()
// calculator.clearClick()
// ####The program should correctly perform the following tasks:
//
// multiply 3x5 and get 15
// divide 21/7 and get 3
// add 1+4 and get 5
// subtract 7-4 and get 3
// concatenate multiple number button clicks
// chain multiple operations together
// clear the running total without affecting the calculation
