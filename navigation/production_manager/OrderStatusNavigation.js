import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS } from '../../contains';
import {OrderStatusScreen, CategoryOrderStatusScreen} from '../../screens'

const OrderStatusStack = createStackNavigator();

const OrderStatusStackScreen = () => {
  return (
    <OrderStatusStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <OrderStatusStack.Screen name="OrderStatusScreen" component={OrderStatusScreen} options={{title : 'Thông tin trạng thái sản xuất'}}/>
      <OrderStatusStack.Screen name="CategoryOrderStatusScreen" component={CategoryOrderStatusScreen} options={{title : 'Đã vào xem thông tin trạng thái sản xuất'}}/>
    </OrderStatusStack.Navigator>
  );
}

export default OrderStatusStackScreen