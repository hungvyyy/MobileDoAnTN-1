import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../../contains';
import {SuppliesScreen, CategorySuppliesScreen} from '../../screens'

const SuppliesStack = createStackNavigator();

const SuppliesStackScreen = () => {
  return (
    <SuppliesStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <SuppliesStack.Screen name="SuppliesScreen" component={SuppliesScreen} options={{title : 'Thông tin vật tư'}}/>
      <SuppliesStack.Screen name="CategorySuppliesScreen" component={CategorySuppliesScreen} options={{title : 'Đã vào xem thông tin chi tiết vật tư'}}/>
    </SuppliesStack.Navigator>
  );
}

export default SuppliesStackScreen