import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSockets from './socket.reducer';

export const selectSocketsState = createFeatureSelector<fromSockets.State>(
  fromSockets.socketsFeatureKey
);
