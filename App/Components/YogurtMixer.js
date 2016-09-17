import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

import SwipeCarousel from './Elements/SwipeCarousel';

export default class YogurtMixer extends Component {

  constructor(props) {
    super(props);
    /* eslint-disable immutable/no-mutation, no-underscore-dangle */
    this.state = {
      myYogurt: {
        yogurt: 0,
        fruechte: 0,
        nuesse: 0,
        confiture: 0
      }
    };

    this.fooo = 'bar';

    this.yogurtOptions = [
      {
        name: 'yogurt',
        options: [
          { name: 'Nature Yogurt', image: require('../Assets/Images/yogurt.jpg') },
          { name: 'Erdbeer Yogurt', image: require('../Assets/Images/yogurt.jpg') },
          { name: 'Honig Yogurt', image: require('../Assets/Images/yogurt.jpg') }
        ]
      },
      {
        name: 'fruechte',
        options: [
          { name: 'Banane', image: require('../Assets/Images/yogurt.jpg') },
          { name: 'Kiwi', image: require('../Assets/Images/yogurt.jpg') },
          { name: 'Mango', image: require('../Assets/Images/yogurt.jpg') }
        ]
      },
      {
        name: 'nuesse',
        options: [
          { name: 'Banane', image: require('../Assets/Images/yogurt.jpg') },
          { name: 'Kiwi', image: require('../Assets/Images/yogurt.jpg') },
          { name: 'Mango', image: require('../Assets/Images/yogurt.jpg') }
        ]
      },
      {
        name: 'confiture',
        options: [
          { name: 'Banane', image: require('../Assets/Images/yogurt.jpg') },
          { name: 'Kiwi', image: require('../Assets/Images/yogurt.jpg') },
          { name: 'Mango', image: require('../Assets/Images/yogurt.jpg') }
        ]
      }
    ];
    /* eslint-enable immutable/no-mutation */
  }

  updateMyYogurt = (layer, value) => {
    const newYogurt = this.state.myYogurt;
    newYogurt[layer] = value - 1; // eslint-disable-line immutable/no-mutation
    this.setState({
      myYogurt: newYogurt
    });
  }

  render = () => {
    return (
      <View>
        {
          this.yogurtOptions.map(layer => (
            <SwipeCarousel
              key={layer.name}
              style={StyleSheet.flatten(styles.carousel)}
              update={this.updateMyYogurt}
              layer={layer.name}
            >
              {
                layer.options.map(option => (
                  <View key={option.name} style={styles.panel}>
                    <Image style={styles.image} source={option.image} />
                  </View>
                ))
              }
            </SwipeCarousel>
          ))
        }
      </View>
    );
  }
}


const window = Dimensions.get('window');
const panelHeight = 120;

// Styles
const styles = StyleSheet.create({
  carousel: {
    height: panelHeight,
    overflow: 'hidden'
  },
  panel: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row'
  },
  image: {
    width: window.width,
    height: panelHeight,
    resizeMode: 'cover',
  }
});
