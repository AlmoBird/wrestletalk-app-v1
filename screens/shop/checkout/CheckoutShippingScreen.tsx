import { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';

import appStyles from '../../../styles/appStyles.style';

export default function CheckoutShippingScreen({ navigation }: any) {

  const [check1, setCheck1] = useState(false);
  
  return (
    <ScrollView style={appStyles.container}>
      <View style={appStyles.section}>
        <Text style={appStyles.title}>Billing Details</Text>
        <Text style={appStyles.text}>Confirm your details</Text>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Contact</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Ship to</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <CheckBox
          title="Same as shipping address"
          checked={check1}
          onPress={() => setCheck1(!check1)}
        />
      </View>


      <View style={appStyles.section}>
        <Text style={appStyles.title}>Shipping Method</Text>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Country/Region</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

      </View>

      <Button onPress={() => { navigation.navigate('Payment')}} title="CONTINUE TO PAYMENT" color="#000" /> 
      <Text style={appStyles.goBack}>Go Back</Text>
      
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>

    </ScrollView>
  );
}