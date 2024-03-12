import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import styles from './styles'
import { fetchCategory } from '../../store/slices/category';


const CategoryOrderStatusScreen = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCategory)
    })
    return (
        <View style={styles.container}>
            <Text>Đã Vào xem thông tin chi tiết trạng thái</Text>
        </View>
    )
}

export default CategoryOrderStatusScreen