const Person = require('./06-person');

test('should return down', () => {
  const person = new Person('Nicolas', 45, 1.7);
  const imc = person.calcIMC();
  expect(imc).toBe('down');
})

test('should return normal', () => {
  const person = new Person('Nicolas', 59, 1.7);
  const imc = person.calcIMC();
  expect(imc).toBe('normal');
})
