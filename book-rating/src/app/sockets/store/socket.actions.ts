import { createAction, props } from '@ngrx/store';
import { FileInfo } from './socket.reducer';

export const getFiles = createAction(
  'getFiles'
);

export const getFilesSuccess = createAction(
  'getFilesSuccess',
  props<{ payload: string }>()
);

export const getFilesFailure = createAction(
  'getFilesFailure',
  props<{ error: string }>()
);
