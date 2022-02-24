import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

import checkoutStyles from './CheckoutStyle.style';

export default function CheckoutShippingScreen({ navigation }: any) {

  const [check1, setCheck1] = useState(false);
  
  return (
    <ScrollView style={checkoutStyles.container}>
      <View style={checkoutStyles.section}>
        <Text style={checkoutStyles.title}>Billing Details</Text>
        <Text style={checkoutStyles.text}>Confirm your details</Text>

        <View style={[checkoutStyles.inputSection]}>
          <Text style={[checkoutStyles.text, checkoutStyles.label]}>Contact</Text>
          <TextInput style={checkoutStyles.input}></TextInput>
        </View>

        <View style={[checkoutStyles.inputSection]}>
          <Text style={[checkoutStyles.text, checkoutStyles.label]}>Ship to</Text>
          <TextInput style={checkoutStyles.input}></TextInput>
        </View>

        <CheckBox
          title="Same as shipping address"
          checked={check1}
          onPress={() => setCheck1(!check1)}
        />
      </View>


      <View style={checkoutStyles.section}>
        <Text style={checkoutStyles.title}>Shipping Method</Text>

        <View style={[checkoutStyles.inputSection]}>
          <Text style={[checkoutStyles.text, checkoutStyles.label]}>Country/Region</Text>
          <TextInput style={checkoutStyles.input}></TextInput>
        </View>

      </View>

      <Button onPress={() => { navigation.navigate('Payment')}} title="CONTINUE TO PAYMENT" color="#000" /> 
      <Text style={checkoutStyles.goBack}>Go Back</Text>
      
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>

    </ScrollView>
  );
}