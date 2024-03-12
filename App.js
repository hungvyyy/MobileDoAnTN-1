import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import MyTabs from './navigation/inventory_management';
import MyTabsWorker from './navigation/worker';
import MyTabsProduction from './navigation/production_manager';
import MyTabsDriver from './navigation/driver';
import store from './store';
import AuthStackScreen from './navigation/Auth'


export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MyTabsDriver />
    </NavigationContainer>
    </Provider>
  );

}