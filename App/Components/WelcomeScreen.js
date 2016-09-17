import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import { Button } from './Elements/Button';

export const WelcomeScreen = ({ updateOrder }) => {
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
            height: 300,
            width: 350,
          }}
          source={require('../../assets/images/yobar-background.png')}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 24,
              backgroundColor: 'transparent',
              width: 200,
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            Good Morning, Yves!
          </Text>
        </Image>
        <Text
          style={{
            fontSize: 24,
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
          <Button text="Luzern" onPress={updateOrder} />
          <Button text="Zürich" onPress={updateOrder} />
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
