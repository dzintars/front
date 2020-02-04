import { Store } from 'redux';
import * as ReselectTools from 'reselect-tools';

// HYGEN.IO: INJECT IMPORT HERE
import { RoutingSelectors } from './modules/routing';
import { UserSelectors } from './modules/users';

export const startReselect = (store: Store) => {
  ReselectTools.getStateWith(() => store.getState());
  // HYGEN.IO: INJECT SELECTORS HERE
  ReselectTools.registerSelectors(RoutingSelectors);
  ReselectTools.registerSelectors(UserSelectors);
};
