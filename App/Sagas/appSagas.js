import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import { PLACE_ORDER } from '../Actions/appActions';

export function* startup() {
  // do some initial fetching ;)
}

export function* watchPlaceOrder() {
  yield* takeLatest(PLACE_ORDER, placeOrder);
}

function* placeOrder() {
  const { order } = yield select(state => state.app);

  // TODO (livioso 17.09.2016) call tropo form here
  console.log(order);
}
