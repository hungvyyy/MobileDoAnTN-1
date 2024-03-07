import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

const ManufactureScreen = () => {

    const navigation = useNavigation();

    const changeScreen = () => {
        navigation.push('CategoryManufactureScreen', {});
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={changeScreen} style={styles.box}>
                <Text>Chuyển qua xem thông tin chi tiết sản phẩm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ManufactureScreen