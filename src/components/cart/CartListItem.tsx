import { FontAwesome } from "@expo/vector-icons";
import { useCart } from "@/src/provider/CartProvider";
import { Image, StyleSheet, Text, View } from "react-native";
import { CartItemType } from "@/src/types/types";
import { defaultImage } from "../product/ProductListItem";

type CartListItemPropsType = {
    item: CartItemType;
};

const CartListItem = ({ item }: CartListItemPropsType) => {
    const { updateQuantity } = useCart();
    const { product } = item;
    return (
        <View className="flex-row px-2 items-center rounded-2xl bg-white py-2">
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
            <View className="flex-row justify-center items-center">
                <FontAwesome
                    onPress={() => updateQuantity(item.id, -1)}
                    name="minus"
                    color="gray"
                    className="bg-slate-400/25 rounded-full p-3 aspect-square"
                />
                <Text className="text-lg font-semibold px-3">{item.quantity}</Text>
                <FontAwesome
                    onPress={() => updateQuantity(item.id, 1)}
                    name="plus"
                    color="gray"
                    className="bg-slate-400/25 rounded-full p-3 aspect-square"
                />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    cart_list_item_image: {
        height: 80,
        aspectRatio: 1,
    },
});

export default CartListItem;