
import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

// Redux related
import { applyMiddleware, } from 'redux';
import { createLogger } from 'redux-logger';
import { fromJS } from 'immutable';

// Reducers
import { rootReducer } from './store.reducer';

// Models
// import { IAppState } from './store.model';

// Build default state... TODO: pull this from localStorage
const DEFAULT_STATE: any = fromJS({});

@NgModule({
  imports: [NgReduxModule]
})
export class StoreModule {
  // FIXME: Immutable.js fromJS is not typed... create our own and use IAppState
  constructor(public store: NgRedux<any>, devTools: DevToolsExtension) {
    // Redux enhancers
    let enhancers = [ ]; // applyMiddleware(apollo.middleware()) ];
    if (devTools.isEnabled()) {
      enhancers.push(devTools.enhancer());
    }

    // Set up the store!
    store.configureStore(rootReducer, DEFAULT_STATE, [ createLogger() ], enhancers);
  }
}
