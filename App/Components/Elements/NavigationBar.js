import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image
} from 'react-native';

StatusBar.setBarStyle('light-content', true);

export const NavigationBar = ({ title, prevStep }) => {
  return (
    <View
      style={{
        backgroundColor: '#D12CAD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
      }}
    >
      <TouchableOpacity
        style={{ marginLeft: 10, marginTop: 25, position: 'absolute', left: 0, flexDirection: 'row' }}
        onPress={() => prevStep()}
      >
        <Image style={{ height: 20, width: 20 }} source={require('../../../assets/images/Back.png')} />
        <Text style={{ fontSize: 18, color: '#FFF', marginTop: -1 }}>Back</Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#FFF',
          marginTop: 10,
        }}
      >
        {title}
      </Text>
    </View>
  );
};
