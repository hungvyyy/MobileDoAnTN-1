import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains';
import { Image } from 'react-native';

import ManufactureStackScreen from './ManufactureNavigation';
import OrderStatusStackScreen from './OrderStatusNavigation';
import SettingsStackScreen from './SettingNavigation';

const Tab = createBottomTabNavigator();

const MyTabsProduction = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Manufacture':
                return (
                  <Image
                    source={focused ? require('../../assets/images/Product_2.png') : require('../../assets/images/Product_1.png')}
                    style={{ width: 24, height: 24 }}
                  />
                );
              case 'OrderStatus':
                return (
                  <Image
                    source={focused ? require('../../assets/images/Materials_2.png') : require('../../assets/images/Materials_1.png')}
                    style={{ width: 24, height: 24 }}
                  />
                );
              case 'Settings':
                return (
                  <Image
                    source={focused ? require('../../assets/images/Settings_2.png') : require('../../assets/images/Settings_1.png')}
                    style={{ width: 24, height: 24 }}
                  />
                );
              default:
                break;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.second,
          tabBarInactiveTintColor: COLORS.second,
          tabBarStyle : {
            backgroundColor : COLORS.primary,
            height : 65,
            paddingBottom : 10
          },
          tabBarLabelStyle : {
            fontSize : 13
          },
          headerShown : false
        })}
      >
        <Tab.Screen name="Manufacture" component={ManufactureStackScreen} />
        <Tab.Screen name="OrderStatus" component={OrderStatusStackScreen} />
        <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    )
}
export default MyTabsProduction