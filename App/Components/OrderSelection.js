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

const setDirectOrder = (order, nextStep, updateOrder) => {
  updateOrder({
    yogurtOrder: order
  });
  nextStep();
  nextStep();
};

const OrderSelection = ({ nextStep, updateOrder }) => {
  return (
    <View>
      <NavigationBar title="Order" />
      <View style={{ margin: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Recently ordered</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => setDirectOrder({
              cereal: 'YoBar Muesli',
              fruits: 'Strawberries',
              yogurt: 'Nature Yogurt',
              sauce: 'Strawberry Sauce'
            }, nextStep, updateOrder)}
            style={styles.image}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../assets/images/Yoghurt-1.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDirectOrder({
              cereal: 'YoBar Muesli',
              fruits: 'Mango',
              yogurt: 'Nature Yogurt',
              sauce: 'Honey Sauce'
            }, nextStep, updateOrder)}
            style={styles.image}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../assets/images/Yoghurt-2.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10 }}>
          <Button text="Create your own" onPress={() => nextStep()} />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 40 }}>Best sellers</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => setDirectOrder({
              cereal: 'YoBar Muesli',
              fruits: 'Avocado',
              yogurt: 'Nature Yogurt',
              sauce: 'Mango Sauce'
            }, nextStep, updateOrder)}
            style={styles.image}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../assets/images/AvocadoAffair.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDirectOrder({
              cereal: 'YoBar Muesli',
              fruits: 'Kiwi',
              yogurt: 'Forest fruits yogurt',
              sauce: 'Raspberry Sauce'
            }, nextStep, updateOrder)}
            style={styles.image}>
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../../assets/images/KiwiKarma.png')}
            />
          </TouchableOpacity>
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
