import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import products from '@/assets/data/products';
import ProductCard from '@/src/components/product/ProductCard';

export default function TabOneScreen() {
  return (
    <ScrollView>
      <ProductCard product={products[0]} />
      <ProductCard product={products[1]} />
      <ProductCard product={products[2]} />
    </ScrollView>
  );
}


