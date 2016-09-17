import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

import * as appActions from '../Actions/appActions';

const OrderConfirmation = ({ order, nextStep, prevStep }) => {
  return (
    <View>
      <NavigationBar title="Order confirmation" prevStep={prevStep} />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
        <Text style={{ fontSize: 24 }}>Great, we'll have it ready at {order.pickupTime}</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 24 }}>
            Your order ID is <Text style={{ fontWeight: 'bold' }}>#{order.id}</Text>
          </Text>
        </View>
        <View style={{ marginTop: 100, flexDirection: 'row' }}>
          <Button text="Home" onPress={() => nextStep()} />
        </View>
      </View>
    </View>
  );
};

// connect view with its data
export default connect(
  state => ({
    ...state.app
  }),
  dispatch => ({
    ...bindActionCreators(appActions, dispatch)
  })
)(OrderConfirmation);
