// prueba de todos los componentes

// probando el endpoint de app.js
const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
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

  describe('test for [GET] /', () => {
    test('should return Hello World', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
