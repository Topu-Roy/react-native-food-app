import { FlatList, View } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/product/ProductListItem';

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
      />
    </View>
  );
}


