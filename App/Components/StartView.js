import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import * as appActions from '../Actions/appActions';

const StartupView = ({ message = 'o/' }) => (
  <View style={styles.app}>
    <Text>{message}</Text>
  </View>
);

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
  (state) => ({
  ...state.app
  }),
  (dispatch) => ({
    ...bindActionCreators(appActions, dispatch)
  })
)(StartupView);
