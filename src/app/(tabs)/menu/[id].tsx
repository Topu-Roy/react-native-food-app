import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products';
import { defaultImage } from '@/src/components/product/ProductListItem';

const ProductDetailsScreen = () => {
    const { id } = useLocalSearchParams();
    const product = products.find(p => p.id.toString() === id)
    const sizes = ["S", "M", "L", "XL"];

    const [sizeState, setSizeState] = useState('M')

    if (!product) {
        return (
            <View className='flex-1 justify-center items-center'>
                <Text className='font-semibold text-lg'>Product not found</Text>
            </View>
        )
    }

    return (
        <View className='px-2 flex-1 bg-white'>
            <Stack.Screen options={{ title: product.name }} />

            <View>
                <Image source={{ uri: product.image || defaultImage }} style={style.image} resizeMode='contain' />
                <Text className='text-xl font-medium text-slate-700 pb-4'>Select size</Text>
                <View className='justify-around items-center flex-row '>
                    {sizes.map(size => (
                        <Pressable
                            onPress={() => setSizeState(size)}
                            key={size} className='h-14 w-14 rounded-full justify-center items-center'
                            style={{ backgroundColor: size == sizeState ? "gainsboro" : "white" }}
                        >
                            <Text className='justify-center items-center text-lg font-medium'
                                style={{ color: size == sizeState ? "black" : "gray" }}
                            >{size}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
            <View className='justify-end pb-4 gap-4 mt-auto'>
                <View className='justify-start items-start flex-row gap-2'>
                    <Text className='text-xl font-medium text-slate-700'>Price</Text>
                    <Text className='text-2xl font-extrabold text-blue-700'>${product.price}</Text>
                </View>
                <Pressable className='justify-center items-center h-14 bg-teal-400 rounded-full'>
                    <Text className='text-lg font-medium'>
                        Add to cart
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1,
    }
})

export default ProductDetailsScreen;
