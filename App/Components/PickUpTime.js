import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React from 'react';
import moment from 'moment';
import {
  View,
  DatePickerIOS,
  Text,
  StyleSheet
} from 'react-native';

import { NavigationBar } from './Elements/NavigationBar';
import { Button } from './Elements/Button';
import { SummaryItem } from './Elements/SummaryItem';

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

  formatDate = (date) => {
    return moment(date).format('hh:mm a');
  }

  dateSelection = (nextStep, updateOrder) => {
    updateOrder({
      pickupTime: this.formatDate(this.state.date)
    });
    nextStep();
  }

  render() {
    return (
      <View>
        <NavigationBar title="Pick up time" prevStep={this.props.prevStep} />
        <DatePickerIOS date={this.state.date} mode="time" onDateChange={this.onDateChange} />
        <View
          style={{
            alignItems: 'center',
            marginBottom: 40,
          }}
        >
          <View>
            <Text style={styles.heading}>Your Yoghurt: </Text>
            <SummaryItem title="Cereal" text={this.props.order.yogurtOrder.cereal} />
            <SummaryItem title="Fruits" text={this.props.order.yogurtOrder.fruits} />
            <SummaryItem title="Yogurt" text={this.props.order.yogurtOrder.yogurt} />
            <SummaryItem title="Sauce" text={this.props.order.yogurtOrder.sauce} />

            <Text style={styles.heading}>Order summary</Text>
            <SummaryItem title="Pickup location: " text={this.props.order.pickupLocation} />
            <SummaryItem title="Pickup time: " text={this.formatDate(this.state.date)} />
          </View>
        </View>
        <Button
          text="Place order"
          onPress={() => this.dateSelection(this.props.nextStep, this.props.updateOrder)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

// connect view with its data
export default connect(
  state => ({
    ...state.app
  }),
  dispatch => ({
    ...bindActionCreators(appActions, dispatch)
  })
)(PickUpTime);
