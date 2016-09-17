import React from 'react';
import {
  View,
  Text
} from 'react-native';

import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

export const OrderConfirmation = () => {
  return (
    <View>
      <NavigationBar title="Order confirmation" />
      <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
        <Text style={{ fontSize: 24 }}>Great, we'll have it ready at 10:15</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 24 }}>
            Your order ID is <Text style={{ fontWeight: 'bold' }}>#347</Text>
          </Text>
        </View>
        <View style={{ marginTop: 100, flexDirection: 'row' }}>
          <Button text="Home" />
        </View>
      </View>
    </View>
  );
};