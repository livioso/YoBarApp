import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

import * as appActions from '../Actions/appActions';

const flag = input => {
  if (input) {
    return 'yo';
  } else {
    return 'no';
  }
}

const OrderConfirmation = ({ order, nextStep, prevStep }) => {
  return (
    <View>
      <NavigationBar title="Order confirmation" prevStep={prevStep} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
          marginLeft: 30,
          marginRight: 30,
        }}>
        <Text style={styles.text}>Great!</Text>
        <Text style={styles.text}>We'll have your Yogurt ready at {order.pickupTime} in {order.pickupLocation}</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 24 }}>
            Your order ID is <Text style={{ fontWeight: 'bold' }}>{order.id}</Text>
          </Text>
          <Text style={{ fontSize: 24 }}>
            Confimration <Text style={{ fontWeight: 'bold' }}>{flag(order.orderPlaced)}</Text>
          </Text>
          <Text style={{ fontSize: 24 }}>
            Done <Text style={{ fontWeight: 'bold' }}>{flag(order.orderFinished)}</Text>
          </Text>
        </View>
        <View style={{ marginTop: 100, flexDirection: 'row' }}>
          <Button text="Home" onPress={() => nextStep()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    textAlign: 'center'
  }
});


// connect view with its data
export default connect(
  state => ({
    ...state.app
  }),
  dispatch => ({
    ...bindActionCreators(appActions, dispatch)
  })
)(OrderConfirmation);
