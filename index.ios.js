import { AppRegistry } from 'react-native';

// disable warnings => ONLY do this temporary for demos
// console.disableYellowBox = true; // eslint-disable-line

import { Main } from './App/Main';
// import { Playground as Main } from './App/Playground';

AppRegistry.registerComponent('App', () => Main);
