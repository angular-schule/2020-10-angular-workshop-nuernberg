import { Action, createReducer, on } from '@ngrx/store';
import * as SocketsActions from './socket.actions';

export const socketsFeatureKey = 'sockets';

export interface FileInfo {
  name: string;
  path: string;
  size: string;
  unit: string;
  lastWriteTime: string;
}

export interface State {
  files: FileInfo[]
}

export const initialState: State = {
  files: []
};


export const reducer = createReducer(
  initialState,

  // on(SocketsActions.getFiles, state => state),
  on(SocketsActions.getFilesSuccess, (state, { payload }) => ({
    ... state,
    files: JSON.parse(payload)
  })),

  // on(SocketsActions.loadSocketsFailure, (state, action) => state),

);

