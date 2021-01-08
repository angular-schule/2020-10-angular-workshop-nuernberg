import { Action, createReducer, on } from '@ngrx/store';
import * as SocketsActions from './socket.actions';

export const socketsFeatureKey = 'sockets';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(SocketsActions.loadSockets, state => state),
  on(SocketsActions.loadSocketsSuccess, (state, action) => state),
  on(SocketsActions.loadSocketsFailure, (state, action) => state),

);

