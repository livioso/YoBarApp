import { takeLatest } from 'redux-saga';
import { put, call, select } from 'redux-saga/effects';
import {
  PLACE_ORDER,
  updateOrder
} from '../Actions/appActions';

import {
  request,
  apiSecret,
  apiMessages,
  apiOrderRoomId,
} from '../Services/api';

export function* startup() {
  // do some initial fetching ;)
}

export function* watchPlaceOrder() {
  yield* takeLatest(PLACE_ORDER, placeOrder);
}

function* placeOrder() {
  const { order } = yield select(state => state.app);
  const message = orderToMarkdown(order);

  // this retarded format is necessary
  // JSON.Stringify is possible: \n\t
  // is required. :)
  const payload = {
    method: 'POST',
    body: `{
      "roomId": "${apiOrderRoomId}",
      "markdown": "${message}"
    }`,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${apiSecret}`
    },
  };

  const response = yield call(request, apiMessages, payload);
  const isResponseOK = response.error === undefined || response.error === null;

  if (isResponseOK) {
    yield put(updateOrder({ orderPlaced: true }));
  } else {
    alert('Something went wrong :(');
  }
}


const orderToMarkdown = order => {
  return `#🍧 New Ordr ID **${order.get('id')}**\\n` +
    `##📝 Customer: ${order.get('customer')}\\n` +
    `##📝 Pickup Location: ${order.get('pickupLocation')}\\n` +
    `##💵 Paid: ${order.get('paid')}\\n` +
    '---˙\\n' +
    `##Yoghurt:\\n- Beeren\\n- Saft`;
};
