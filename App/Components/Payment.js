import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { CreditCardInput } from 'react-native-credit-card-input';
import * as appActions from '../Actions/appActions';
import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

const Payment = ({ prevStep, nextStep, updateOrder }) => {
  return (
    <View>
      <NavigationBar title="Choose payment" prevStep={prevStep} />
      <CreditCard />
      <Button
        text="Pay with CreditCard"
        onPress={() => setPayment(true, nextStep, updateOrder)}
        style={{ marginTop: 50 }}
      />
      <Button
        text="Pay at the store"
        onPress={() => setPayment(false, nextStep, updateOrder)}
        style={{ marginTop: 20 }}
      />
    </View>
  );
};

const setPayment = (paid, nextStep, updateOrder) => {
  updateOrder({
    paid
  });
  nextStep();
};

class CreditCard extends Component {
  _onChange = (formData) => {
    /* eslint no-console: 0 */
    console.log(JSON.stringify(formData, null, ' '));
  };

  _onFocus = (field) => {
    /* eslint no-console: 0 */
    console.log(field);
  };

  render() {
    return (
      <View style={styles.cardContainer}>
        <CreditCardInput
          autoFocus

          requiresName
          requiresCVC
          requiresPostalCode
          imageFront={require('../../assets/images/creditcard.png')}
          imageBack={require('../../assets/images/creditcard-back.png')}

          labelStyle={styles.cardLabel}
          inputStyle={styles.cardInput}
          validColor={"black"}
          invalidColor={"red"}
          placeholderColor={"darkgray"}

          onFocus={this._onFocus}
          onChange={this._onChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 60,
  },
  cardLabel: {
    color: 'black',
    fontSize: 12,
  },
  cardInput: {
    fontSize: 16,
    color: 'black',
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
)(Payment);
