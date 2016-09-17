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
import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

const OrderSelection = ({ nextStep, prevStep }) => {
  return (
    <View>
      <NavigationBar title="Order" prevStep={prevStep} />
      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Recently ordered</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/images/Yoghurt-1.png')}
          />
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require('../../assets/images/Yoghurt-2.png')}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Button text="Create your own" onPress={() => nextStep()} />
        </View>
        <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <Button text="Classics" />
          <Button text="Seasonal Hits" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 150,
    width: 150,
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
)(OrderSelection);
