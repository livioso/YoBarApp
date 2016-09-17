import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from 'react-native';

StatusBar.setBarStyle('light-content', true);

export const NavigationBar = ({ goToBack, title }) => {
  return (
    <View
      style={{
        backgroundColor: '#D12CAD',
        flex: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 24,
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
