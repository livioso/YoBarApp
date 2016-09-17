import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';

import * as appActions from '../Actions/appActions';
import WelcomeScreen from './WelcomeScreen';
import OrderSelection from './OrderSelection';
import YogurtMixer from './YogurtMixer';
import PickUpTime from './PickUpTime';
import OrderConfirmation from './OrderConfirmation';

const Router = ({ orderingStep }) => {
  switch (orderingStep) {
    case 0:
      return <WelcomeScreen />;
    case 1:
      return <OrderSelection />;
    case 2:
      return <YogurtMixer />;
    case 3:
      return <PickUpTime />;
    case 4:
      return <OrderConfirmation />;
    default:
      return <WelcomeScreen />;
  }
};

// connect view with its data
export default connect(
  state => ({
    ...state.app
  }),
  dispatch => ({
    ...bindActionCreators(appActions, dispatch)
  })
)(Router);
