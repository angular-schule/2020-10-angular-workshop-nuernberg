import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SocketsActions from './socket.actions';
import { ConnectionService } from '../connection.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Injectable()
export class SocketsEffects {

  loadSockets$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SocketsActions.getFiles),
      map(() => this.connection.sendMessage({
        service: 'ntfs',
        payload: JSON.stringify({
          id: '',
          sequence: '',
          command: 'getFiles',
          commandparams: {
            path: 'F:/my-webframework/AppSample/NTFSWebRoot',
            searchPattern: '*',
            sort: 'name'
          }
        })
      }))
    );
  }, { dispatch: false });


  logon$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(SocketsActions.logon),
      map(({ name, password }) => this.connection.sendMessage({
        service: 'logon',
        payload: JSON.stringify({ name, password })
      }))
    );
  }, { dispatch: false });


  handleMessage$ = createEffect(() => {
    return this.connection.messages
  });

  constructor(private actions$: Actions, private connection: ConnectionService) {}

}
