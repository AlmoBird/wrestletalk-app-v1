import { Button, ScrollView, Text, TextInput, View } from 'react-native';

import appStyles from '../../../styles/appStyles.style';

export default function CheckoutContactScreen({ navigation }: any) {
  return (
    <ScrollView style={appStyles.container}>
      <View style={appStyles.section}>
        <Text style={appStyles.title}>Contact Information</Text>
        <Text style={appStyles.text}>Already have an account? <Text style={appStyles.textLink}>Log in</Text></Text>

        <View style={[appStyles.splitSection, appStyles.inputSection]}>
          <View style={appStyles.splitChild}>
            <Text style={[appStyles.text, appStyles.label]}>First Name</Text>
            <TextInput style={appStyles.input}></TextInput>
          </View>
          <View style={appStyles.splitChild}>
            <Text style={[appStyles.text, appStyles.label]}>Last Name</Text>
            <TextInput style={appStyles.input}></TextInput>
          </View>
        </View>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Email</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>
      </View>


      <View style={appStyles.section}>
        <Text style={appStyles.title}>Shipping Address</Text>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Country/Region</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Address</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Address Details</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>City</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <View style={[appStyles.splitSection, appStyles.inputSection]}>
          <View style={appStyles.splitChild}>
            <Text style={[appStyles.text, appStyles.label]}>County</Text>
            <TextInput style={appStyles.input}></TextInput>
          </View>
          <View style={appStyles.splitChild}>
            <Text style={[appStyles.text, appStyles.label]}>Post Code</Text>
            <TextInput style={appStyles.input}></TextInput>
          </View>
        </View>
      </View>

      <Button onPress={() => { navigation.navigate('Shipping')}} title="CONTINUE TO SHIPPING" color="#000" /> 
      <Text style={appStyles.goBack}>Go Back</Text>
      
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>
      <Text>&nbsp;</Text>

    </ScrollView>
  );
}