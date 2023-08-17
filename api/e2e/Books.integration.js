// prueba de todos los componentes
// eslint-disable-next-line max-len
// como esto es una prueba de integracion metemos todo el flujo excepto la base de datos, routing servicio, modelo de datos, etc

const mockGetAll = jest.fn();
const request = require('supertest');
const { generateManyBooks } = require('../src/fakes/book.fake');
// probando el endpoint de app.js

const createApp = require('../src/app');

// Cuando llame a ese archivo voy a suplantarlo
jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  // getAll: () => [...fakebooks],
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books', () => {
  let app = null;
  let server = null;
  // necesitamos la aplicacion corriendo asi que ejecutamos
  // antes de todas las pruebas levanta el servicio
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  // Cerramos el servicio
  afterAll(() => {
    server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
