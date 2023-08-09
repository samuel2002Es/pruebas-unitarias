const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

// Cuando llame a ese archivo voy a suplantarlo
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  // getAll: () => [...fakebooks],
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    // Que si queremos que en cada test tengamos informacion diferente,
    // tenemos que limpiar los mocks y eso se hace con
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return a list book', async () => {
      // Arrange preparar el entorno
      // Para este test utiliza el espia con el mock
      // mockGetAll.mockReturnValue(fakebooks);
      // Como es una promesa en vez de utilizar mockReturnValue utiizamos mockResolveValue

      // Traemos nuestros libros generados con la libreria fakejs.dev
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // act
      const books = await service.getBooks({});
      console.log(books);
      // assert
      expect(books.length).toEqual(fakeBooks.length);
      // espiamos, mockGetAll fue llamado?
      expect(mockGetAll).toHaveBeenCalled();
      // cuantas veces fue llamado
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      // con que argumentos fue llamado? fue llamado la collection books? con el query {}
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return a list book 2', async () => {
      const fakeBooks = generateManyBooks(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});
      console.log(books);
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
