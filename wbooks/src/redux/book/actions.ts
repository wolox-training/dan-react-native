import { Book } from '@interfaces/bookInterface';

export enum TypeBook {
  ADD = 'Add',
  DELETE = 'Delete',
  LIST = 'List'
}

export const bookAdd = (book: Book) => ({
  type: TypeBook.ADD,
  payload: book
});

export const bookList = (list: Book[]) => ({
  type: TypeBook.LIST,
  payload: list
});
