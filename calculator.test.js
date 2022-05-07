const Calculator = require('./calculator');

const calculate = new Calculator();

describe('Calculator', () => {
  test('Add', () => {
    expect(calculate.add(1, 1))
      .toBe(2);
  });

  test('Subtract', () => {
    expect(calculate.subtract(0, 1))
      .toBe(-1);
  });

  test('Multiply', () => {
    expect(calculate.multiply(2, 7))
      .toBe(14);
  });

  test('Divide', () => {
    expect(calculate.divide(36, 6))
      .toBe(6);
  });
});