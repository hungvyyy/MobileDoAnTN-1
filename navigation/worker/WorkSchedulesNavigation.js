import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WorkschedulesScreen, WorksDetailsScreen } from '../../screens'
import { COLORS } from '../../contains';


const WorkschedulesStack = createStackNavigator();

const WorkschedulesStackScreen = () => {
  return (
    <WorkschedulesStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <WorkschedulesStack.Screen name="WorkschedulesScreen" component={WorkschedulesScreen} options={{title : 'Lịch Làm việc'}}/>
      <WorkschedulesStack.Screen name="WorksDetailsScreen" component={WorksDetailsScreen} options={{title : 'Đã vào xem thông tin chi tiết'}}/>
    </WorkschedulesStack.Navigator>
  );
}

export default WorkschedulesStackScreen