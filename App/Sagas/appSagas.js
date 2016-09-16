import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { startupDone } from '../Actions/appActions';

// eslint-disable-next-line import/prefer-default-export
export function* startup() {
  yield call(delay, 2000);
  yield put(startupDone());
}
