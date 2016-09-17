import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';

import SwipeCarousel from './Elements/SwipeCarousel';
import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

export default class YogurtMixer extends Component {

  constructor(props) {
    super(props);
    /* eslint-disable immutable/no-mutation, no-underscore-dangle */
    this.state = {
      myYogurt: {
        yogurt: 0,
        fruechte: 0,
        cereal: 0,
        marmelade: 0
      }
    };

    this.yogurtOptions = {
      cereal: {
        name: 'cereal',
        options: [
          { name: 'Granola', image: require('../../assets/images/ingredients/granola.jpg') },
          { name: 'Cornflakes', image: require('../../assets/images/ingredients/Cornflakes.jpg') },
          { name: 'Haferflocken', image: require('../../assets/images/ingredients/Haferflocken.jpg') }
        ]
      },
      fruechte: {
        name: 'fruechte',
        options: [
          { name: 'Banane', image: require('../../assets/images/ingredients/bananen.jpg') },
          { name: 'Kiwi', image: require('../../assets/images/ingredients/Kiwi.jpg') },
          { name: 'Erdbeeren', image: require('../../assets/images/ingredients/erdbeeren.jpg') },
          { name: 'Trauben', image: require('../../assets/images/ingredients/Trauben.jpg') }
        ]
      },
      yogurt: {
        name: 'yogurt',
        options: [
          { name: 'Nature Yogurt', image: require('../../assets/images/ingredients/Joghurt_Weiss.jpg') },
          { name: 'Honig Yogurt', image: require('../../assets/images/ingredients/Joghurt_Orange.jpg') },
          { name: 'Heidelbeer Yogurt', image: require('../../assets/images/ingredients/Joghurt_Pink.jpg') }
        ]
      },
      marmelade: {
        name: 'marmelade',
        options: [
          { name: 'Marmelade', image: require('../../assets/images/ingredients/Marmelade.jpg') },
          { name: 'Marmelade Orange', image: require('../../assets/images/ingredients/Marmelade_orange.jpg') }
        ]
      }
    };
    /* eslint-enable immutable/no-mutation */
  }

  componentWillMount = () => {
    const newYogurt = this.state.myYogurt;
    Object.keys(this.yogurtOptions).map(layer => (
      newYogurt[layer] = this.yogurtOptions[layer].options[0].name // eslint-disable-line immutable/no-mutation
    ));
    this.setState({
      myYogurt: newYogurt
    });
  }

  updateMyYogurt = (layer, value) => {
    const newYogurt = this.state.myYogurt;
    newYogurt[layer] = this.yogurtOptions[layer].options[value - 1].name; // eslint-disable-line immutable/no-mutation
    this.setState({
      myYogurt: newYogurt
    });
  }

  sendMyYogurt = () => {
    console.warn("do redux stuff");
  }

  render = () => {
    return (
      <View>
        <NavigationBar title="Create your own" />
        <View style={{ marginBottom: 20 }}>
          {
            Object.keys(this.yogurtOptions).map(layer => (
              <SwipeCarousel
                key={layer}
                style={StyleSheet.flatten(styles.carousel)}
                update={this.updateMyYogurt}
                layer={layer}
              >
              {
                this.yogurtOptions[layer].options.map(option => (
                  <View key={option.name} style={styles.panel}>
                    <Image style={styles.image} source={option.image} />
                  </View>
                ))
              }
              </SwipeCarousel>
            ))
          }
        </View>
        <Button text="Choose pickup time" onPress={this.sendMyYogurt} />
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
