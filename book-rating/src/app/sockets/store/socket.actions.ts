import { createAction, props } from '@ngrx/store';

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


export const logon = createAction(
  'logon',
  props<{ name: string, password: string }>()
);

export const logonSuccess = createAction(
  'logonSuccess'
);

export const logonFailure = createAction(
  'logonFailure',
  props<{ payload: string }>()
);
