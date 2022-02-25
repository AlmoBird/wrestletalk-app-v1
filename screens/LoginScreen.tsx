import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Linking } from 'react-native';
import appStyles from '../styles/appStyles.style';

export default function LoginScreen({ navigation }: any) {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Login</Text>
      
      <Text style={appStyles.text}>Not registered? <TouchableOpacity onPress={() => { navigation.navigate('Register')}}><Text style={appStyles.textLink}>Register</Text></TouchableOpacity></Text>

      <View style={appStyles.section}>
        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Email</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Password</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>
      </View>

      <Button onPress={() => { navigation.navigate('')}} title="LOGIN" color="#000" /> 
      <TouchableOpacity onPress={() => { navigation.navigate('Password')}}><Text style={appStyles.goBack}>Forgot Password?</Text></TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

});
