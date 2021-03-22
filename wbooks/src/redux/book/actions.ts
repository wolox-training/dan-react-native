import { Book } from '@interfaces/bookInterface';

export enum TypeBook {
  ADD = 'Add',
  DELETE = 'Delete',
  LIST = 'List'
}

export const bookAdd = (book: Book) => {
  return {
    type: TypeBook.ADD,
    payload: book
  };
};

export const bookList = (list: Book[]) => {
  return {
    type: TypeBook.LIST,
    payload: list
  };
};
