// matchers
test('test obj', () => {
  const data = { name: 'nico' };
  data.lastname = 'molina';
  expect(data).toEqual({ name: 'nico', lastname: 'molina' });
});

test('null', () => {
  const data = null;
  // que sea null
  expect(data).toBeNull();
  // que sea definido
  expect(data).toBeDefined();
  // que no sea undefinido
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
  expect(false).not.toBeTruthy();
});

test('string', () => {
  expect('Christopher').toMatch(/stop/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  expect(numbers).toContain(3);
});
