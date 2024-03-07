import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


const ProductScreen = () => {

    const navigation = useNavigation();

    const changeScreen = () => {
        navigation.push('CategoryProductScreen', {});
    }

    return (
        <View style={styles.container}>
             <View style={styles.centeredView}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={changeScreen} style={[styles.box, styles.product]}>
                        <Text style={styles.productText}>Sản phẩm 1: ABC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={changeScreen} style={[styles.box, styles.product]}>
                        <Text style={styles.productText}>Sản phẩm 2: 123</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/images/Add_1.png')}
                    style={styles.image}
                />
            </View>
        </View>
    )
}

export default ProductScreen