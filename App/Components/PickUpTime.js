import React from 'react';
import {
  View,
  DatePickerIOS,
  Text
} from 'react-native';

import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';

export class PickUpTime extends React.Component {
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
        <Button text="Place order" />
      </View>
    );
  }
}
