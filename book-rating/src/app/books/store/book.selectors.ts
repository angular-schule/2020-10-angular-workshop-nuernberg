import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBook from './book.reducer';
import { selectRouteParam } from './router.selectors';

export const selectBookState = createFeatureSelector<fromBook.State>(
  fromBook.bookFeatureKey
);

export const selectBooksLoading = createSelector(
  selectBookState,
  state => state.loading
);

export const selectBooks = createSelector(
  selectBookState,
  state => state.books
);

export const selectSelectedIsbn = selectRouteParam('isbn');

export const selectSelectedBook = createSelector(
  selectBooks,
  selectSelectedIsbn,
  (books, isbn) => books.find(b => b.isbn === isbn)
);

// another example:
export const selectFirstBookTitle = createSelector(
  selectBooks,
  state => state.length ? state[0].title : 'no title'
);
