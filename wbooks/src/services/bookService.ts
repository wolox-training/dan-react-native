import api from '@config/api';

const BookService = {
  getBooks: () => api.get('/book')
};

export default BookService;
