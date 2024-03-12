import React from 'react';
import { View, Text, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const DriverMapScreen = ({ navigation }) => {
  // Giả sử có dữ liệu về vị trí của người giao hàng
  const driverLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={driverLocation}
      >
        <Marker
          coordinate={{ latitude: driverLocation.latitude, longitude: driverLocation.longitude }}
          title="Người giao hàng"
          description="Vị trí hiện tại của người giao hàng"
        />
      </MapView>
      <View style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
        <Button
          title="Quay lại"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

export default DriverMapScreen;
