import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View className='flex-1 justify-center items-center gap-4'>
            <Link href={'/(user)'} asChild >
                <Pressable className='w-[60%] h-16 rounded-full bg-[#2f95dc] justify-center items-center'>
                    <Text className='font-semibold text-lg text-gray-800'>
                        User
                    </Text>
                </Pressable>
            </Link>
            <Link href={'/(admin)'} asChild>
                <Pressable className='w-[60%] h-16 rounded-full bg-[#2f95dc] justify-center items-center'>
                    <Text className='font-semibold text-lg text-gray-800'>
                        Admin
                    </Text>
                </Pressable>
            </Link>
        </View>
    )
}

export default index

const styles = StyleSheet.create({})