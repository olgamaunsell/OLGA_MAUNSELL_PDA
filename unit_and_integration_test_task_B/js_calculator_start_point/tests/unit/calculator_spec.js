var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  it('it should be able to add', function(){
    calculator.previousTotal = 1;
    calculator.add(4)
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('it should be able to subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it should be able to multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('it should be able to divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('it should be able to click a number and update the running total with that number', function(){
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal, 2);
  })

  it('it should be able to store operator when it is clicked ', function(){
    calculator.operatorClick('+');
    assert.strictEqual(calculator.previousOperator, '+');
  })

  it('it should be able to set previous operator to null if equals operator is clicked ', function(){
    calculator.operatorClick('=');
    assert.strictEqual(calculator.previousOperator, null);
  })

  it('it should be able to concatenate multiple number button clicks ', function(){
    calculator.numberClick(2)
    calculator.numberClick(4)
    calculator.numberClick(9)
    assert.strictEqual(calculator.runningTotal, 249);
  })

  it('it should be able to clear the running total if clear is clicked ', function(){
    calculator.numberClick(2)
    calculator.numberClick(4)
    calculator.numberClick(9)
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0);
  })

  it('it should be able to chain multiple operations together ', function(){
    calculator.numberClick(2)
    calculator.operatorClick('*');
    calculator.numberClick(3)
    calculator.operatorClick('=');

    assert.strictEqual(calculator.runningTotal, 6);
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
