import { Book } from './bookInterface';

export interface BooksResponse {
  ok: boolean;
  data: Book[];
  problem?: string;
}
