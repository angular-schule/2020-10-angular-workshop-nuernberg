import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SocketsActions from './socket.actions';



@Injectable()
export class SocketsEffects {

  loadSockets$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SocketsActions.loadSockets),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SocketsActions.loadSocketsSuccess({ data })),
          catchError(error => of(SocketsActions.loadSocketsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
