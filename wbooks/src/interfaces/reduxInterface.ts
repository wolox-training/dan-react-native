import { Book } from './bookInterface';

export interface ReduxInterface {
  book: Book[];
  auth: { loged: boolean };
}
