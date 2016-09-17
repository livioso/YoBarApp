import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import * as appActions from '../Actions/appActions';

const StartupView = ({ placeOrder }) => {
  return (
    <View style={styles.app}>
      <TouchableOpacity onPress={placeOrder}>
        <Text>Place Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'tomato'
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
)(StartupView);
