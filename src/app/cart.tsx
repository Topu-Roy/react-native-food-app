import React from "react";
import { View, FlatList, Platform, Pressable, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../provider/CartProvider";
import { Stack } from "expo-router";
import CartListItem from "../components/cart/CartListItem";


const CartModal = () => {
    const { items, totalPrice } = useCart();
    return (
        <View className="flex-1 bg-slate-200/60 p-3">
            <FlatList
                data={items}
                renderItem={({ item }) => <CartListItem item={item} />}
                contentContainerStyle={{ gap: 10 }}
            />

            <View className="gap-2">
                <Text className="font-semibold text-xl">Total price: ${totalPrice}</Text>
                <Pressable className='justify-center items-center h-14 bg-teal-400 rounded-full'>
                    <Text className='text-lg font-medium'>
                        Add to cart
                    </Text>
                </Pressable>
            </View>


            {/* Conf stuff */}
            <Stack.Screen options={{ title: "Cart" }} />
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
};

export default CartModal;
