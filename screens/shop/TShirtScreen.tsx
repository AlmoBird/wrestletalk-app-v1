import { StyleSheet } from 'react-native';

import { Text, View } from '../../components/Themed';
import ProductListItemComponent from './ProductListItemComponent';

export default function TShirtScreen() {
  return (
    <View style={styles.categoriesScreen}>
      <ProductListItemComponent></ProductListItemComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesScreen: {
    backgroundColor: '#FFF'
  }
});
