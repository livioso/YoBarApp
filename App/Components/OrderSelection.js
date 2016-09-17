import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import { NavigationBar } from './NavigationBar';

export const OrderSelection = ({ updateOrder }) => {
  return (
    <View>
      <NavigationBar title="Order" />
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
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Create your own</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Classics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Seasonal Hits</Text>
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
  },
  button: {
    flex: 1,
    height: 60,
    backgroundColor: '#D12CAD',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
