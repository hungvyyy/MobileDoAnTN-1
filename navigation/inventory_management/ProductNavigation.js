import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductScreen, CategoryProductScreen } from '../../screens'
import { COLORS } from '../../contains';


const ProductStack = createStackNavigator();

const ProductStackScreen = () => {
  return (
    <ProductStack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : COLORS.primary
            },
            headerTintColor : COLORS.second
        }}
    >
      <ProductStack.Screen name="ProductScreen" component={ProductScreen} options={{title : 'Thông tin sản phẩm'}}/>
      <ProductStack.Screen name="CategoryProductScreen" component={CategoryProductScreen} options={{title : 'Đã vào xem thông tin chi tiết'}}/>
    </ProductStack.Navigator>
  );
}

export default ProductStackScreen