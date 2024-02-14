import { Image, StyleSheet, Text, View } from "react-native";

type ProductListItemType = {
    product: {
        id: number;
        name: string;
        image: string;
        price: number;
    }
}

export default function ProductListItem(props: ProductListItemType) {
    const { product } = props;
    return (
        <View className='bg-stone-200 p-2 rounded-md'>
            <Image source={{ uri: product.image }} style={styles.image} />
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