import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSockets from './socket.reducer';

export const selectSocketsState = createFeatureSelector<fromSockets.State>(
  fromSockets.socketsFeatureKey
);

export const selectFiles = createSelector(
  selectSocketsState,
  x => x.files
);

export const selectLoggedIn = createSelector(
  selectSocketsState,
  x => x.loggedIn
);

export const selectLogonErrorMessage = createSelector(
  selectSocketsState,
  x => x.logonErrorMessage
);
