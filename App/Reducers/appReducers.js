import { Record } from 'immutable';
import moment from 'moment';

import {
  UPDATE_ORDER,
  PLACE_ORDER,
} from '../Actions/appActions';

const Order = new Record({
  customer: 'Sepp Blatter',
  pickupLocation: 'Zurich',
  pickupTime: moment().add('minutes', 5),
  yoghurt: undefined,
  paid: false,
  orderPlaced: false,
});

const initialState = {
  orderingStep: 0,
  order: new Order()
};

const app = (state = initialState, action) => { // eslint-disable-line complexity
  switch (action.type) {
    case UPDATE_ORDER: {
      return {
        ...state,
        order: updateOrder(state.order, action.update)
      };
    }
    case PLACE_ORDER: {
      return {
        ...state,
        order: updateOrder(state.order, { orderPlaced: true })
      };
    }
    default:
      return state;
  }
};

const updateOrder = (currentOrder, orderUpdates) => {
  // eslint-disable-next-line
  let updatedOrder = currentOrder;

  // eslint-disable-next-line
  for(const propertyName in orderUpdates) {
    updatedOrder = updatedOrder.set(propertyName, orderUpdates[propertyName]);
  }

  return updatedOrder;
};

export { app as default };
