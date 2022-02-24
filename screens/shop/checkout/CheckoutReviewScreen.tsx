import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

import appStyles from '../../../styles/appStyles.style';

export default function CheckoutReviewScreen({ navigation }: any) {
  return (
    <ScrollView style={appStyles.container}>
      <Text style={appStyles.title}>Review Order</Text>

      <View style={styles.mainBlock}>
        <View style={styles.section}>
          <Text style={[appStyles.text, styles.label]}>Contact</Text>
          <View style={styles.content}>
            <Text style={styles.contentEmail}>craig.bellamy@gmail.com</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[appStyles.text, styles.label]}>Ship to</Text>
          <View style={styles.content}>
            <Text style={styles.contentName}>Craig Bellamy</Text>
            <Text>100 Holmestead St</Text>
            <Text>Orchid Ln, 2nd Floor, 23C</Text>
            <Text>Cardiff</Text>
            <Text>CF11 7AG</Text>
            <Text>United Kingdom</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[appStyles.text, styles.label]}>Method</Text>
          <View style={styles.content}>
            <Text style={styles.contentShipping}>WT MAG Shipping <Text style={styles.contentName}>£4.99</Text></Text>
          </View>
        </View>

        <View style={styles.lastSection}>
          <Text style={[appStyles.text, styles.label]}>Payment</Text>
          <View style={styles.content}>
            <Text style={styles.contentShipping}>VISA ending with 9299</Text>
          </View>
        </View>
      </View>

      <View style={styles.mainBlock}>
        <View style={styles.paymentSection}>
          <Text style={[appStyles.text, styles.label]}>Contact</Text>
          <Text style={styles.price}>£50.00</Text>
        </View>
        <View style={styles.paymentSection}>
          <Text style={[appStyles.text, styles.label]}>Shipping</Text>
          <Text style={styles.price}>£4.99</Text>
        </View>
        <View style={styles.totalSection}>
          <Text style={[appStyles.text, styles.totalLabel]}>Shipping</Text>
          <Text style={styles.totalPrice}><Text style={styles.totalCurrency}>GBP</Text>£54.99</Text>
        </View>
      </View>

      <Button onPress={() => { navigation.navigate('Payment')}} title="PAY NOW" color="#000" /> 
      <Text style={appStyles.goBack}>Return to Payment</Text>
      
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBlock: {
    borderWidth: 1,
    borderColor: '#DDD',
    marginVertical: 20,
    padding: 20
  },
  section: {
    paddingBottom: 15,
    marginBottom: 15,
    borderBottomColor: '#EEE',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  lastSection: {
    flexDirection: 'row',
  },
  label: {
    width: 100,
    fontSize: 16
  },
  content: {
    flex: 1
  },
  contentEmail: {
    fontWeight: 'bold',
  },
  contentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  contentShipping: {
    fontSize: 16,
  },
  paymentSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  totalSection: {
    borderTopColor: '#EEE',
    borderTopWidth: 1,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalLabel: {
    fontSize: 20
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  totalCurrency: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: '#999',
    marginRight: 10
  },
});