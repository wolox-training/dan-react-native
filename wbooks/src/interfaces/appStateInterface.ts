import { Book } from './bookInterface';

interface LibraryState {
  books: Book[];
}

interface AuthState {
  logged: boolean;
}
export interface AppState {
  library: LibraryState;
  auth: AuthState;
}
