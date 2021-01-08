import { createAction, props } from '@ngrx/store';

export const loadSockets = createAction(
  '[Sockets] Load Sockets'
);

export const loadSocketsSuccess = createAction(
  '[Sockets] Load Sockets Success',
  props<{ data: any }>()
);

export const loadSocketsFailure = createAction(
  '[Sockets] Load Sockets Failure',
  props<{ error: any }>()
);
