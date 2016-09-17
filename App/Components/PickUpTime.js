import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import {
  View,
  DatePickerIOS,
  Text
} from 'react-native';

import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

import * as appActions from '../Actions/appActions';

class PickUpTime extends React.Component {
  constructor() {
    super();

    this.state = {
      date: new Date()
    };
  }

  onDateChange = (date) => {
    this.setState({
      date
    });
  }

  dateSelection = (nextStep, updateOrder) => {
    updateOrder({
      pickupTime: this.state.date
    });
    nextStep();
  }

  render() {
    return (
      <View>
        <NavigationBar title="Pick up time" />
        <DatePickerIOS date={this.state.date} mode="time" onDateChange={this.onDateChange} />
        <View
          style={{
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 16 }}>
            Order Summary
          </Text>
        </View>
        <Button
          text="Place order"
          onPress={() => this.dateSelection(this.props.nextStep, this.props.updateOrder)}
        />
      </View>
    );
  }
}

// connect view with its data
export default connect(
  state => ({
    ...state.app
  }),
  dispatch => ({
    ...bindActionCreators(appActions, dispatch)
  })
)(PickUpTime);
