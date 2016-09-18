import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native';

import * as appActions from '../Actions/appActions';
import SwipeCarousel from './Elements/SwipeCarousel';
import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

export class YogurtMixer extends Component {

  constructor(props) {
    super(props);
    /* eslint-disable immutable/no-mutation, no-underscore-dangle */
    this.state = {
      myYogurt: {},
      info: []
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
          { name: 'Aprikosen Sauce', image: require('../../assets/images/ingredients/Marmelade_orange.jpg') }
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

  setInfo = (layer) => {
    const newInfo = this.state.info;
    const index = newInfo.indexOf(layer);
    if (index > -1) {
      newInfo.splice(index, 1);
    } else {
      newInfo.push(layer);
    }
    this.setState({
      info: newInfo
    });
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
                      {
                        (this.state.info.indexOf(layer) > -1) ?
                        (
                          <TouchableOpacity
                            style={styles.textBoxContainer}
                            activeOpacity={0.8}
                            onPress={() => this.setInfo(layer)}
                          >
                            <View style={styles.textBox}>
                              <Text style={styles.text}>
                                {option.name}
                              </Text>
                            </View>
                          </TouchableOpacity>
                        ) :
                        (
                          <TouchableOpacity
                            style={styles.infoToggle}
                            activeOpacity={0.6}
                            onPress={() => this.setInfo(layer)}
                          >
                            <Text style={[styles.text, {fontSize: 15}]}>
                              i
                            </Text>
                          </TouchableOpacity>
                        )
                      }
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBoxContainer: {
    flex: 1,
    height: panelHeight - 50,
    marginLeft: 25,
    marginRight: 25,

  },
  textBox: {
    flex: 1,
    backgroundColor: '#D12CAD',
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoToggle: {
    height: 20,
    width: 20,
    backgroundColor: '#D12CAD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  linearGradient: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
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
