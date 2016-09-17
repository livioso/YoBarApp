import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  Dimensions
} from 'react-native';
import SwipeCarousel from './Components/Elements/SwipeCarousel';
import YogurtMixer from './Components/YogurtMixer';

export const Playground = () => {
  return (
    <ScrollView>
      <YogurtMixer />
    </ScrollView>
  );
};


const window = Dimensions.get('window');

const Carousel = () => (
  <View>
    <SwipeCarousel style={{ height: 200 }}>
      <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
        <Image
          style={{ width: window.width / 2, height: 200, resizeMode: 'contain', backgroundColor: 'white' }}
          source={require('./Assets/Images/yogurt.jpg')}
        />
        <Text>one</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'blue' }}>
        <Image
          style={{ width: window.width / 2, height: 200, resizeMode: 'contain', backgroundColor: 'white' }}
          source={require('./Assets/Images/yogurt.jpg')}
        />
        <Text>two</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'green' }}><Text>three</Text></View>
    </SwipeCarousel>

    <SwipeCarousel style={{ height: 200 }}>
      <View style={{ flex: 1, backgroundColor: 'yellow' }}><Text>one</Text></View>
      <View style={{ flex: 1, backgroundColor: 'brown' }}><Text>two</Text></View>
      <View style={{ flex: 1, backgroundColor: '#C0FFEE' }}><Text>three</Text></View>
    </SwipeCarousel>
  </View>
);
