import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'

const SuppliesScreen = () => {

    const navigation = useNavigation();

    const changeScreen = () => {
        navigation.push('CategorySuppliesScreen', {});
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={changeScreen} style={styles.box}>
                <Text>Chuyển qua xem thông tin chi tiết vật tư</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SuppliesScreen