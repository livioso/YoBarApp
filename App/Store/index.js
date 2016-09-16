import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../Reducers';
import rootSaga from '../Sagas';

// create a saga middleware from our sagas
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = compose(
  applyMiddleware(sagaMiddleware),
  global.reduxNativeDevTools
    ? global.reduxNativeDevTools()
    : nope => nope
)(createStore);

export default function configureStore(initialState) {
  // Combine all reducers into one root reducer
  const reducer = combineReducers(reducers, initialState);

  // Create the one and only redux store. 🚀
  const store = createStoreWithMiddleware(reducer);

  if (module.hot) {
    // enable hot module replacement for reducers
    module.hot.accept('../Reducers/', () => {
      const nextRootReducer = () => require('../Reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  // run the saga
  sagaMiddleware.run(rootSaga);

  return store;
}
