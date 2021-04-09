import { Book } from './bookInterface';

interface BookState {
  books: Book[];
  booksLoading: boolean;
  booksError: string | null;
}

interface AuthState {
  logged: boolean;
}
export interface AppState {
  book: BookState;
  auth: AuthState;
}
