import { ScrollView, StyleSheet, Text, View } from 'react-native';

import checkoutStyles from './CheckoutStyle.style';

export default function CheckoutReviewScreen() {
  return (
    <ScrollView style={checkoutStyles.container}>
      <Text style={checkoutStyles.title}>Review</Text>
    </ScrollView>
  );
}
