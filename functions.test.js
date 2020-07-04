const functions = require('./functions');

// using .toBe matcher
test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Subtract 3 - 2 to equal 1', () => {
  expect(functions.subtract(3, 2)).toBe(1);
});

test('Muliply 2 by 3 to equal 6', () => {
  expect(functions.multiply(2, 3)).toBe(6);
});

test('Divide 4 by 2 to equal 2', () => {
  expect(functions.divide(4, 2)).toBe(2);
});

// using .not matcher

test('Add 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Subtract 3 - 2 to equal 1', () => {
  expect(functions.subtract(3, 2)).not.toBe(2);
});

test('Muliply 2 by 3 to equal 6', () => {
  expect(functions.multiply(2, 3)).not.toBe(7);
});

test('Divide 4 by 2 to equal 2', () => {
  expect(functions.divide(4, 2)).not.toBe(4);
});

