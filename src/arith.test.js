const { add, mul, sub, div } = require('./arith');

test('2 + 3 = 5', () => {
  expect(add(2, parseInt(process.env.INTVALUE))).toBe(5);
});

test('3 * 4 = 12', () => {
  expect(mul(3, 4)).toBe(12);
});

test('5 - 6 = -1', () => {
  expect(sub(5, 6)).toBe(-1);
});

test('8 / 4 = 2', () => {
  expect(div(8, 4)).toBe(2);
});

test('8 / 8 = 1', () => {
  expect(div(8, 8)).toBe(1);
});
