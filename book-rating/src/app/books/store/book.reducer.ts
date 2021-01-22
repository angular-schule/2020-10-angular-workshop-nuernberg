import { Action, createReducer, on } from '@ngrx/store';
import { Book } from 'projects/books-shared/src/lib/book';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean;
  selectedBook: Book;
}

export const initialState: State = {
  books: [],
  loading: false,
  selectedBook: {
    isbn: '',
    title: '',
    description: '',
    rating: 1
  }
};


export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => ({
    ...state,
    loading: true
  })),

  on(BookActions.loadBooksSuccess, (state, { data : books }) => ({
    ...state,
    books,
    loading: false
  })),

  on(BookActions.loadBooksFailure, state => ({
    ...state,
    books: [],
    loading: false
  })),

  on(BookActions.loadSingleBook,
     BookActions.loadSingleBookFailure, state => ({
    ...state,
    selectedBook: initialState.selectedBook
  })),

  on(BookActions.loadSingleBookSuccess, (state, { data : selectedBook } )=> ({
    ...state,
    selectedBook
  }))
);

