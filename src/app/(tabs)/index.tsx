import { FlatList } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/product/ProductListItem';

export default function TabOneScreen() {
  return (
    <FlatList
      className='m-1'
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
    />
  );
}