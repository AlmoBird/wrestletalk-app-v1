import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import ProductBarComponent from './ProductBarComponent';
import ProductFiltersComponent from './ProductFiltersComponent';
import ProductListItemComponent from './ProductListItemComponent';

export default function TShirtScreen() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <View style={styles.categoriesScreen}>

      {
        showFilters ? 
        <ProductFiltersComponent></ProductFiltersComponent>
        : 
        null
      }
      
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
