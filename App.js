import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation/inventory_management';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}