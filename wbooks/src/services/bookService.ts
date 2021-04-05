// import api from '@config/api';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { BooksResponse } from '@interfaces/booksResponse';

function getBooksMock() {
  return new Promise<BooksResponse>(resolve => {
    setTimeout(() => resolve({ ok: true, data: BOOKS_MOCK }), 1000);
  });
}

const BookService = {
  // getBooks: () => api.get('/book')
  getBooks: () => getBooksMock()
};

export default BookService;
