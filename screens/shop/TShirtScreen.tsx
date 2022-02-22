import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import ProductBarComponent from './ProductBarComponent';
import ProductListItemComponent from './ProductListItemComponent';

export default function TShirtScreen({ navigation }: any) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <View style={styles.categoriesScreen}>
      <ProductListItemComponent></ProductListItemComponent>
      <ProductBarComponent navigation={navigation}></ProductBarComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesScreen: {
    backgroundColor: '#FFF'
  }
});
