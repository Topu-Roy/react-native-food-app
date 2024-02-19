import React from "react";
import { View, FlatList, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../provider/CartProvider";
import { Stack } from "expo-router";
import CartListItem from "../components/cart/CartListItem";


const CartModal = () => {
    const { items } = useCart();
    return (
        <View className="flex-1 bg-slate-200/60">
            <FlatList
                data={items}
                renderItem={({ item }) => <CartListItem item={item} />}
                contentContainerStyle={{ gap: 10, padding: 10 }}
            />


            {/* Conf stuff */}
            <Stack.Screen options={{ title: "Cart" }} />
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
};

export default CartModal;
