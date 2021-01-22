import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSockets from './socket.reducer';

// Über diese Selectoren greift die Oberfläche auf die Properties
// im Store (State) zu.

export const selectSocketsState = createFeatureSelector<fromSockets.State>(
  fromSockets.socketsFeatureKey
);

export const selectFiles = createSelector(
  selectSocketsState,
  x => x.files
);

export const selectLogonInProgress = createSelector(
  selectSocketsState,
  x => x.logonInProgress
);

export const selectLoggedIn = createSelector(
  selectSocketsState,
  x => x.loggedIn
);

export const selectLogonErrorMessage = createSelector(
  selectSocketsState,
  x => x.logonErrorMessage
);
