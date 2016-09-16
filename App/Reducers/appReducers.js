import {
  STARTUP_DONE
} from '../Actions/appActions';

const initialState = {
  message: 'Loading...',
};

const app = (state = initialState, action) => { // eslint-disable-line complexity
  switch (action.type) {
    case STARTUP_DONE:
      return {
        ...state,
        message: 'Done :)'
      };
    default:
      return state;
  }
};

export { app as default };
