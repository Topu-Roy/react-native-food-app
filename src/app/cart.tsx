import React from "react";
import {
    View,
    Text,
    Platform,
    Pressable,
    Image,
    StyleSheet,
    FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useCart } from "../provider/CartProvider";
import { Stack } from "expo-router";
import { CartItemType } from "../types/types";
import { defaultImage } from "../components/product/ProductListItem";

type CartListItemPropsType = {
    item: CartItemType;
};

const CartListItem = ({ item }: CartListItemPropsType) => {
    const { product } = item;
    return (
        <View className="flex-row px-2 items-center rounded-xl bg-white py-2">
            <Image
                source={{ uri: product.image || defaultImage }}
                style={style.cart_list_item_image}
                resizeMode="contain"
            />
            <View className="flex-1 gap-2 px-2">
                <Text className="text-xl font-bold">{product.name}</Text>
                <View className="flex-row gap-2">
                    <Text className="text-lg font-medium">${product.price}</Text>
                    <Text className="text-lg font-medium">.</Text>
                    <Text className="text-lg font-medium">Size: ({item.size})</Text>
                </View>
            </View>
            <View className="flex-row justify-center items-center gap-2">
                <Pressable className="justify-center items-center rounded-full h-10 w-10 bg-slate-500/30">
                    <Text className="justify-center items-center text-2xl font-bold">+</Text>
                </Pressable>
                <Text className="text-lg font-semibold">{item.quantity}</Text>
                <Pressable className="justify-center items-center rounded-full h-10 w-10 bg-slate-500/30">
                    <Text className="justify-center items-center text-2xl font-bold">-</Text>
                </Pressable>
            </View>
        </View>
    );
};

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

const style = StyleSheet.create({
    cart_list_item_image: {
        height: 80,
        aspectRatio: 1,
    },
});

export default CartModal;
