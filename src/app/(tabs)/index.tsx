import { Image, StyleSheet, Text, View } from 'react-native';
import products from '@/assets/data/products';

const firstProduct = products[0]

export default function TabOneScreen() {
  return (
    <View className='bg-stone-200 p-2 rounded-md'>
      <Image source={{uri: firstProduct.image}} style={styles.image}/>
      <Text className='text-base font-bold' >{firstProduct.name}</Text>
      <Text className='font-semibold text-blue-700 dark:text-blue-400'>${firstProduct.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1
  }
});
