import { ScrollView, StyleSheet, Text, View, Button, TextInput } from 'react-native';

import appStyles from '../../../styles/appStyles.style';

export default function CheckoutPaymentScreen({ navigation }: any) {
  return (
    <ScrollView style={appStyles.container}>
      <Text style={appStyles.title}>Payment</Text>
      <Text style={appStyles.text}>All transactions secured and encrypted</Text>

      <View style={styles.paymentBlock}>
        <View style={styles.paymentHeader}><Text>Credit Card</Text></View>


        <View style={styles.paymentEntryBlock}>

          <View style={[appStyles.inputSection]}>
            <Text style={[appStyles.text, appStyles.label]}>Card Number</Text>
            <TextInput style={appStyles.input}></TextInput>
          </View>

          <View style={[appStyles.inputSection]}>
            <Text style={[appStyles.text, appStyles.label]}>Name on Card</Text>
            <TextInput style={appStyles.input}></TextInput>
          </View>

          <View style={[appStyles.splitSection, appStyles.inputSection]}>
            <View style={appStyles.splitChild}>
              <Text style={[appStyles.text, appStyles.label]}>Expiration Date</Text>
              <TextInput style={appStyles.input}></TextInput>
            </View>
            <View style={appStyles.splitChild}>
              <Text style={[appStyles.text, appStyles.label]}>CVV</Text>
              <TextInput style={appStyles.input}></TextInput>
            </View>
          </View>

        </View>


        <View style={styles.paymentHeader}><Text>PayPal</Text></View>
      </View>

      <Button onPress={() => { navigation.navigate('Review')}} title="REVIEW ORDER" color="#000" /> 
      <Text style={appStyles.goBack}>Return to Shipping</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  paymentBlock: {
    borderLeftWidth: 1,
    borderLeftColor: '#DDD',
    borderRightWidth: 1,
    borderRightColor: '#DDD',
    marginVertical: 30
  },
  paymentHeader: {
    backgroundColor: '#F7f7f7',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  paymentEntryBlock: {
    paddingHorizontal: 20,
    paddingBottom: 20
  }
});
