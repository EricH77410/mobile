import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore';

import App from './App';

const RNRedux = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('mobile', () => RNRedux);
