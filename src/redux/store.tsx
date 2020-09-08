import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
