import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './Store';
import StartView from './Components/StartView';

export const Main = () => {
  return (
    <Provider store={configureStore()}>
      <StartView />
    </Provider>
  );
};
