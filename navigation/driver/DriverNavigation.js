import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DriverchedulesScreen, DriverDetailsScreen } from '../../screens'
import { COLORS } from '../../contains';


const DriverStack = createStackNavigator();

const DriverStackScreen = () => {
  return (
    <DriverStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <DriverStack.Screen name="DriverchedulesScreen" component={DriverchedulesScreen} options={{title : 'Lịch Làm việc'}}/>
      <DriverStack.Screen name="DriverDetailsScreen" component={DriverDetailsScreen} options={{title : 'Đã vào xem thông tin chi tiết'}}/>
    </DriverStack.Navigator>
  );
}

export default DriverStackScreen