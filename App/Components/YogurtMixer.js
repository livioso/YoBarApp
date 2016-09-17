import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import * as appActions from '../Actions/appActions';
import SwipeCarousel from './Elements/SwipeCarousel';
import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

export class YogurtMixer extends Component {

  constructor(props) {
    super(props);
    /* eslint-disable immutable/no-mutation, no-underscore-dangle */
    this.state = {
      myYogurt: {}
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
      fruits: {
        name: 'fruits',
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
      sauce: {
        name: 'sauce',
        options: [
          { name: 'Himbeer Sauce', image: require('../../assets/images/ingredients/Marmelade.jpg') },
          { name: 'Orangen Sauce', image: require('../../assets/images/ingredients/Marmelade_orange.jpg') }
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
    this.props.updateOrder({
      yogurtOrder: this.state.myYogurt
    });
    this.props.nextStep();
  }

  render = () => {
    return (
      <View>
        <NavigationBar title="Create your own" prevStep={this.props.prevStep} />
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
                    <Image style={styles.image} source={option.image}>
                      <LinearGradient colors={['transparent', '#df8cce']} locations={[0, 1]} style={styles.linearGradient}>
                        <Text style={styles.text}>
                          {option.name}
                        </Text>
                      </LinearGradient>
                    </Image>
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
    flexDirection: 'row'
  },
  image: {
    width: window.width,
    height: panelHeight,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginBottom: 5,
  },
});

export default connect(
  state => ({
    ...state.app
  }),
  dispatch => ({
    ...bindActionCreators(appActions, dispatch)
  })
)(YogurtMixer);
