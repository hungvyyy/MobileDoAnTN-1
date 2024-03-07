import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ManufactureScreen, CategoryManufactureScreen } from '../../screens'
import { COLORS } from '../../contains';


const ManufactureStack = createStackNavigator();

const ManufactureStackScreen = () => {
  return (
    <ManufactureStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <ManufactureStack.Screen name="ManufactureScreen" component={ManufactureScreen} options={{title : 'Thông tin sản xuất.'}}/>
      <ManufactureStack.Screen name="CategoryManufactureScreen" component={CategoryManufactureScreen} options={{title : 'Đã vào xem thông tin chi tiết'}}/>
    </ManufactureStack.Navigator>
  );
}

export default ManufactureStackScreen