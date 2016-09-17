import React from 'react';
import { View, Text } from 'react-native';
import SwipeCarousel from './Components/Elements/SwipeCarousel';

export const Playground = () => {
  return (
    <Carousel />
  );
};

const Carousel = () => (
  <View>
    <SwipeCarousel style={{ height: 200 }}>
      <View style={{ flex: 1, backgroundColor: 'red' }}><Text>one</Text></View>
      <View style={{ flex: 1, backgroundColor: 'blue' }}><Text>two</Text></View>
      <View style={{ flex: 1, backgroundColor: 'green' }}><Text>three</Text></View>
    </SwipeCarousel>

    <SwipeCarousel style={{ height: 200 }}>
      <View style={{ flex: 1, backgroundColor: 'yellow' }}><Text>one</Text></View>
      <View style={{ flex: 1, backgroundColor: 'brown' }}><Text>two</Text></View>
      <View style={{ flex: 1, backgroundColor: '#C0FFEE' }}><Text>three</Text></View>
    </SwipeCarousel>
  </View>
);
