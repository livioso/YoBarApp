import React from 'react';
import {
  View,
  DatePickerIOS
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
        <Button text="Place order" />
      </View>
    );
  }
}
