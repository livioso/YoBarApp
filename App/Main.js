import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './Store';
import Router from './Components/Router';

export const Main = () => {
  return (
    <Provider store={configureStore()}>
      <Router />
    </Provider>
  );
};
