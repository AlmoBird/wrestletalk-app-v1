import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import appStyles from '../styles/appStyles.style';

export default function RegisterScreen({ navigation }: any) {
  return (
    <View style={appStyles.container}>
      <Text style={appStyles.title}>Register</Text>
      <Text style={appStyles.text}>Already registered? <TouchableOpacity onPress={() => { navigation.navigate('Login')}}><Text style={appStyles.textLink}>Log in</Text></TouchableOpacity></Text>

      <View style={appStyles.section}>
        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>First Name</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Surname</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Email</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>

        <View style={[appStyles.inputSection]}>
          <Text style={[appStyles.text, appStyles.label]}>Password</Text>
          <TextInput style={appStyles.input}></TextInput>
        </View>
      </View>

      <Button onPress={() => { navigation.navigate('')}} title="REGISTER" color="#000" /> 
    </View>
  );
}

const styles = StyleSheet.create({

});
