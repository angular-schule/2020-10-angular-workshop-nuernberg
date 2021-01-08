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
  files: FileInfo[],
  logonInProgress: boolean;
  loggedIn: boolean;
  logonErrorMessage: string;
}

export const initialState: State = {
  files: [],
  logonInProgress: false,
  loggedIn: false,
  logonErrorMessage: ''
};


export const reducer = createReducer(
  initialState,

  // on(SocketsActions.getFiles, state => state),
  on(SocketsActions.getFilesSuccess, (state, { payload }) => ({
    ... state,
    files: JSON.parse(payload)
  })),

  // on(SocketsActions.loadSocketsFailure, (state, action) => state),

  on(SocketsActions.logon, (state, { name }) => ({
      ... state,
      loggedIn: false,
      logonErrorMessage: '',
      logonInProgress: true
    })),

  on(SocketsActions.logonSuccess, (state) => ({
    ... state,
    loggedIn: true,
    logonErrorMessage: '',
    logonInProgress: false
  })),

  on(SocketsActions.logonFailure, (state, { payload }) => ({
    ... state,
    loggedIn: false,
    logonErrorMessage: payload,
    logonInProgress: false
  })),

);

