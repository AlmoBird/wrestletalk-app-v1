import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

import appStyles from '../../../styles/appStyles.style';

export default function CheckoutReviewScreen({ navigation }: any) {
  return (
    <ScrollView style={appStyles.container}>
      <Text style={appStyles.title}>Review Order</Text>

      <View style={appStyles.mainBlock}>
        <View style={appStyles.checkoutSection}>
          <Text style={[appStyles.text, appStyles.checkoutLabel]}>Contact</Text>
          <View style={appStyles.content}>
            <Text style={appStyles.contentEmail}>craig.bellamy@gmail.com</Text>
          </View>
        </View>

        <View style={appStyles.checkoutSection}>
          <Text style={[appStyles.text, appStyles.checkoutLabel]}>Ship to</Text>
          <View style={appStyles.content}>
            <Text style={appStyles.contentName}>Craig Bellamy</Text>
            <Text>100 Holmestead St</Text>
            <Text>Orchid Ln, 2nd Floor, 23C</Text>
            <Text>Cardiff</Text>
            <Text>CF11 7AG</Text>
            <Text>United Kingdom</Text>
          </View>
        </View>

        <View style={appStyles.checkoutSection}>
          <Text style={[appStyles.text, appStyles.checkoutLabel]}>Method</Text>
          <View style={appStyles.content}>
            <Text style={appStyles.contentShipping}>WT MAG Shipping <Text style={appStyles.contentName}>£4.99</Text></Text>
          </View>
        </View>

        <View style={appStyles.lastSection}>
          <Text style={[appStyles.text, appStyles.checkoutLabel]}>Payment</Text>
          <View style={appStyles.content}>
            <Text style={appStyles.contentShipping}>VISA ending with 9299</Text>
          </View>
        </View>
      </View>

      <View style={appStyles.mainBlock}>
        <View style={appStyles.paymentSection}>
          <Text style={[appStyles.text, appStyles.checkoutLabel]}>Subtotal</Text>
          <Text style={appStyles.price}>£50.00</Text>
        </View>
        <View style={appStyles.paymentSection}>
          <Text style={[appStyles.text, appStyles.checkoutLabel]}>Shipping</Text>
          <Text style={appStyles.price}>£4.99</Text>
        </View>

        <View style={appStyles.totalSection}>
          <Text style={[appStyles.text, appStyles.totalLabel]}>Total</Text>
          <Text style={appStyles.totalPrice}><Text style={appStyles.totalCurrency}>GBP</Text> £54.99</Text>
        </View>
      </View>


      <Button onPress={() => { navigation.navigate('Confirmation')}} title="PAY NOW" color="#000" /> 
      <Text style={appStyles.goBack}>Return to Payment</Text>
      
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});