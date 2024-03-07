import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

const DriverchedulesScreen = () => {

    const navigation = useNavigation();

    const changeScreen = () => {
        navigation.push('DriverDetailsScreen', {});
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={changeScreen} style={styles.box}>
                <Text>Chuyển qua xem thông tin chi tiết của vận chuyển</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DriverchedulesScreen