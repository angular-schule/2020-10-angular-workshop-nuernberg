import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BookActions from './book.actions';
import { BookStoreService } from '../shared/book-store.service';
import { ofRoute } from 'src/app/store/of-route.operator';
import { ExtendedRouterState  } from 'src/app/store/custom-route-serializer';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BookActions.loadBooks),
      concatMap(() =>
        this.bs.getBooks().pipe(
          map(data => BookActions.loadBooksSuccess({ data })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });

  detailsEntered$ = createEffect(() => {
    return this.actions$.pipe(
      ofRoute<ExtendedRouterState>(/books\//),
      map((action) => BookActions.loadSingleBook({ isbn: action.payload.routerState.params.isbn }))
    );
  });

  loadSingleBooks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookActions.loadSingleBook),
      concatMap(({ isbn }) =>
        this.bs.getSingleBook(isbn).pipe(
          map(data => BookActions.loadSingleBookSuccess({ data })),
          catchError(error => of(BookActions.loadSingleBookFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private bs: BookStoreService) {}

}
