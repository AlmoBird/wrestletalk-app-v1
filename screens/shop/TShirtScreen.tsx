import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import ProductBarComponent from './ProductBarComponent';
import ProductFiltersComponent from './ProductFiltersComponent';
import ProductListItemComponent from './ProductListItemComponent';

export default function TShirtScreen() {
  return (
    <View style={styles.categoriesScreen}>
      <ProductFiltersComponent></ProductFiltersComponent>
      <ProductListItemComponent></ProductListItemComponent>
      <ProductBarComponent></ProductBarComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesScreen: {
    backgroundColor: '#FFF'
  }
});
