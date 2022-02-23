import { ScrollView, StyleSheet, Text, View } from 'react-native';

import checkoutStyles from './CheckoutStyle.style';

export default function CheckoutShippingScreen() {
  return (
    <ScrollView style={checkoutStyles.container}>
      <Text style={checkoutStyles.title}>Shipping</Text>
    </ScrollView>
  );
}