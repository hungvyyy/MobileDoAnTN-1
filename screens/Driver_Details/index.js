import React from 'react';
import { View, Dimensions , Text ,Button} from 'react-native';
import { TabView,TabBar , SceneMap } from 'react-native-tab-view';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
// Function to render the list of orders

const OrdersList = ({ orders }) => {
  const navigation = useNavigation();
  return (
  <View>
    {orders.map(order => (
      <View key={order.id} style={styles.orderContainer}>
        <View style={styles.orderDetails}>
          <Text>{`Customer: ${order.customer}`}</Text>
          <Text>{`Phone: ${order.phone}`}</Text>
          <Text>{`Email: ${order.email}`}</Text>
        </View>
        {/* Add a button after each order */}
        <View style={styles.buttonContainer}>
          <Button title="Đã lấy hàng" onPress={() => handleOrderDetails(order.id)} />
          <Button title="Xem bản đồ" onPress={() => navigation.navigate('DriverMapScreen')} /> 
        </View>
      </View>
    ))}
  </View>
   );
};

const FirstRoute = () => (
  <OrdersList
    orders={[
      { id: 1, customer: 'Messi', phone: '123-456-7890', email: 'john@example.com' },
      // { id: 2, customer: 'Ri Đỗ', phone: '987-654-3210', email: 'jane@example.com' },
    ]}
  />
);

const SecondRoute = () => (
  <OrdersList
    orders={[
      // Define orders for "Đã lấy Hàng" status
    ]}
  />
);

const ThirdRoute = () => {
  return (
    <View style={{ flex: 1 }}>
      <OrdersList
        orders={[]} 
      />
   {/* Nút bấm để hiển thị bản đồ */}
    </View>
  );
}

const FourthRoute = () => (
  <OrdersList
    orders={[
      // Define orders for "Giao hàng thành công" status
    ]}
  />
);
const initialLayout = { width: Dimensions.get('window').width };
const renderScene = ({ route }) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute />;
    case 'second':
      return <SecondRoute />;
    case 'third':
      return <ThirdRoute />;
    case 'fourth':
      return <FourthRoute />;
    default:
      return null;
  }
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#ee4d2d' }} // Shopee's red color
    style={{ backgroundColor: '#fff' }} // White background
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color: focused ? '#ee4d2d' : '#888' }}>{route.title}</Text> // Red for focused tab, gray for others
    )}
    icon={({ route, focused, color }) => (
      <Ionicons
        name={focused ? 'ios-cart' : 'ios-cart-outline'} // Filled cart icon for focused tab, outline for others
        size={24}
        color={focused ? '#ee4d2d' : '#888'} // Red for focused tab, gray for others
      />
    )}
  />
);

const DriverDetailsScreen = () => (
  <View style={{ flex: 1 }}>
    <TabView
      navigationState={{ index: 0, routes: [{ key: 'first', title: 'Chờ lấy hàng' }, { key: 'second', title: 'Đã lấy Hàng' }, { key: 'third', title: 'Đang giao hàng' }, { key: 'fourth', title: 'Giao hàng thành công' }] }}
      renderScene={renderScene}
      renderTabBar={renderTabBar} // Custom TabBar
      onIndexChange={() => {}} // Dummy function, as index change not used here
      initialLayout={initialLayout}
    />
  </View>
);


export default DriverDetailsScreen;