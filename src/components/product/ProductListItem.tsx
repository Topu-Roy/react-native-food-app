import { Image, StyleSheet, Text, View } from "react-native";

type ProductListItemType = {
    product: {
        id: number;
        name: string;
        image: string | null;
        price: number;
    }
}

export const defaultImage = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png"

export default function ProductListItem({ product }: ProductListItemType) {
    return (
        <View className='bg-stone-200 p-2 rounded-md'>
            <Image source={{ uri: product.image || defaultImage }} style={styles.image} />
            <Text className='text-base font-bold' >{product.name}</Text>
            <Text className='font-semibold text-blue-700 dark:text-blue-400'>${product.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1
    }
});