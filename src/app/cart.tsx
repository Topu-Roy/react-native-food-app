import { View, Text, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useCart } from '../provider/CartProvider';

const CartModal = () => {
    const { items } = useCart();
    return (
        <View>
            <Text>{items.length}</Text>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    )
}

export default CartModal;