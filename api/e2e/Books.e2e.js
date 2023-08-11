// prueba de todos los componentes
// como esto es una prueba de integracion metemos todo el flujo excepto la base de datos, routing servicio, modelo de datos, etc

const request = require('supertest');
const { MongoClient } = require('mongodb');
const { config } = require('../src/config');
// probando el endpoint de app.js

const createApp = require('../src/app');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books', () => {
  let app = null;
  let server = null;
  let database = null;
  // necesitamos la aplicacion corriendo asi que ejecutamos
  // antes de todas las pruebas levanta el servicio
  beforeAll(async () => {
    app = createApp();
    server = app.listen(3000);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  // Cerramos el servicio
  afterAll(() => {
    server.close();
  });
  // limpia la base de datos
  afterEach(() => database.dropDatabase());
  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      // Arrange preparar uns cemilla o set de datos
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book 1',
          year: 1998,
          author: 'Nocilas',
        },
        {
          name: 'Book 2',
          year: 1998,
          author: 'Nocilas',
        },
        {
          name: 'Book 3',
          year: 1998,
          author: 'Nocilas',
        },
      ]);
      console.log(seedData.insertedCount);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(400)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
