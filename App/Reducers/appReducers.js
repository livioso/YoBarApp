import { Record } from 'immutable';
import moment from 'moment';

import {
  UPDATE_ORDER,
  PLACE_ORDER,
  NEXT_STEP,
  PREV_STEP,
} from '../Actions/appActions';

const Order = new Record({
  id: 'Loading ...',
  customer: 'Sepp Blatter',
  pickupLocation: 'Zurich',
  pickupTime: '',
  paid: false,
  orderPlaced: false,
  orderFinished: false,
  yogurtOrder: undefined,
});

const initialState = {
  orderingStep: 0,
  message: 'Good Morning, Sepp Blatter!',
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
    case NEXT_STEP: {
      if (state.orderingStep === 5) {
        return {
          ...state,
          message: `Hi ${state.order.customer}, you\'re Yoghurt is ready in ${state.order.pickupLocation} at ${state.order.pickupTime}. \n\n Pickup code: #${state.order.id}`,
          orderingStep: 0,
        };
      }
      return {
        ...state,
        orderingStep: state.orderingStep + 1
      };
    }
    case PREV_STEP: {
      return {
        ...state,
        orderingStep: state.orderingStep - 1
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
