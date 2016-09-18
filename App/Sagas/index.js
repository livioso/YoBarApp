import { fork } from 'redux-saga/effects';
import {
  startup,
  watchPlaceOrder,
  fetchOrderStatus
} from './appSagas';

// The entry point for all the
// sagas used in this application.
export default function* rootSaga() {
  try {
    yield [
      fork(startup),
      fork(watchPlaceOrder),
      fork(fetchOrderStatus)
    ];
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
  }
}
