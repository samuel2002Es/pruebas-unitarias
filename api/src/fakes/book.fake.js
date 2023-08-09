const { faker } = require('@faker-js/faker');

const generateOneBook = () => ({
  _id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});
const generateManyBooks = (size) => {
  const limit = size ?? 10;

  const fackeBooks = [];
  for (let index = 0; index < limit; index += 1) {
    fackeBooks.push(generateOneBook());
  }
  return [...fackeBooks];
};
module.exports = { generateOneBook, generateManyBooks };
