import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';

import * as appActions from '../Actions/appActions';
import WelcomeScreen from './WelcomeScreen';
import OrderSelection from './OrderSelection';

const Router = ({ orderingStep }) => {
  switch (orderingStep) {
    case 0:
      return <WelcomeScreen />;
    case 1:
      return <OrderSelection />;
    default:
      return null;
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
