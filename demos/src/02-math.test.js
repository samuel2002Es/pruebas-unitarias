const { sum, multiply, divide } = require('./02-math');

test('add 1 + 3 should be 4', () => {
  const rsa = sum(1, 3);
  expect(rsa).toBe(4);
});
test('shuld be 4', () => {
  const rta = multiply(1, 4);
  expect(rta).toBe(4);
});
test('shuld divide', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 = divide(5, 2);
  expect(rta2).toBe(2.5);
});
test('shold divide for zero', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 = divide(9, 0);
  expect(rta2).toBe(null);
});
