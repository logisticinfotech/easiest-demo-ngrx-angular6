import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { uiReducer } from './UI/ui.reducer';

export const reducers: ActionReducerMap<AppState> = {
    ui: uiReducer,
  };
