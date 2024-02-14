import { Link } from "expo-router";
import { Image, Pressable, StyleSheet, Text } from "react-native";

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
        <Link href={`/menu/${product.id}`} asChild>
            <Pressable className='flex-1 max-w-[50%] bg-white dark:bg-neutral-900/95 rounded-md p-1'>
                <Image source={{ uri: product.image || defaultImage }} style={styles.image} resizeMode="contain" />
                <Text className='text-base font-bold dark:text-white' >{product.name}</Text>
                <Text className='font-semibold text-blue-700 dark:text-blue-400'>${product.price}</Text>
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1
    }
});