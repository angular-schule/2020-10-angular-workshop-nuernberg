import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Book } from '../shared/book';

export const loadBooks = createAction(
  '[Book] Load Books'
);

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ data: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: HttpErrorResponse }>()
);


///


export const loadSingleBook = createAction(
  '[Book] Load Single Book',
  props<{ isbn: string }>()
);

export const loadSingleBookSuccess = createAction(
  '[Book] Load Single Book Success',
  props<{ data: Book }>()
);

export const loadSingleBookFailure = createAction(
  '[Book] Load Single Book Failure',
  props<{ error: HttpErrorResponse }>()
);
