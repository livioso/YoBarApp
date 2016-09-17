import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

export const SummaryItem = ({ title, text }) => {
  return (
    <Text>
      <Text style={styles.bold}>{title}: </Text>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  }
});
