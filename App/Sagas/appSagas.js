import { takeLatest, delay } from 'redux-saga';
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

export function* fetchOrderStatus() {
  yield* takeLatest(PLACE_ORDER, pullOrderStatus);
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
      "markdown": "/add ${message}"
    }`,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${apiSecret}`
    },
  };

  const response = yield call(request, apiMessages, payload);
  const isResponseOK = response.error === undefined || response.error === null;

  if (!isResponseOK) {
    alert('Something went wrong :(');
  }
}

const orderToMarkdown = order => {
  return `#🍧 New Ordr ID **${order.get('id')}**\\n` +
    `##👤 Customer: ${order.get('customer')}\\n` +
    `##📍 Pickup Location: ${order.get('pickupLocation')}\\n` +
    `##🕰 Pickup Time: ${order.get('pickupTime')}\\n` +
    `##💵 Paid: ${order.get('paid')}\\n` +
    '---˙\\n' +
    `##Yoghurt:\\n- Cereal: ${order.getIn(['yogurtOrder']).cereal}` +
    `\\n- Fruits: ${order.getIn(['yogurtOrder']).fruits}` +
    `\\n- Yogurt: ${order.getIn(['yogurtOrder']).yogurt}` +
    `\\n- Sauce: ${order.getIn(['yogurtOrder']).sauce}`;
};

function* isOrderFinished() {
  const { order } = yield select(state => state.app);
  const { placed, finished } = order;
  return placed && finished;
}

function* pullOrderStatus() {
  // wait some time so we are
  // sure that the
  yield delay(2000);

  // keep fetching while the order
  // has not been placed && finished
  while (!(yield isOrderFinished())) {
    const payload = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${apiSecret}`
      },
    };

    // room must be provided as a parameter :)
    const requestUrl = `${apiMessages}?roomId=${apiOrderRoomId}&max=5`;
    const response = yield call(request, requestUrl, payload);
    const { data: messages, error } = response;
    const isResponseOK = error === undefined || error === null;

    if (isResponseOK) {
      const id = parseOrderId(messages);
      if (id !== '') {
        yield put(updateOrder({ id }));
        yield delay(300);
        // yield put(updateOrder({ orderPlaced: true }));
      }
      const { order } = yield select(state => state.app);
      if (messages.items[0].text === `/done ${order.id}`) {
        yield put(updateOrder({ orderFinished: true }));
      }
    } else {
      alert('Sorry, something went wrong :(');
    }

    // wait a bit till we pull again
    yield delay(250);
  }
}

// :)
const parseOrderId = messages => {
  const messageBeginsWith = 'Adding Order with ID: ';
  for (let i = 0; i < messages.items.length; i++) {
    const message = messages.items[i].text;
    const parts = message.split(messageBeginsWith);
    if (parts.length === 2) {
      const id = parts[1];
      if (id !== '') {
        return id;
      }
    } else {
      return '';
    }
  }

  // nothing found
  return '';
};
