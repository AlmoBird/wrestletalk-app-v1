import { Button, ScrollView, Text, TextInput, View } from 'react-native';

import checkoutStyles from './CheckoutStyle.style';

export default function CheckoutContactScreen({ navigation }: any) {
  return (
    <ScrollView style={checkoutStyles.container}>
      <View style={checkoutStyles.section}>
        <Text style={checkoutStyles.title}>Contact Information</Text>
        <Text style={checkoutStyles.text}>Already have an account? <Text style={checkoutStyles.textLink}>Log in</Text></Text>

        <View style={[checkoutStyles.splitSection, checkoutStyles.inputSection]}>
          <View style={checkoutStyles.splitChild}>
            <Text style={[checkoutStyles.text, checkoutStyles.label]}>First Name</Text>
            <TextInput style={checkoutStyles.input}></TextInput>
          </View>
          <View style={checkoutStyles.splitChild}>
            <Text style={[checkoutStyles.text, checkoutStyles.label]}>Last Name</Text>
            <TextInput style={checkoutStyles.input}></TextInput>
          </View>
        </View>

        <View style={[checkoutStyles.inputSection]}>
          <Text style={[checkoutStyles.text, checkoutStyles.label]}>Email</Text>
          <TextInput style={checkoutStyles.input}></TextInput>
        </View>
      </View>


      <View style={checkoutStyles.section}>
        <Text style={checkoutStyles.title}>Shipping Address</Text>

        <View style={[checkoutStyles.inputSection]}>
          <Text style={[checkoutStyles.text, checkoutStyles.label]}>Country/Region</Text>
          <TextInput style={checkoutStyles.input}></TextInput>
        </View>

        <View style={[checkoutStyles.inputSection]}>
          <Text style={[checkoutStyles.text, checkoutStyles.label]}>Address</Text>
          <TextInput style={checkoutStyles.input}></TextInput>
        </View>

        <View style={[checkoutStyles.inputSection]}>
          <Text style={[checkoutStyles.text, checkoutStyles.label]}>Address Details</Text>
          <TextInput style={checkoutStyles.input}></TextInput>
        </View>

        <View style={[checkoutStyles.inputSection]}>
          <Text style={[checkoutStyles.text, checkoutStyles.label]}>City</Text>
          <TextInput style={checkoutStyles.input}></TextInput>
        </View>

        <View style={[checkoutStyles.splitSection, checkoutStyles.inputSection]}>
          <View style={checkoutStyles.splitChild}>
            <Text style={[checkoutStyles.text, checkoutStyles.label]}>County</Text>
            <TextInput style={checkoutStyles.input}></TextInput>
          </View>
          <View style={checkoutStyles.splitChild}>
            <Text style={[checkoutStyles.text, checkoutStyles.label]}>Post Code</Text>
            <TextInput style={checkoutStyles.input}></TextInput>
          </View>
        </View>
      </View>

      <Button onPress={() => { navigation.navigate('Shipping')}} title="CONTINUE TO SHIPPING" color="#000" /> 
      <Text style={checkoutStyles.goBack}>Go Back</Text>
      
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>

    </ScrollView>
  );
}