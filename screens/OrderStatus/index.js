import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

const OrderStatusScreen = () => {

    const navigation = useNavigation();

    const changeScreen = () => {
        navigation.push('CategoryOrderStatusScreen', {});
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={changeScreen} style={styles.box}>
                <Text>Chuyển qua xem thông tin chi tiết trạng thái</Text>
            </TouchableOpacity>
        </View>
    )
}

export default OrderStatusScreen