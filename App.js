import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MyTabs from './navigation/inventory_management';
import MyTabsWorker from './navigation/worker';
import MyTabsProduction from './navigation/production_manager';
import MyTabsDriver from './navigation/driver';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabsWorker />
    </NavigationContainer>
  );
}