import { createLogger } from 'redux-logger';
import {
  applyMiddleware,
  Store,
  createStore
} from 'redux';

// Our reducers
import { rootReducer } from './reducers';

// Initial app state structure
export interface IAppState {

};

// Create the App store
export const store: Store<InitialAppState> = createStore(
  rootReducer,
  applyMiddleware(createLogger())
);
