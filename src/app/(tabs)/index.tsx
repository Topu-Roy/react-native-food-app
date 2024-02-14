import { ScrollView } from 'react-native';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/product/ProductListItem';

export default function TabOneScreen() {
  return (
    <ScrollView>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
      <ProductListItem product={products[2]} />
    </ScrollView>
  );
}


