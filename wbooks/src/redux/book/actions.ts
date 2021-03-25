import { Book } from '@interfaces/bookInterface';

export enum TypeBook {
  ADD = 'Add',
  DELETE = 'Delete',
  LIST = 'List'
}

export const bookAdd = (payload: Book) => ({
  type: TypeBook.ADD,
  payload
});

export const bookList = (payload: Book[]) => ({
  type: TypeBook.LIST,
  payload
});
