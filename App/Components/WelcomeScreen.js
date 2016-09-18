import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import * as appActions from '../Actions/appActions';
import { Button } from './Elements/Button';

const citySelection = (city, nextStep, updateOrder) => {
  updateOrder({
    pickupLocation: city
  });
  nextStep();
};

const WelcomeScreen = ({ message, nextStep, updateOrder }) => {
  return (
    <View style={styles.welcome}>
      <Image
        resizeMode="contain"
        style={{
          height: 150,
          width: 130,
        }}
        source={require('../../assets/images/yobar-logo.png')}
      />
      <View>
        <Image
          resizeMode="contain"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
            width: 350,
          }}
          source={require('../../assets/images/emmi_top.jpg')}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            backgroundColor: 'transparent',
            alignItems: 'center',
            textAlign: 'center',
            marginLeft: 35,
            marginRight: 35,
            marginTop: 15,
            marginBottom: 10,
          }}
        >
        {message}
        </Text>
        <Image
          resizeMode="contain"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 115,
            width: 350,
            marginBottom: 15
          }}
          source={require('../../assets/images/emmi_bottom.jpg')}
        />
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center'
          }}
        >
          Choose your YoBar Store
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 30,
          }}
        >
          <Button text="Luzern" onPress={() => citySelection('Luzern', nextStep, updateOrder)} />
          <Button text="Zürich" onPress={() => citySelection('Zurich', nextStep, updateOrder)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: '#FAFAFC',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
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
)(WelcomeScreen);
